import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: UiDesignComponent },
      { path: 'ecommerce', component: EcommerceComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
