import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { FormsModule  } from "@angular/forms"; 

//Cosas de Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component'
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    CheckoutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ProductsComponent]
})
export class AppModule { }
