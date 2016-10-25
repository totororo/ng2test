import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { Device, Sensor } from '../object/device.object';

/**
 * Firebase Database
 *
    IOT -
        - device
            - uid
                - device_id
                - display_name
                - device_description
                - device_type
                - register_date
                - public_yn

        - sensor
            - uid
                $device_id
                    - $key
                        - device_id
                        - sensor_id
                        - sensor_name
                        - sendor_type
                        - sensor_trigger
                        - sensor_controller_command

        - support_device_list
            - $key
                - name

        - support_sensor_list
            - $key
                - name

*/

@Injectable()
export class DeviceService {

    deviceSubject = new Subject();
    sensorSubject = new Subject();
    infoSubject = new Subject();

    constructor(private angularFire: AngularFire) {

    }

    getUserAllDevices(uid: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/device/" + uid, {
            query: {
                orderByChild: "device_id",
            }
        });
    }

    getUserDevices(uid: string, deviceId: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/device/" + uid, {
            query: {
                orderByChild: "device_id",
                equalTo: this.deviceSubject
            }
        });
    }

    getUserDeviceAllSensor(uid: string): FirebaseListObservable<any> {
        return this.angularFire.database.list("/iot/sensor/" + uid, {
            query: {
                orderByChild: 'device_id'
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

    addSensor(sensor: Sensor) {
        return this.getUserDeviceAllSensor(sensor.uid).push(sensor);
    }

    findDeviceById(device_id): void {
        this.deviceSubject.next(device_id);
    }

    saveDevice(uid: string, key: string, device: Device) {
        let timestamp = new Date().getTime();
        let itemObservable = this.angularFire.database.object('/iot/device/' + uid + '/' + key);
        return itemObservable.set(device);
    }

    deleteDevice(uid: string, key: string) {
        return this.getUserAllDevices(uid).remove(key);
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


