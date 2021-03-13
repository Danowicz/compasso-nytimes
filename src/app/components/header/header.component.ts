import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

    public isSearching: boolean;

    ngOnInit(): void {
        this.isSearching = false;
    }

    public toggleInput(logo: HTMLImageElement): void {
        this.isSearching = !this.isSearching;
        logo.src = '../../../assets/uol.svg'
    }
}
