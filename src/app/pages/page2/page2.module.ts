import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'
import '@teleporthq/date-time-primitive'
import '@lottiefiles/lottie-player'

import { ComponentsModule } from '../components/components.module'
import { Page2 } from './page2.component'

const routes = [
  {
    path: '',
    component: Page2,
  },
]

@NgModule({
  declarations: [Page2],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Page2],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Page2Module {}
