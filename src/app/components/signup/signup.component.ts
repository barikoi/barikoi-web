import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
  form: FormGroup;
  public Signupvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  public hide1;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
  }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';

    this.form = this.fb.group({
      username: ['', Validators.required],
      email:['', Validators.email],
      phone:['', Validators.required],
      password: ['', Validators.required]
    });

    if (await this.authService.canActivate()) {
      await this.router.navigate(['/dev/analytics']);
    }
  }

  async onSubmit() {
    this.Signupvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const email = this.form.get('email').value;
        const phone = this.form.get('phone').value;
        const password = this.form.get('password').value;
        let cred = {
          'name': username,
          'email': email,
          'phone': phone,
          'password': password,
          'userType': 2
        }
        await this.authService.signup(cred).subscribe(
          result => {
            console.log(result)
            // this.authService.setSession(result.data.token)
            let cred = {
              'email': email,
              'password': password 
            }
            console.log('before direct login')
            this.authService.login(cred).subscribe(
              result => {
                console.log(result)
                this.authService.setSession(result.data.token)
              },
              err => {
                  console.error(`something went wrong, ${err}`);
              },
              () => {}
            );

          },
          err => {
              console.log(err)
              console.error(`something went wrong, ${err}`);
              if(err.error.messages.hasOwnProperty("email"))
              this.toastr.warning('Warning!', err.error.messages.email[0], {
                timeOut: 3000
              });
              if(err.error.messages.hasOwnProperty("phone"))
              this.toastr.warning('Warning!', err.error.messages.phone[0], {
                timeOut: 3000
              });
          },
          () => {}
       );
      } catch (err) {
        this.Signupvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
      
    }
  }
}