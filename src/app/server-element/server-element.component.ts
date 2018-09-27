import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  // @Input('srvElement') element: { // passing data from parent to child
  //   type: string,
  //   name: string,
  //   content: string
  // };
  @Input() name: string; // bound to serverElement.name in the view

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges called!');
    console.log(changes);
  }

}
