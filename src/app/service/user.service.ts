import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { AppService } from '../app.service';
import { User } from '../object/user.object';

@Injectable()
export class UserService {

    uidSubject = new Subject();

    constructor(private angularFire: AngularFire) {
    }

    getUserProfiles() {
        return this.angularFire.database.list("/iot/user_profile/", {
            query: {
                orderByChild: 'uid',
                equalTo: this.uidSubject
            }
        });
    }

    saveUserProfile(user: User) {
        let itemObservable = this.angularFire.database.object('/iot/user_profile/' + user.uid);
        if (!user.display_name) {
            user.display_name = "Anony";
        }
        return itemObservable.set(User.clone(user));
    }

    findUserById(uid) {
        this.uidSubject.next(uid);
    }

    fileUpload(file) {
        let storageRef = firebase.storage().ref();
        let fileName = AppService.randomToken(5);
        return storageRef.child('images/' + fileName).put(file);
    }

}


