import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {

    public selectedFilter: string;
    public icon: [IconPrefix, IconName] = ['fas', 'exchange-alt'];

    constructor(private router: Router) {}

    switchFilter(): void {
        switch (this.selectedFilter) {
            case 'science':
                this.selectedFilter = 'tech';
                this.router.navigate(['technology']);
                this.icon = ['fas', 'rocket'];
                break;
            case 'tech':
                this.selectedFilter = 'science';
                this.router.navigate(['science']);
                this.icon = ['fas', 'atom'];
                break;
            default: this.selectedFilter = '';
        }
    }
}
