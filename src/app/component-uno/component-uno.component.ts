import { Component, OnDestroy } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-component-uno',
  templateUrl: './component-uno.component.html',
  styleUrls: ['./component-uno.component.css'],
})
export class ComponentUnoComponent implements OnDestroy {
  bonjour:string = 'bonjour'
  aurevoir:string = 'bye bye'
  newData:any;
  constructor(private logService:LogServiceService,private _apiservice:ApiService){}
 ngOnInit(){
  this.logService.logMessageBonjour(this.bonjour)
  this._apiservice.getData('https://catfact.ninja/fact').subscribe(res=>{
    this.newData=res
    console.log(this.newData)
  })
 }
 ngOnDestroy(){
  // this.logService.logMessageBye(this.aurevoir)
  console.log('bye')
 }
}
