import { Component } from '@angular/core';

import { AppService } from '../../app.service';
import { DeviceService } from '../../service/device.service';
import { Device } from '../../object/device.object';

@Component({
    templateUrl: './device.component.html',
})

export class DeviceComponent {

    isNew = false;
    isList = true;
    isDetail = false;

    deviceItems: Array<any> = [];
    deviceItem: Device = {
        uid: "",
        device_id: "",
        device_description: "",
        device_token: "",
        register_date: 0,
        public_yn: false
    } as Device;

    uploadFile;

    constructor(
        private deviceService: DeviceService,
        private appService: AppService) {
        this.showStatus('list');

    }

    showStatus(status) {
        switch (status) {
            case 'new':
                this.isNew = true;
                this.isList = false;
                this.isDetail = false;
                this.deviceItem.device_id = Date.now() + this.appService.user.uid;
                break;
            case 'list':
                this.isNew = false;
                this.isList = true;
                this.isDetail = false;
                break;
            case 'detail':
                this.isNew = false;
                this.isList = false;
                this.isDetail = true;
                break;
        }
    }

    saveDevice() {
        this.showStatus('list');
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
}