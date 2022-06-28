import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, HttpClientModule, RouterModule],
  exports: [BrowserModule, HttpClientModule, HeaderComponent],
  declarations: [HeaderComponent, NotFoundComponent],
})
export class SharedModule {}
