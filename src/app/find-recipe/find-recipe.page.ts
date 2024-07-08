import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

type FindRecipeResult = {
  from: number;
  to: number;
  count: number;
  hits: {
    bookmarked: boolean;
    bought: boolean;
    recipe: {
      uri: string;
      label: string;
      image: string;
      source: string;
      yield: number;
      ingredientLines: string[],
      calories: number;
    }
    _links: {
      self: {
        title: string;
        href: string;
      }
    }
  }[]
}

@Component({
  selector: 'app-find-recipe',
  templateUrl: './find-recipe.page.html',
  styleUrls: ['./find-recipe.page.scss'],
})
export class FindRecipePage {
  public keyword: string = '';

  public result: FindRecipeResult | null = null;

  constructor(private http: HttpClient) {}

  public search()
  {
    this.http.get<FindRecipeResult>('https://www.edamam.com/api/recipes/v2', {
      params: {
        type: 'public',
        q: this.keyword,
        field: ['uri', 'label', 'image', 'calories', 'yield', 'source', 'ingredientLines'],
      },
    }).subscribe((response) => {
      this.result = response;
    });
  }

  public floor(num: number) {
    return Math.floor(num);
  }

  getRecipeId(str: string) {
    try {
      const url = new URL(str);
      const paths = url.pathname.split('/');

      return paths[paths.length - 1];
    } catch {
      return null;
    }
  }
}
