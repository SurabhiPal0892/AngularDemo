import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: UiDesignComponent },
      { path: 'ecommerce', component: EcommerceComponent },
      {path:'timer',component:TimerComponent}
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
