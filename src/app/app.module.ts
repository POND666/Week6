import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ProductComponent } from './components/product/product.component';
import { WebboardComponent } from './components/webboard/webboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProductComponent,
    WebboardComponent,
    ContactComponent,
    FAQsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
