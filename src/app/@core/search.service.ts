import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { NytApiService } from './nyt-api.service';

@Injectable({
    providedIn: 'root',
})
export class SearchService {

    public currRoute: string;
    private routeSource = new BehaviorSubject<string>('/science');
    public routeObs = this.routeSource.asObservable();

    constructor(private api: NytApiService, private router: Router) {
        this.routeMonitor();
    }

    public pullData(page: number, queryFilter?: string | { [key: string]: string | Array<string>}): Observable<HttpEvent<any>> {
        const params: any = queryFilter ? this.prepareFilter(queryFilter) : {};
        params['page'] = String(page);
        return this.api.getNews(params);
    }

    private routeMonitor(): void {
        this.router.events.subscribe( event => {
            if (event instanceof NavigationEnd) {
                this.currRoute = event.url;
                this.routeSource.next(this.currRoute);
            }
        });
    }

    // Formats query to Lucene syntax
    private prepareFilter(query: string | { [key: string]: string | Array<string> }): {[key: string]: string} {

        const params: {[key: string]: string} = {};


        if (typeof query === 'string') {
            params['q'] = query;
        }

        else {
            Object.entries(query).forEach(([key, value]) => {

                if (params['fq']) params['fq'] += ' AND ';

                if (Array.isArray(value)) {
                    let queryArr: string = '';
                    value.forEach( filter => {
                        if (!queryArr) {
                            queryArr += '"' + this.uppercaseFirstChar(filter) + '"';
                        } else {
                            queryArr += ' "' + this.uppercaseFirstChar(filter) + '"';
                        }
                    });

                    queryArr = key + ':' + '(' + queryArr + ')';
                    if(params['fq']) params['fq'] += queryArr;
                    else params['fq'] = queryArr;

                } else {
                    const queryString = key + ':' + '(' + '"' + value + '"' + ')';
                    if (params['fq']) params['fq'] += queryString;
                    else params['fq'] = queryString;
                }
            });
        }

        return params;
    }

    private uppercaseFirstChar(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
