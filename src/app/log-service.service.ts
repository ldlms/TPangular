import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor() { }
  logMessageBonjour(bonjour:string){
    console.log(bonjour);
  }
  logMessageBye(aurevoir:string){
    console.log(aurevoir);
  }
}
