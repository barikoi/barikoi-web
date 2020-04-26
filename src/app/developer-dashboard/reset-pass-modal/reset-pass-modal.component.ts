import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BkoiCloudService} from '../../services/bkoi-cloud.service';
import { ToastrService } from 'ngx-toastr';





interface DialogData {
  revgeo: string;
  autocom: string;
}

@Component({
  selector: 'app-reset-pass-modal',
  templateUrl: './reset-pass-modal.component.html',
  styleUrls: ['./reset-pass-modal.component.scss']
})
export class ResetPassModalComponent implements OnInit {

  public current_pass;
  public new_pass;
  public hide1;
  public hide2;

  constructor(
    public dialogRef: MatDialogRef<ResetPassModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public cloudService: BkoiCloudService, private toastr: ToastrService) {
      // this.apiKey = data.apiKey;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


  changePass(cp, np):void {
      if(np != '' && cp != ''){
        this.cloudService.change_password(cp,np).subscribe(
          data=>{
            if(data['message'] == 'Password changed successfully.'){
              this.dialogRef.close();
              this.toastr.success('Success!', data['message'], {
                timeOut: 3000
              });
            }
            else {
              // this.dialogRef.close();
              this.toastr.error('Error!', data['message'], {
                timeOut: 3000
              });
            }
            
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
