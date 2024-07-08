import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'find-recipe',
        loadChildren: () => import('../find-recipe/find-recipe.module').then(m => m.FindRecipePageModule)
      },
      {
        path: 'nutrition-analysis',
        loadChildren: () => import('../nutrition-analysis/nutrition-analysis.module').then(m => m.NutritionAnalysisPageModule)
      },
      {
        path: 'view-recipe/:id',
        loadChildren: () => import('../view-recipe/view-recipe.module').then( m => m.ViewRecipePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
