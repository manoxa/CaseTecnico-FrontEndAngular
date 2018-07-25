import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


export const ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'user', component: UserComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);