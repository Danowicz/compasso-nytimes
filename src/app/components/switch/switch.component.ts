import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {

    public selectedFilter: string;
    public icon: [IconPrefix, IconName] = ['fas', 'exchange-alt'];

    constructor(private router: Router, private location: Location) {}

    ngOnInit(): void {
        this.selectedFilter = this.location.path().replace('/','');
        this.iconSetter();
    }

    public switchFilter(): void {
        switch (this.selectedFilter) {
            case 'science':
                this.selectedFilter = 'tech';
                this.router.navigate(['tech']);
                break;
            case 'tech':
                this.selectedFilter = 'science';
                this.router.navigate(['science']);
                break;
            default:
                this.selectedFilter = 'science';
                this.router.navigate(['science']);
        }
        this.iconSetter();
    }

    private iconSetter(): void {
        switch (this.selectedFilter) {
            case 'science':
                this.icon = ['fas', 'atom'];
                break;
            case 'tech':
                this.icon = ['fas', 'rocket'];
                break;
            default: this.icon = ['fas', 'exchange-alt'];
        }
    }
}
