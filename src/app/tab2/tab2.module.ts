import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { InfoComponent } from './containers/info/info.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '',
        children: [
        {
          path: '',
          component: Tab2Page
        },
        {
          path: ':id',
          component: InfoComponent
        }
      ]}
    ])
  ],
  declarations: [
    Tab2Page,
    InfoComponent
  ]
})
export class Tab2PageModule {}
