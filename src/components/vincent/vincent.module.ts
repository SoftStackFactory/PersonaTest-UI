import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Vincent } from './vincent';

@NgModule({
  declarations: [
    Vincent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Vincent
  ]
})
export class VincentModule {}
