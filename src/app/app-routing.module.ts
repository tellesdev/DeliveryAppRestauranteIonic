import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cardapio',
    children: [
      {
        path: '',
        loadChildren: () => import('./cardapio/cardapio-list/cardapio-list.module').then(m => m.CardapioListPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
