import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, MatIconModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private services: AuthService) { }
  ngOnInit(): void {
    this.getuserdata()
  }


  getuserdata() {
    this.services.getrole().subscribe(res => {

      this.services.user.next(res)
    })

  }


}



