import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page2',
  templateUrl: 'page2.component.html',
  styleUrls: ['page2.component.css'],
})
export class Page2 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Page2 - Skinny7&&')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Page2 - Skinny7&&',
      },
    ])
  }
}
