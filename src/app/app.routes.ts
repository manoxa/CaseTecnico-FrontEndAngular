import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";

export const ROUTES: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full' },
    {path:'menu', component: MenuComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);