import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BkoiCloudService} from '../../services/bkoi-cloud.service';
import { ToastrService } from 'ngx-toastr';


interface DialogData {
  revgeo: string;
  autocom: string;
}

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  public email

  constructor(
    public dialogRef: MatDialogRef<ForgotPassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public cloudService: BkoiCloudService, private toastr: ToastrService) {
      // this.apiKey = data.apiKey;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


  sendEmail(email):void {
      if(email != ''){
        this.cloudService.send_email_pass_recovery(email).subscribe(
          data=>{
            this.dialogRef.close();
              this.toastr.success('Info!', data['message'], {
                timeOut: 3000
              });
            
          },
          err=> {
            this.toastr.error('Error!', 'Server Error', {
              timeOut: 3000
            });
          }
        )
      }
  }

}
