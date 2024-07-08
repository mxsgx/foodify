import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'find-recipe',
    loadChildren: () => import('./find-recipe/find-recipe.module').then( m => m.FindRecipePageModule)
  },
  {
    path: 'view-recipe',
    loadChildren: () => import('./view-recipe/view-recipe.module').then( m => m.ViewRecipePageModule)
  },
  {
    path: 'nutrition-analysis',
    loadChildren: () => import('./nutrition-analysis/nutrition-analysis.module').then( m => m.NutritionAnalysisPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
