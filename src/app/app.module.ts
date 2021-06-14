import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AppRoutingModule } from './app-routing.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerResetComponent } from './timer-reset/timer-reset.component';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, UiDesignComponent, EcommerceComponent, CountdownTimerComponent, TimerResetComponent, TimerLogComponent, ClickCountsComponent, TimerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
