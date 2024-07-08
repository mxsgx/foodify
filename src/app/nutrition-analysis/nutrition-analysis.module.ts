import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutritionAnalysisPageRoutingModule } from './nutrition-analysis-routing.module';

import { NutritionAnalysisPage } from './nutrition-analysis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutritionAnalysisPageRoutingModule
  ],
  declarations: [NutritionAnalysisPage]
})
export class NutritionAnalysisPageModule {}
