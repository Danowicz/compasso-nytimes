import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/@core/search.service';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {

    public routeName: string;
    public icon: [IconPrefix, IconName] = ['fas', 'exchange-alt'];

    private routerSubscription: Subscription;

    constructor(private router: Router, private searchService: SearchService) {}

    ngOnInit(): void {
        this.routerSubscription = this.searchService.routeObs
            .subscribe( route  => {
                this.routeName = route.replace('/', '');
                this.iconSetter();
            });
    }

    public switchFilter(): void {
        switch (this.routeName) {
            case 'science':
                this.router.navigate(['technology']);
                break;
            case 'technology':
                this.router.navigate(['science']);
                break;
            default:
                this.routeName = 'science';
                this.router.navigate(['science']);
        }
        this.iconSetter();
    }

    private iconSetter(): void {
        switch (this.routeName) {
            case 'science':
                this.icon = ['fas', 'atom'];
                break;
            case 'technology':
                this.icon = ['fas', 'rocket'];
                break;
            default: this.icon = ['fas', 'exchange-alt'];
        }
    }
}
