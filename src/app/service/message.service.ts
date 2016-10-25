import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MessageService {

    messageSubject = new Subject();

    constructor(private angularFire: AngularFire) {
    }

    getMessageByDeviceId(deviceId: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/message/" + deviceId, {
            query: {
                orderByChild: 'device_id',
                equalTo: this.messageSubject,
                limitToLast: 100
            }
        });
    }

    findMessageByDeviceId(deviceId) {
        setTimeout(() => {
            this.messageSubject.next(deviceId);
        }, 4000);
    }

}


