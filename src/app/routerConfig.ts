import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalog', component: ProductsComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }
    
];
export default appRoutes;