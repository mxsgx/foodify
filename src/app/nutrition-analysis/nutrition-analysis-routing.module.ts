import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutritionAnalysisPage } from './nutrition-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: NutritionAnalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionAnalysisPageRoutingModule {}
