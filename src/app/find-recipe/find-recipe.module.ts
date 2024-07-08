import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindRecipePageRoutingModule } from './find-recipe-routing.module';

import { FindRecipePage } from './find-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindRecipePageRoutingModule
  ],
  declarations: [FindRecipePage]
})
export class FindRecipePageModule {}
