import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';


import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchComponent ],
      imports: [
        AppRoutingModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch between science and tech on click', async () => {
    const switcher = de.query(By.css('.switch'));
    switcher.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(component.selectedFilter).toBe('science');
        switcher.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.selectedFilter).toBe('tech');
        });
    })

  });

  /*
  * TODO: Create router tests
  */
});
