import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title: string = "Anne's Architecural Firm"

isDisabled:boolean = true;

savedMessage: string ="";

 constructor(){
  setTimeout(()=>{
    this.isDisabled = false;
  },5000);

 }

onSave(): void {
  this.savedMessage = "Logging You In"
}

}