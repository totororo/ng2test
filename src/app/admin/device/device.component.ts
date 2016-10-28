import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { AppService } from '../../app.service';
import { DeviceService } from '../../service/device.service';
import { Device, DeviceType, Sensor, SensorType, CommandType, TriggerType, ConditionalType } from '../../object/device.object';

@Component({
    templateUrl: './device.component.html',
})

export class DeviceComponent implements OnInit, OnDestroy {
    @ViewChild('childModal') public childModal: ModalDirective;

    step: number;
    deviceItems: Array<Device> = [];
    sensorItems: Array<Sensor> = [];
    public isCollapsed: boolean = true;

    deviceItem: Device;
    sensorItem: Sensor
    display_name;
    deviceSubscribe;
    itemsObj;

    constructor(
        private deviceService: DeviceService,
        private appService: AppService) {
        this.resetData();
    }

    ngOnInit() {
        this.itemsObj = this.deviceService.getUserAllDevices(this.appService.user.uid);
        this.deviceSubscribe = this.itemsObj.subscribe(result => {
            this.deviceItems = result;
        });
    }

    resetData() {
        this.deviceItem = {
            uid: this.appService.user.uid,
            device_id: AppService.randomToken(16),
            display_name: "",
            device_description: "",
            device_type: DeviceType.Arduino,
            register_date: Date.now(),
            public_yn: false,
            sensors: []
        } as Device;

        this.sensorItem = {
            sensor_id: AppService.randomToken(6),
            sensor_name: "",
            sensor_type: SensorType.Receive,
            command_type: CommandType.Trigger,
            trigger_name: TriggerType.PushNotification,
            trigger_conditional: ConditionalType.Equal,
            trigger_conditional_value: 0,
            control_command: ""
        } as Sensor;

        this.step = 1;
    }

    setStep(step: number) {
        this.step = step;
    }

    saveData(): void {
        console.log("save ...");
        console.log(this.deviceItem);
        this.setStep(4);
        this.deviceItem.sensors = [this.sensorItem];
        this.deviceItem.register_date = Date.now();
        this.deviceService.addDevice(this.deviceItem).catch(error => {
            console.log(error);
        });
        this.setStep(4);
    }

    updateData(key) {
        let newSensors = [];
        this.deviceItem.sensors.forEach(s => {
            if (this.sensorItem.sensor_id == s.sensor_id) {
                newSensors.push(this.sensorItem);
            } else {
                newSensors.push(s);
            }
        });

        this.deviceItem.sensors = newSensors;
        this.deviceItem.register_date = Date.now();
        this.itemsObj.update(key, Device.clone(this.deviceItem));
        this.setStep(4);
    }

    editDevice(deviceId) {
        this.resetData();
        this.deviceItems.forEach(obj => {
            if (obj.device_id == deviceId) {
                this.display_name = obj.display_name;
                this.deviceItem = obj;
                if (this.deviceItem.sensors.length > 0)
                    this.sensorItem = this.deviceItem.sensors[0];

                return;
            }
        });
        this.childModal.show();
    }

    hideChildModal(): void {
        this.childModal.hide();
        this.deviceSubscribe = this.itemsObj.subscribe(result => {
            this.deviceItems = result;
        });
        this.setStep(1);
    }

    ngOnDestroy() {
        if (this.deviceSubscribe) {
            this.deviceSubscribe.unsubscribe();
        }
    }

}