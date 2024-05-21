import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta5',
  templateUrl: 'cta5.component.html',
  styleUrls: ['cta5.component.css'],
})
export class CTA5 {
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400'
  @Input()
  content2: string =
    "By clicking Sign Up you're confirming that you agree with our Terms and Conditions"
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  @Input()
  heading1: string = 'Medium length heading goes here'
  @Input()
  action1: string = 'Sign Up'
  @Input()
  image1Alt: string = 'Image1Alt'
  constructor() {}
}
