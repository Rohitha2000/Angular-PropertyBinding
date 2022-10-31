import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PropertyBinding';
  serverstatus: string= 'server not created';
  allowNewServer = false;
  createServer: boolean= false;
  constructor(){
    setTimeout(()=>{
      this.allowNewServer= true;
    }, 3000)
  }
  onCreateServer(){
 this.serverstatus= "new server has been created!";
 this.createServer= true;
  }
  onUpdateServer(event: Event){
    this.serverstatus= (<HTMLInputElement>event.target).value;
  }
}
