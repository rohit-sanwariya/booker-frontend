import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

const material = [
  MatToolbarModule,
]
@NgModule({
  declarations: [],
  imports: [
    ...material
  ],
  exports: [
    ...material
  ],
})
export class MaterialModule { }
