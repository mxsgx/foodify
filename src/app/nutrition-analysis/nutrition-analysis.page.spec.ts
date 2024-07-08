import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutritionAnalysisPage } from './nutrition-analysis.page';

describe('NutritionAnalysisPage', () => {
  let component: NutritionAnalysisPage;
  let fixture: ComponentFixture<NutritionAnalysisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
