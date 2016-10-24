import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { AppService } from '../../app.service';
import { DeviceService } from '../../service/device.service';
import { Device } from '../../object/device.object';

@Component({
    templateUrl: './device.component.html',
})

export class DeviceComponent {
    @ViewChild('childModal') public childModal: ModalDirective;
    isNew = false;
    isList = true;
    isDetail = false;

    deviceItems: Array<any> = [];
    deviceItem: Device = {
        uid: "uid",
        device_id: "did",
        device_description: "description",
        device_token: "token",
        register_date: 0,
        public_yn: false
    } as Device;

    uploadFile;

    constructor(
        private deviceService: DeviceService,
        private appService: AppService) {
        this.showStatus('list');
        // test
        this.deviceItems.push(this.deviceItem);
        this.deviceItems.push(this.deviceItem);
        this.deviceItems.push(this.deviceItem);
    }

    showStatus(status) {
        switch (status) {
            case 'new':
                this.isNew = true;
                this.isList = false;
                this.isDetail = false;
                this.deviceItem.device_id = this.deviceService.randomToken();
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

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }
}