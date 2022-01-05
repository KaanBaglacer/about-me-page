import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: () => import('./main/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./main/about-me/about-me.module').then(m => m.AboutMeModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./main/about-me/about-me-routing.module').then(m => m.AboutMeRoutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
