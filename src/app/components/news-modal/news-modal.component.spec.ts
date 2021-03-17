import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NewsModalComponent } from './news-modal.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NewsModalComponent', () => {
    let component: NewsModalComponent;
    let fixture: ComponentFixture<NewsModalComponent>;
    let de: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NewsModalComponent],
            imports: [HttpClientModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsModalComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open the sharing container', async () => {
        const shareBtn = de.query(By.css('.links__share'));
        shareBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.isSharing).toBeTrue();
        });
    });

    it('should close', async () => {
        const closeBtn = de.query(By.css('.modal-header__close'));
        closeBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.closeModal).toHaveBeenCalled();
        });
    });
});
