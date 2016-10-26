import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { Device, Sensor } from '../object/device.object';

@Injectable()
export class DeviceService {

    deviceSubject = new Subject();
    sensorSubject = new Subject();

    constructor(private angularFire: AngularFire) {

    }

    getUserAllDevices(uid: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/device/" + uid, {
            query: {
                orderByChild: "device_id",
            }
        });
    }

    getUserDevices(uid: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/device/" + uid, {
            query: {
                orderByChild: "device_id",
                equalTo: this.deviceSubject
            }
        });
    }

    getUserDeviceAllSensor(uid: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/device/" + uid + "/sensor", {
            query: {
                orderByChild: 'sensor_id'
            }
        });
    }

    getUserDeviceSensor(uid: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/sensor/" + uid, {
            query: {
                orderByChild: 'device_id',
                equalTo: this.sensorSubject
            }
        });
    }

    addDevice(device: Device) {
        return this.getUserAllDevices(device.uid).push(device);
    }

    findDeviceById(device_id): void {
        this.deviceSubject.next(device_id);
    }

    saveDevice(uid: string, key: string, device: Device) {
        let timestamp = new Date().getTime();
        let itemObservable = this.angularFire.database.object('/iot/device/' + uid + "/" + key);
        return itemObservable.set(device);
    }

    deleteDevice(uid: string, key: string) {
        return this.getUserAllDevices(uid).remove(key);
    }

    fileUpload(file) {
        let storageRef = firebase.storage().ref();
        return storageRef.child('images/' + file.name).put(file);
    }

}


