import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-faq7',
  templateUrl: 'faq7.component.html',
  styleUrls: ['faq7.component.css'],
})
export class FAQ7 {
  @Input()
  faqDetailsSubtitle: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  faq2Question: string = 'Frequently Asked Questions'
  @Input()
  faq4Question: string = 'Frequently Asked Questions'
  @Input()
  faq6Question: string = 'Frequently Asked Questions'
  @Input()
  faqDetails: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. '
  @Input()
  faq3Answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  @Input()
  contactAction: string = 'Contact'
  @Input()
  faq1Question: string = 'Frequently Asked Questions'
  @Input()
  faq3Question: string = 'Frequently Asked Questions'
  @Input()
  faq2Answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  @Input()
  faqTitle: string = 'FAQs'
  @Input()
  faq6Answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  @Input()
  faq4Answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  @Input()
  faq5Question: string = 'Frequently Asked Questions'
  @Input()
  faq1Answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  @Input()
  faqSubtitle: string = 'Still have a question?'
  @Input()
  faq5Answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  constructor() {}
}
