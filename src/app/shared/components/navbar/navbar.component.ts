import { Component, OnInit } from '@angular/core';
import { MatrialModule } from '../../matrial.module';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatrialModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  constructor(private services: AuthService) { }
  user: any = null

  ngOnInit(): void {
    this.services.user.subscribe((res: any) => {
      if (res.role) { this.user = res }
      console.log(this.user)
    })

  }
  logout() {

    const model = {}
    this.services.login(model).subscribe(

      res => {
        this.user = null
        this.services.user.next(res)
      }

    )
  }

}