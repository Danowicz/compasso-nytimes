import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

    public isSearching: boolean;
    public queryInput = new FormControl('');

    @Output() private searchEvent: EventEmitter<string> = new EventEmitter();
    @ViewChild('logo') private logo: ElementRef<HTMLImageElement>;

    public handleSearch(): void {
        if (this.isSearching) this.search();
        else this.toggleSearchInput();
    }

    /**
	* If neither the button or input were clicked, hide the input.
	* @param target HostListener's click event.
	*/
    @HostListener('window:click', ['$event.target'])
    private handleClick(target: HTMLElement): void{
        const elClass: string = target.className;

        const isInputOrButton: boolean =
            typeof elClass === 'string' &&
            ( elClass.includes('search__button') || elClass.includes('search__input') );

        !isInputOrButton && this.isSearching && this.toggleSearchInput();
    }

    private toggleSearchInput(): void {
        this.changeLogo();
        this.isSearching = !this.isSearching;
    }

    private changeLogo(): void {
        const logo = this.logo.nativeElement;
        if (this.isSearching) {
            logo.src = '../../../assets/logo.svg'
            logo.classList.remove('header__logo--symbol')
        } else {
            logo.src = '../../../assets/compass.png'
            logo.classList.add('header__logo--symbol')
        }
    }

    private search(): void {
        this.searchEvent.emit(this.queryInput.value);
    }
}
