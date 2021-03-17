import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NytApiService {

    private API_URL: string = environment.API_URL;
    private API_KEY: string = environment.API_KEY;

    constructor(private http: HttpClient) {}

    public getNews(params: {[key:string]: string}): Observable<HttpEvent<any>> {

        if (this.API_KEY) params['api-key'] = this.API_KEY;
        else console.warn('No API Key provided, please Request a key at http://developer.nytimes.com/docs/reference/keys');

        return this.http.get<HttpEvent<any>>(this.API_URL, { params, reportProgress: true, observe: 'events'});
    }

}
