import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindRecipePage } from './find-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: FindRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindRecipePageRoutingModule {}
