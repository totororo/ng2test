import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { Device } from '../object/device.object';

@Injectable()
export class DeviceService {

    deviceSubject = new Subject();
    infoSubject = new Subject();

    constructor(private angularFire: AngularFire) {
    }

    getUserDevices(): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/device/", {
            query: {
                orderByChild: 'uid',
                equalTo: this.deviceSubject
            }
        });
    }

    getUserDeviceInfo(uid: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/device/" + uid, {
            query: {
                orderByChild: 'device_id',
                equalTo: this.infoSubject
            }
        });
    }

    addDevice(device: Device) {
        return this.getUserDevices().push(device);
    }

    findDeviceByUid(uid): void {
        this.deviceSubject.next(uid);
    }

    findDeviceInfo(deviceId): void {
        this.infoSubject.next(deviceId);
    }

    saveDevice(userId, content: Device) {
        let timestamp = new Date().getTime();
        let itemObservable = this.angularFire.database.object('/iot/device/' + userId + '/');
        return itemObservable.set({
            device_id: content.device_id,
            register_date: timestamp,
            device_token: content.device_token,
            device_description: content.device_description,
            public_yn: content.public_yn
        });
    }

    deleteDevice(key) {
        this.getUserDevices().remove(key);
    }

    fileUpload(file) {
        let storageRef = firebase.storage().ref();
        return storageRef.child('images/' + file.name).put(file);
    }

    randomToken(): string {
        let stringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '?'];
        let randomString = "";
        for (let i = 1; i < 15; i++) {
            let randNum = Math.ceil(Math.random() * stringArray.length);
            randomString += stringArray[randNum];
        }
        return randomString;
    }
}


