import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a logo', () => {
        expect(de.query(By.css('.header__logo')).nativeElement.src).toBeTruthy();
    });

    it('should have a search button', () => {
        expect(de.query(By.css('.header__search-button')).nativeElement).toBeTruthy();
    });

    it('should open a search input when search button is clicked', async () => {
        const button = de.query(By.css('.header__search-button'));
        button.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.isSearching).toBeTruthy();
            expect(de.query(By.css('.header__search-input'))).toBeTruthy();
        })
    });
});
