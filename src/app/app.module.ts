import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FullCardModule } from './full-card/full-card.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
@NgModule( {
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HomeComponent ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FullCardModule ],
  providers: [],
  bootstrap: [ AppComponent, ],
} )
export class AppModule { }
