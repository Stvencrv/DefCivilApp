import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'def-services',
    loadChildren: () => import('./def-services/def-services.module').then( m => m.DefServicesPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'hostels',
    loadChildren: () => import('./hostels/hostels.module').then( m => m.HostelsPageModule)
  },
  {
    path: 'hostel-modal',
    loadChildren: () => import('./hostel-modal/hostel-modal.module').then( m => m.HostelModalPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
