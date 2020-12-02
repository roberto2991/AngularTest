import { Nation } from './../../model/nation';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() nations: Nation;
  @Output() tabClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  tabHandler(item: Nation) {
    this.tabClick.emit(item);
  }

  ngOnInit(): void {
  }

}
