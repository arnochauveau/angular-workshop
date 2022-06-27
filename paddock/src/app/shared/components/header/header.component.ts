import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  adminClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAdminClicked() {
    window.alert('Access Denied');
    this.adminClicked = true;
  }

}
