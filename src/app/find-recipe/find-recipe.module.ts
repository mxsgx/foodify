import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindRecipePageRoutingModule } from './find-recipe-routing.module';

import { FindRecipePage } from './find-recipe.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindRecipePageRoutingModule,
    HttpClientModule
  ],
  declarations: [FindRecipePage]
})
export class FindRecipePageModule {}
