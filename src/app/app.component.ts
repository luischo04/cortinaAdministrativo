import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cortinaAdministrativo';
  opened = false;

  constructor() {}
  
  ngOnInit(): void {
      // this.utilsSvc.sidebarOpened$.subscribe((res: boolean) => this.opened = res);
  }
  
}
