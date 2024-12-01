import { Component, OnInit } from '@angular/core';
import { MatrialModule } from '../../../shared/matrial.module';
import { MatRadioButton } from '@angular/material/radio';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatrialModule, MatRadioButton, RouterLink, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup
  users: any[] = []
  type: any = "students"

  constructor(private fb: FormBuilder, private services: AuthService, private router: Router) { }




  ngOnInit(): void {
    this.createform();
    this.getusers()
  }
  createform() {
    this.loginform = this.fb.group({
      type: [this.type],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    })
  }

  getRole(event: any) {
    this.type = event.value
    this.getusers()

  }
  getusers() {
    this.services.getuser(this.type).subscribe((res: any) => {
      this.users = res
    })
  }

  submit() {
    let index = this.users.findIndex(item => item.email == this.loginform.value.email && item.password == this.loginform.value.password)
    if (index == -1) {
      alert("user or pass is incorrect")
    } else {
      const model = {
        username: this.users[index].username,
        role: this.type
      }
      this.services.login(model).subscribe
        ((res: any) => {
          this.services.user.next(res)
          // alert("success")
          this.router.navigate(['/subjects'])

        })
    }
  }
}
