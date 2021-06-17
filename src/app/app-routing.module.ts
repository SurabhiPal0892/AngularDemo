import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TimerComponent } from './timer/timer.component';
import { StudentsMarksComponent } from './students-marks/students-marks.component';
import { DynamicDivsComponent } from './dynamic-divs/dynamic-divs.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: UiDesignComponent },
      { path: 'ecommerce', component: EcommerceComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'scorecard', component: StudentsMarksComponent },
      {
        path: 'blocks',
        component: DynamicDivsComponent
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
