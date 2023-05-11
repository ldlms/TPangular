import { Component } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-component-trio',
  templateUrl: './component-trio.component.html',
  styleUrls: ['./component-trio.component.css']
})
export class ComponentTrioComponent {
  bonjour:string = 'bonjour'
  aurevoir:string = 'bye bye'
  newData:any;
  constructor(private logService:LogServiceService,private _apiservice:ApiService){}
 ngOnInit(){
  this.logService.logMessageBonjour(this.bonjour)
  this._apiservice.getData('https://dog.ceo/api/breeds/image/random').subscribe(res=>{
    this.newData=res
    console.log(this.newData)
  })
 }
 ngOnDestroy(){
  console.log('bye');
  this.logService.logMessageBye(this.aurevoir)
 }
}
