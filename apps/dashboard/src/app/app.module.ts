import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CervejaDetailsComponent } from './cervejas/cerveja-details/cerveja-details.component';
import { CervejaListComponent } from './cervejas/cerveja-list/cerveja-list.component';
import { MaterialModule } from "@cerveja/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@cerveja/core-data";
import { CoreStateModule } from "@cerveja/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@cerveja/environment';
import { UiLoginModule } from '@cerveja/ui-login';
import { CervejaComponent } from './cerveja/cerveja.component';
import { CervejaInfoComponent } from './cerveja/cerveja-info/cerveja-info.component';
import { CervejasComponent } from './cervejas/cervejas.component';

@NgModule({
  declarations: [AppComponent, CervejaComponent, CervejasComponent, CervejaDetailsComponent, CervejaListComponent, CervejaInfoComponent, CervejaComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
