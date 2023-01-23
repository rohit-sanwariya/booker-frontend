import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderModule } from 'src/app/header/header.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([
      {
        path:'',component:HomeComponent,
      }
    ])
  ]
})
export class HomeModule { }
