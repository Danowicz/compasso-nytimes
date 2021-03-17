export class News {
    headline: { main: string };
    abstract: string;
    lead_paragraph: string;
    news_desk: string;
    web_url: string;
    pub_date: string;
    byline: { original: string };
    multimedia: Array<{ url: string }>;
}
