import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconName, IconPrefix, IconProp } from '@fortawesome/fontawesome-svg-core';
import { Parameters } from './parameters.model';

@Component({
  selector: 'share-panel',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  public shareData: Array<any>;
  public linkCopyed: IconProp

  @Input() public parameters: Parameters;
  @Output() public shareModal: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.shareData = this.linkParameters(this.parameters.message, this.parameters.url)
  }

  private linkParameters(message: string, url: string) {
    let shareData: Array<{name: string, icon: Array<string>, shareLink: string | undefined}> = [];
    message = encodeURIComponent(message);
    this.parameters.links.forEach((link) => {
      let icon = ['fab', `${link}`];
      let shareLink;
      switch (link) {
        case 'copy':
          icon = ['fas', 'copy'];
          shareLink = url;
          break;
        case 'mail':
          icon = ['fas', 'envelope'];
          shareLink = `mailto:?subject=${message}&body=${url}`;
          break;
        case 'whatsapp':
          shareLink = `https://wa.me/?text=${message}+${url}`;
          break;
        case 'facebook':
          shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case 'twitter':
          shareLink = `https://twitter.com/intent/tweet?text=${message}+${url}`;
          break;
        case 'linkedin':
          shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
          break;
        case 'telegram':
          shareLink = `https://t.me/share/url?url=${url}&text=${message}`;
          break;
      }

      shareData.push({ name: link, icon, shareLink });
    });
    return shareData;
  }

  public copyLink(text: string) {
    const contentElement = document.createElement('input');
    contentElement.style.position = 'fixed';
    contentElement.style.left = '0';
    contentElement.style.top = '0';
    contentElement.style.opacity = '0';
    contentElement.value = text;
    document.body.appendChild(contentElement);
    contentElement.focus();
    contentElement.select();
    document.execCommand('copy');
    document.body.removeChild(contentElement);
    this.linkCopyed = ['fas', 'check'];
  }

}
