import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';


const shared = [
  MaterialModule,
  RouterModule,
]
@NgModule({
  declarations: [],
  imports: [
...shared
  ],
  exports:[
...shared
  ]
})
export class SharedModule { }
