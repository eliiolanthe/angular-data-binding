import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  /* serverCreated & bluePrintCreated are custom events that can be emitted from
   * the app-cockpit component, that the parent app listens to
   */
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ name: string, content: string }>();

  constructor() { console.log('constructor called'); }

  ngOnInit() {
  }

  // onAddServer() {
  //   this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  // }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
