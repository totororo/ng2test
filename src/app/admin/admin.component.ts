import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base-component';
import { AppService } from '../app.service';
import { UserService } from '../service/user.service';
import { User } from '../object/user.object';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent extends BaseComponent implements OnInit {

  public isCollapsed: boolean = true;
  public status: { isopen: boolean } = { isopen: false };

  userProfile: User = {
    uid: "",
    display_name: "Any",
    photo_url: "",
    lang: "ja"
  };

  activeDevicePage: boolean = false;

  userProfileImageFile;
  fileName: string;
  inputUserName: string;

  constructor(
    public appService: AppService,
    private userService: UserService
  ) {
    super(appService);
    this.userService.getUserProfiles().subscribe(result => {
      this.userProfile = result[0];
      this.inputUserName = this.userProfile.display_name;
    });
  }

  ngOnInit() {
    this.userService.findUserById(this.appService.user.uid);
  }

  saveData() {
    if (this.inputUserName)
      this.userProfile.display_name = this.inputUserName;

    this.userService.saveUserProfile(this.userProfile).catch(error => {
      console.log(error);
    });

    if (this.userProfileImageFile) {
      this.upload();
    }
  }

  upload() {
    if (!this.userProfileImageFile) return;
    let re = this.userService.fileUpload(this.userProfileImageFile);
    re.on('state_changed', snapshot => {
      console.log(snapshot);
    }, error => {
      console.log(error);
    }, () => {
      this.userProfile.photo_url = re.snapshot.downloadURL;
      this.userService.saveUserProfile(this.userProfile).catch(error => {
        console.log(error);
      });
      this.userProfileImageFile = null;
    });
  }

  onChange(event) {
    this.userProfileImageFile = event.target.files[0];
    this.fileName = this.userProfileImageFile.name;
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
