import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindRecipePage } from './find-recipe.page';

describe('FindRecipePage', () => {
  let component: FindRecipePage;
  let fixture: ComponentFixture<FindRecipePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
