import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthThemeComponent } from './theme-wrapper/auth-theme/auth-theme.component';
import { DashboardThemeComponent } from './theme-wrapper/dashboard-theme/dashboard-theme.component';
import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
} from 'ag-grid-community';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './shared/button/button.component';
import { ModalComponentComponent } from './shared/modal-component/modal-component.component';

ModuleRegistry.registerModules([AllCommunityModule, ClientSideRowModelModule]);

@NgModule({
  declarations: [
    AppComponent,
    AuthThemeComponent,
    DashboardThemeComponent,
    CapitalizePipe,
    ButtonComponent,
    ModalComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
