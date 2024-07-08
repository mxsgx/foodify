import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-analysis',
  templateUrl: './nutrition-analysis.page.html',
  styleUrls: ['./nutrition-analysis.page.scss'],
})
export class NutritionAnalysisPage {
  public ingredients: string = '';

  public data: {
    calories: number;
    totalNutrients: {
      [key: string]: {
        label: string;
        quantity: number;
        unit: string;
      };
    };
  } | null = null;
  
  constructor(private http: HttpClient) { }

  analyze() {
    this.http.post<any>('https://api.edamam.com/api/nutrition-details', {
      ingr: this.ingredients.split(/\n|,/g).map(v => v.trim()).filter(v => !!v),
    }, {
      params: {
        app_id: '1c4a5314',
        app_key: 'ba7ca88b75c2961d9207e989f6707f5c',
      }
    }).subscribe(res => {
      this.data = res;
    })
  }

  values(obj: any): any {
    return Object.values(obj);
  }

  floor(num: number) {
    return Math.floor(num);
  }
}
