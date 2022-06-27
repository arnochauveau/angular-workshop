import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [BrowserModule],
  exports: [BrowserModule, HeaderComponent],
  declarations: [
    HeaderComponent
  ],
})
export class SharedModule{ }
