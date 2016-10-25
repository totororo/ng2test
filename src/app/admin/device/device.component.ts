import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { AppService } from '../../app.service';
import { DeviceService } from '../../service/device.service';
import { Device, DeviceType, Sensor, SensorType, TriggerType } from '../../object/device.object';

@Component({
    templateUrl: './device.component.html',
})

export class DeviceComponent implements OnInit, OnDestroy {
    @ViewChild('childModal') public childModal: ModalDirective;

    step = 1;
    deviceItems: Array<Device> = [];
    sensorItems: Array<Sensor> = [];
    deviceItem: Device = {
        uid: this.appService.user.uid,
        device_id: this.deviceService.randomToken(),
        display_name: "",
        device_description: "",
        device_type: DeviceType.Arduino,
        register_date: -1,
        public_yn: false
    } as Device;

    sensorItem: Sensor = {
        uid: this.appService.user.uid,
        device_id: this.deviceItem.device_id,
        sensor_id: this.deviceService.randomToken(),
        sensor_name: "",
        sensor_type: SensorType.Receive,
        sensor_trigger: TriggerType.PushNotification,
        sensor_controller_command: ""
    } as Sensor;

    uploadFile;
    deviceSubscribe;
    sensorSubscribe;
    constructor(
        private deviceService: DeviceService,
        private appService: AppService) {

    }

    ngOnInit() {
        this.deviceSubscribe = this.deviceService.getUserAllDevices(this.appService.user.uid).subscribe(result => {
            this.deviceItems = result;
        });

        this.sensorSubscribe = this.deviceService.getUserDeviceAllSensor(this.appService.user.uid).subscribe(result =>{ 
            this.sensorItems = result;
        });
    }

    setStep(step: number) {
        this.step = step;
    }

    saveData(): void {
        this.setStep(4);
        this.deviceService.addDevice(this.deviceItem).catch(error => {
            console.log(error);
        });
        this.deviceService.addSensor(this.sensorItem).catch(error => {
            console.log(error);
        });

    }

    upload() {

        let re = this.deviceService.fileUpload(this.uploadFile);
        re.on('state_changed', snapshot => {
            console.log(snapshot);
        }, error => {
            console.log(error);
        }, () => {
            console.log(re.snapshot.downloadURL);
        });

    }

    onChange(event) {
        this.uploadFile = event.target.files[0];
        console.log(this.uploadFile);
    }

    ngOnDestroy() {
        if (this.deviceSubscribe) {
            this.deviceSubscribe.unsubscribe();
        }
    }

}