import { HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/@core/search.service';
import { News } from 'src/app/models/news.model';

@Component({
    templateUrl: './content-wrapper.component.html',
    styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent implements OnInit, OnDestroy {

    public loadingProgress: number = 0;
    public newsCollection: Array<News> = [];
    public modalNews: News;
    public showModal: boolean;
    public warning: string;
    public routeName: string;

    private page: number = 1;
    private routerSubscription: Subscription;

    constructor(private searchService: SearchService, private router: Router) {}

    ngOnInit(): void {
        this.routerSubscription = this.searchService.routeObs
            .subscribe( route  => {
                if (route === '/science' || route === '/technology') {
                    this.routeName = route.replace('/', '');
                    this.clearSearch();
                    this.getData({news_desk: this.routeName})
                }
            });
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }

    public modalHandler(showModal: boolean, news?: News): void {
        if (news) this.modalNews = news;
        this.showModal = showModal;
        document.body.style.overflow = showModal ? 'hidden' : 'visible';
    }

    public onScroll(): void {
        this.page++;
        this.routeName && this.getData(this.routeName);
    }

    public search(query: string): void {
        this.clearSearch();
        this.router.navigate(['/search']);
        this.getData(query);
    }

    private getData(filter: string | {[key: string]: string}): void {

            this.searchService.pullData(this.page, filter)
                .subscribe( event => {

                    if (event.type === HttpEventType.DownloadProgress) {
                        if (event.total) {
                            const percentage = Math.round(100 / event.total * event.loaded);
                            this.loadingProgress = percentage;
                        }
                    }

                    if (event.type === HttpEventType.Response) {
                        if (event.body.response.docs.length) {
                            this.newsCollection.push(...event.body.response.docs);
                        } else {
                            this.warning = 'Your search did not match any articles.'
                        }
                    }
                },
                (err) => this.warning = err.statusText,
                () => this.loadingProgress = 0)
    }


    private clearSearch(): void {
        window.scrollTo(0, 0);
        this.newsCollection = [];
        this.warning = ''
        this.page = 1;
    }

}
