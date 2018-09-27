import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'name test', content: 'server content...'}];

  /* serverData and bluePrintData are data received from serverCreated
   * and bluePrintCreated custom events
   */
  onServerAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(bluePrintData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
}
