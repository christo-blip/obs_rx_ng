import { Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { CourseserviceComponent } from './components/courseservice/courseservice.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { CustomdirComponent } from './components/customdir/customdir.component';
import { Component } from '@angular/core';
import { PromiseComponent } from './categories/promise/promise.component';
import { SignalcomponentComponent } from './components/signalcomponent/signalcomponent.component';

export const routes: Routes = [
{path:'',redirectTo:'course',pathMatch:'full'},
{path:'course',component:CourseserviceComponent},
{path:'servicenormal',loadComponent:() =>import('./components/userlist/userlist.component').then(m=>m.UserlistComponent)},
{path:'Addbook',loadComponent:() =>import('./components/addbook/addbook.component').then(m=>m.AddbookComponent)},
{path:'custom',loadComponent:() =>import('./components/customdir/customdir.component').then(m=>m.CustomdirComponent)},
{path:'promise',loadComponent:() => import('./categories/promise/promise.component').then(m=>m.PromiseComponent)},
{path:'sig',loadComponent:()=>import('./components/signalcomponent/signalcomponent.component').then(m=>m.SignalcomponentComponent)}
];
