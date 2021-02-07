import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SenForageSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SenForageSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class SenForageHomeModule {}
