import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRecipePageRoutingModule } from './view-recipe-routing.module';

import { ViewRecipePage } from './view-recipe.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRecipePageRoutingModule,
    HttpClientModule
  ],
  declarations: [ViewRecipePage]
})
export class ViewRecipePageModule {}
