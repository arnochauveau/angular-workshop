import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DriverModule } from './features/driver/driver.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './interceptors/log.interceptor';
import { AdminModule } from './features/admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, AppRoutingModule, DriverModule, AdminModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
