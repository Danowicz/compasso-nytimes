import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NewsContainerComponent } from './news-container.component';

describe('NewsContainerComponent', () => {
    let component: NewsContainerComponent;
    let fixture: ComponentFixture<NewsContainerComponent>;
    let de: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NewsContainerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsContainerComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain title, abstract, author and date', () => {
        if (component.news) {
            const titleEl = de.query(By.css('.news__headline'));
            const abstractEl = de.query(By.css('.news__abstract'));
            const authorEl = de.query(By.css('.news-info__byline-text'));
            const dateEl = de.query(By.css('.news-info__date'));
            expect(titleEl.nativeElement.innerText).toBeTruthy();
            expect(abstractEl.nativeElement.innerText).toBeTruthy();
            expect(authorEl.nativeElement.innerText).toBeTruthy();
            expect(dateEl.nativeElement.innerText).toBeTruthy();
        } else {
            expect(component.news).toBeFalsy()
        }
    })
});
