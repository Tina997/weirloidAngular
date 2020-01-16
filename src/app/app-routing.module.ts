import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './pages/services/services.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: 'catalog', component: ProductsComponent },
    { path: 'services', component: ServicesComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
