import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NytApiService } from 'src/app/@core/nyt-api.service';
import { News } from 'src/app/models/news.model';
import { Parameters } from '../share/parameters.model';

@Component({
    selector: 'app-news-modal',
    templateUrl: './news-modal.component.html',
    styleUrls: ['./news-modal.component.scss'],
})
export class NewsModalComponent implements OnInit {

    public isSharing: boolean;
    public shareModalParameters: Parameters;

    @Input() public news: News;
    @Output() public closeModal: EventEmitter<void> = new EventEmitter();

    constructor(public api: NytApiService){};

    ngOnInit(): void {
        this.setModalParameters();
    }

    public share(): void {
        this.isSharing = true;
    }

    private setModalParameters(): void {
        this.shareModalParameters = {
            bgColor: '#eee',
            shadowOpacity: 0.8,
            fontColor: '#333',
            iconsColor: '#fff',
            animations: true,
            message: 'Take a look at this article!',
            url: this.news?.web_url,
            links: [
              'copy',
              'mail',
              'whatsapp',
              'facebook',
              'linkedin',
              'telegram',
              'twitter',
            ]
          }
    }
}
