import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';
import { ApproutesModule } from './approutes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApproutesModule,
    ComponentsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
