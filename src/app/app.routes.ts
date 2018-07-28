import { UserComponent } from "./components/user/user.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RepositoryComponent } from "./components/repository/repository.component";
import { DetailComponent } from "./components/detail/detail.component";

export const ROUTES: Routes = [
    {path: '', redirectTo: '/user', pathMatch: 'full' },
    {path:'user', component: UserComponent},
    {path:'repos', component: RepositoryComponent},
    {path:'details', component: DetailComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);