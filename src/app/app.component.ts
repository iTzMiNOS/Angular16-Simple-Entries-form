import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple-Entries-Form';
  objArray: Array<any> = [];
  tmpid: number = this.objArray.length + 1;
  tmpname: string = '';
  tmpemail: string = '';
  tmpadd: string = '';
  addItem(){
    this.objArray.push({id:this.objArray.length + 1,name:this.tmpname,email:this.tmpemail,adres:this.tmpadd});
  }
  deleteItem(index:number){
    this.objArray.splice(index,1);
  }
}
  