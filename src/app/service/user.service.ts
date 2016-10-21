import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

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

    saveUserProfile(user: FirebaseAuthState) {
        let itemObservable = this.angularFire.database.object('/iot/user_profile/' + user.uid);
        return itemObservable.set({ uid: user.uid, display_name: user.auth.displayName == null ? "ANONY" : user.auth.displayName, photo_url: user.auth.photoURL });
    }

    findUserById(uid) {
        this.uidSubject.next(uid);
    }

}


