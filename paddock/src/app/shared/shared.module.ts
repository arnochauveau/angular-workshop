import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  exports: [BrowserModule, HttpClientModule, HeaderComponent],
  declarations: [HeaderComponent],
})
export class SharedModule {}
