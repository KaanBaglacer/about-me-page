import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppShellComponent} from "./app-shell/app-shell.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'app', pathMatch: 'full'
  },
  {
    path: 'app',
    component: AppShellComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () => import('./main/home-page/home-page.module').then(m => m.HomePageModule),
      },
      {
        path: 'about-me',
        loadChildren: () => import('./main/about-me/about-me.module').then(m => m.AboutMeModule),
      },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
