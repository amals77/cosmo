import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  gtk:string[]=["About Us","Career","Press Release"]
  con:string[]=["Facebook","Twitter","Instagram"]
  customer:string[]=["Contact Us","Delivery & Returns","Terms & Conditions of Sale","Privacy Policy"]
  constructor() { }

  ngOnInit(): void {
  }

}
