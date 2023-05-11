import { Component} from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-component-duo',
  templateUrl: './component-duo.component.html',
  styleUrls: ['./component-duo.component.css']
})
export class ComponentDuoComponent {
  bonjour:string = 'bonjour'
  aurevoir:string = 'bye bye'
  newData:any;
  constructor(private logService:LogServiceService,private _apiservice:ApiService){}
 ngOnInit(){
  this.logService.logMessageBonjour(this.bonjour)
  this._apiservice.getData('https://www.boredapi.com/api/activity').subscribe(res=>{
    this.newData=res
    console.log(this.newData)
  })
 }
 ngOnDestroy(){
  console.log('bye');
  this.logService.logMessageBye(this.aurevoir)
 }
}
