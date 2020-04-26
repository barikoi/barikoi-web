import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ForgotPassComponent} from '../forgot-pass/forgot-pass.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  public hide1;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
  }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
    console.log('problem is here')
    if (await this.authService.canActivate()) {
      await this.router.navigate(['/dev/account']);
    }
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        let cred = {
          'email': username,
          'password': password 
        }
        await this.authService.login(cred).subscribe(
          result => {
            console.log(result)
            this.authService.setSession(result.data.token)
          },
          err => {
              console.error(`something went wrong, ${err}`);
          },
          () => {}
       );
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }


  openPRDialog(): void {
    const dialogRef = this.dialog.open(ForgotPassComponent, {
      width: '40em',
      backdropClass:'custom-dialog-backdrop-class',
      panelClass:'custom-dialog-panel-class',
      // data: {apiKey: this.user_api_info.current_active_key}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //     this.toastr.success('Hello world!', 'Toastr fun!');
    // });
  }

}