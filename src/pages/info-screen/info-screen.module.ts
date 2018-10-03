import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoScreenPage } from './info-screen';

@NgModule({
  declarations: [
    InfoScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoScreenPage),
  ],
})
export class InfoScreenPageModule {}
