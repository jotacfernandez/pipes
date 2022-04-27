import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';



import { AppComponent } from './app.component';
import { ApproutesModule } from './approutes.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApproutesModule,
    ComponentsModule,
    PagesModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
