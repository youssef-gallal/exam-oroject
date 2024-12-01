import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegestirComponent } from './auth/components/regestir/regestir.component';
import { NewExamsComponent } from './doctor/components/new-exams/new-exams.component';
import { StudentsComponent } from './doctor/components/students/students.component';
import { SubjectsComponent } from './doctor/components/subjects/subjects.component';
import { ExamComponent } from './student/components/exam/exam.component';

export const routes: Routes =
    [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegestirComponent },
        { path: 'exam', component: ExamComponent },
        { path: 'students', component: StudentsComponent },
        { path: 'subjects', component: SubjectsComponent },
        { path: 'new-exam', component: NewExamsComponent },
        // { path: '**', redirectTo: 'register', pathMatch: 'full' },
        { path: '', redirectTo: 'login', pathMatch: 'full' }
    ];
