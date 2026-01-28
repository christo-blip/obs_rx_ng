import { Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { CourseserviceComponent } from './components/courseservice/courseservice.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { CustomdirComponent } from './components/customdir/customdir.component';
import { Component } from '@angular/core';
import { PromiseComponent } from './categories/promise/promise.component';
import { SignalcomponentComponent } from './components/signalcomponent/signalcomponent.component';
import { JSONTOFORMComponent } from './json-to-form/json-to-form.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { ContextcomponentComponent } from './components/contextcomponent/contextcomponent.component';
import { UnrelatedSenderComponent } from './components/unrelated-sender/unrelated-sender.component';
import { UnrelatedReceiverComponent } from './components/unrelated-receiver/unrelated-receiver.component';

export const routes: Routes = [
{path:'',redirectTo:'course',pathMatch:'full'},
{path:'course',component:CourseserviceComponent},
{path:'servicenormal',loadComponent:() =>import('./components/userlist/userlist.component').then(m=>m.UserlistComponent)},
{path:'Addbook',loadComponent:() =>import('./components/addbook/addbook.component').then(m=>m.AddbookComponent)},
{path:'custom',loadComponent:() =>import('./components/customdir/customdir.component').then(m=>m.CustomdirComponent)},
{path:'promise',loadComponent:() => import('./categories/promise/promise.component').then(m=>m.PromiseComponent)},
{path:'sig',loadComponent:()=>import('./components/signalcomponent/signalcomponent.component').then(m=>m.SignalcomponentComponent)},
{path:'jsonform',loadComponent:()=>import('./json-to-form/json-to-form.component').then(m=>m.JSONTOFORMComponent)},
{path:'life',loadComponent:()=>import('./lifecyclehook/lifecyclehook.component').then(m=>m.LifecyclehookComponent)},
{path:'DSA',loadComponent:()=>import('./components/submit-form/submit-form.component').then(m=>m.SubmitFormComponent)},
{path:'gallery',loadComponent:()=>import('./components/gallery/gallery.component').then(m=>m.GalleryComponent)},
{path:'context',loadComponent:()=>import('./components/contextcomponent/contextcomponent.component').then(m=>m.ContextcomponentComponent)},
{path:'unrelated-sender',loadComponent:()=>import('./components/unrelated-sender/unrelated-sender.component').then(m=>m.UnrelatedSenderComponent)},
{path:'unrelated-receiver',loadComponent:()=>import('./components/unrelated-receiver/unrelated-receiver.component').then(m=>m.UnrelatedReceiverComponent)},
];
