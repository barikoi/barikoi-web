import { Component, OnInit} from '@angular/core';
import { StateDataService } from '../../services/state-data.service'
import { BkoiCloudService } from '../../services/bkoi-cloud.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ApiModalComponent} from '../api-modal/api-modal.component';
import { ResetPassModalComponent} from '../reset-pass-modal/reset-pass-modal.component';




interface DialogData {
  email: string;
}


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  email: string;
  user_info: any;
  user_api_info: any;
  show_api_gen_option = true

  constructor(private stateDataService: StateDataService, private cloudService: BkoiCloudService, public dialog: MatDialog) { }

  ngOnInit() {
    this.user_info = this.stateDataService.pass_user_info()
    this.user_api_info = this.stateDataService.pass_user_api_info()
    try{
      this.user_api_info.current_active_key == undefined ? this.show_api_gen_option = true : this.show_api_gen_option = false
    }catch(e){
      this.show_api_gen_option = true
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ApiModalComponent, {
      width: '40em',
      backdropClass:'custom-dialog-backdrop-class',
      panelClass:'custom-dialog-panel-class',
      data: {apiKey: this.user_api_info.current_active_key}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.email = result;
    // });
  }


  openPRDialog(): void {
    const dialogRef = this.dialog.open(ResetPassModalComponent, {
      width: '40em',
      backdropClass:'custom-dialog-backdrop-class',
      panelClass:'custom-dialog-panel-class',
      // data: {apiKey: this.user_api_info.current_active_key}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //     this.toastr.success('Hello world!', 'Toastr fun!');
    // });
  }

  generate_api_key(): void{
    this.cloudService.gen_api(this.user_info.email).subscribe(
      data =>{
          this.user_api_info.message = 'Active Api Key: 1'
          this.user_api_info.current_active_key = data['key']
          let temp_data = {
            'message': 'Active Api Key: 1',
            'current_active_key': data['key']
          }
          localStorage.setItem('apiinfo', JSON.stringify(temp_data));
          this.show_api_gen_option = false
      },
      err => console.log(err)
    )
  }

}
