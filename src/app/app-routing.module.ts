import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

@NgModule({
  declarations: [UiDesignComponent, EcommerceComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'banner', component: UiDesignComponent },
      { path: 'ecommerce', component: EcommerceComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
