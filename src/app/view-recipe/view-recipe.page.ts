import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type ViewRecipeResult = {
  recipe: {
    uri: string;
    label: string;
    image: string;
    images: {
      [key: string | 'THUMBNAIL' | 'SMALL' | 'REGULAR']: {
        url: string;
        width: number;
        height: number;
      }
    };
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: {
      text: string;
      quantity: number;
      measure: string;
      food: string;
      weight: number;
    }[];
    calories: number;
    totalWeight: number;
    causineType: string[];
    mealType: string[];
    dishType: string[];
    totalNutrients: {
      [key: string]: {
        label: string;
        quantity: number;
        unit: string;
      };
    };
    totalDaily: {
      [key: string]: {
        label: string;
        quantity: number;
        unit: string;
      };
    };
    digest: {
      label: string;
      tag: string;
      schemaOrgTag: string;
      total: number;
      hasRDI: boolean;
      daily: number;
      unit: string;
      sub?: {
        label: string;
        tag: string;
        schemaOrgTag: string;
        total: number;
        hasRDI: boolean;
        daily: number;
        unit: string;
      }[];
    }[];
  };
  bookmarked: boolean;
  bought: boolean;
  _links: {
    self: {
      title: string;
      href: string;
    }
  }
};

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.page.html',
  styleUrls: ['./view-recipe.page.scss'],
})
export class ViewRecipePage implements OnInit {
  public id: string = '';
  
  public data: ViewRecipeResult | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/').pop()!;

    this.http.get<ViewRecipeResult>(`https://www.edamam.com/api/recipes/v2/${this.id}`, {
      params: {
        type: 'public'
      }
    }).subscribe(value => {
      this.data = value;
    })
  }

  floor(val: any) {
    return Math.floor(val);
  }
  
  values(obj: any): any[] {
    return Object.values(obj);
  }

}
