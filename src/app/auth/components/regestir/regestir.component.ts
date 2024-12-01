import { Component, OnInit } from '@angular/core';
import { MatrialModule } from '../../../shared/matrial.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regestir',
  standalone: true,
  imports: [MatrialModule, SharedModule],
  templateUrl: './regestir.component.html',
  styleUrl: './regestir.component.css'
})
export class RegestirComponent implements OnInit {


  userform!: FormGroup
  students: any[] = []

  constructor(private fb: FormBuilder, private services: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createform()
    this.getstudent()
  }

  createform() {
    this.userform = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    })
  }


  getstudent() {
    this.services.getuser('students').subscribe((res: any) => {
      this.students = res
    })

  }

  submit() {
    const model = {
      username: this.userform.value.username,
      email: this.userform.value.email,
      password: this.userform.value.password
    }

    let index = this.students.findIndex(item => item.email == this.userform.value.email)
    if (index !== -1) {
      alert("this email was done before")
    } else {
      this.services.createuser(model).subscribe
        (res => {
          alert("success")
          this.router.navigate(['/subjects'])
        })
    }

  }

}
