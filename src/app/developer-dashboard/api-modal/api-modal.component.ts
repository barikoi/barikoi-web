import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ClipboardService } from 'ngx-clipboard';


interface DialogData {
  revgeo: string;
  autocom: string;
}

@Component({
  selector: 'app-api-modal',
  templateUrl: './api-modal.component.html',
  styleUrls: ['./api-modal.component.scss']
})

export class ApiModalComponent implements OnInit {
  private apiKey;
  public geo: String
  public revgeo: String;
  public autocom: String;
  public nearby: String;
  public distance: String;
  public routing: String;
  isCopied1 = false;
  isCopied2 = false;
  isCopied3 = false;
  isCopied4 = false;
  isCopied5 = false;
  isCopied6 = false;
  
  
  constructor(
    public dialogRef: MatDialogRef<ApiModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _clipboardService: ClipboardService) {
      this.apiKey = data.apiKey;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    let baseApi = 'https://barikoi.xyz/v1/api/'
    this.geo = baseApi+'search/geocode/'+this.apiKey+'/place?'
    this.revgeo = baseApi+'search/reverse/geocode/'+this.apiKey+'/place?'
    this.autocom = baseApi+'search/autocomplete/'+this.apiKey+'/place?'
    this.nearby = baseApi+'search/nearby/'+this.apiKey+'/'
    this.distance = baseApi+'distance/'+this.apiKey+'/'
    this.routing = baseApi+'route/'+this.apiKey+'/'

    // Handle copy response globally https://github.com/maxisam/ngx-clipboard#handle-copy-response-globally
    this._clipboardService.copyResponse$.subscribe(re => {
        if (re.isSuccess) {
          console.log(re)
            // alert('copy success!');
        }
    });
  }
  callServiceToCopy() {
      this._clipboardService.copyFromContent('This is copy thru service copyFromContent directly');
  }

  onCopySuccess(val) {
        console.log(val)
        switch(val){

          case '#inputTarget1':
              this.isCopied1 = true;
              this.isCopied2 = false;
              this.isCopied3 = false;
              this.isCopied4 = false;
              this.isCopied5 = false;
              this.isCopied6 = false;
              break

          case '#inputTarget2':
              this.isCopied1 = false;
              this.isCopied2 = true;
              this.isCopied3 = false;
              this.isCopied4 = false;
              this.isCopied5 = false;
              this.isCopied6 = false;
              break
         
          case '#inputTarget3':
              this.isCopied1 = false;
              this.isCopied2 = false;
              this.isCopied3 = true;
              this.isCopied4 = false;
              this.isCopied5 = false;
              this.isCopied6 = false;
              break

          case '#inputTarget4':
              this.isCopied1 = false;
              this.isCopied2 = false;
              this.isCopied3 = false;
              this.isCopied4 = true;
              this.isCopied5 = false;
              this.isCopied6 = false;
              break
          
          case '#inputTarget5':
              this.isCopied1 = false;
              this.isCopied2 = false;
              this.isCopied3 = false;
              this.isCopied4 = false;
              this.isCopied5 = true;
              this.isCopied6 = false;
              break

          case '#inputTarget6':
              this.isCopied1 = false;
              this.isCopied2 = false;
              this.isCopied3 = false;
              this.isCopied4 = false;
              this.isCopied5 = false;
              this.isCopied6 = true;
              break

        }

  }

  onCopyFailure() {
    alert('copy fail!');
}
}