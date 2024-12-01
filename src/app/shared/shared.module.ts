import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrialModule } from './matrial.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    MatrialModule,
    CommonModule, NavbarComponent,
    HttpClientModule, ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    MatrialModule,
    CommonModule,
    NavbarComponent, ReactiveFormsModule]
})
export class SharedModule { }
