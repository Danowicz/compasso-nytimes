import { Component, Input} from '@angular/core';
import { News } from 'src/app/models/news.model';

@Component({
    selector: 'app-news-container',
    templateUrl: './news-container.component.html',
    styleUrls: ['./news-container.component.scss'],
})
export class NewsContainerComponent  {

    @Input() public news: News;

}
