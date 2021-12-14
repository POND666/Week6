import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { ProductComponent } from './components/product/product.component';
import { WebboardComponent } from './components/webboard/webboard.component';

const routes: Routes = [
{ path: '',redirectTo: "/product",pathMatch:'full' }, //default path
{ path: 'product',component: ProductComponent},
{ path: 'webboard',component: WebboardComponent},
{ path: 'contact',component: ContactComponent},
{ path: 'aboutus',component: AboutusComponent},
{ path: 'faqs',component: FAQsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
