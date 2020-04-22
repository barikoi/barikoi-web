import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BkoiCloudService} from '../../services/bkoi-cloud.service'
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
            console.log(data)
            this.toastr.success('Hello world!', 'Toastr fun!');
          },
          err=> console.log(err)
        )
      }
  }

}
