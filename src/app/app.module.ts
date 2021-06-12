import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UiDesignComponent } from './ui-design/ui-design.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UiDesignComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
