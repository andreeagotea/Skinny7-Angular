import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { FAQ7 } from './faq7/faq7.component'
import { CTA5 } from './cta5/cta5.component'
import { AppComponent } from './component/component.component'

@NgModule({
  declarations: [FAQ7, CTA5, AppComponent],
  imports: [CommonModule, RouterModule],
  exports: [FAQ7, CTA5, AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
