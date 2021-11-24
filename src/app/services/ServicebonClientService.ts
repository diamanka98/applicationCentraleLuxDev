import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicebonClientService {


  bonClient!: any[];
  bonClientsubject = new Subject<any[]>()

  constructor(private http: HttpClient) { }

  emitbonClient() {
    this.bonClientsubject.next(this.bonClient.slice())
  }

  getbonClient() {
    this.bonClient = [
      {
        nom: 'diallo',
        prenom: 'assane',
        adresse: 'dakar',
        email: 'assane@gmail.com',
        telephone: '77777777',
        solde: '18000'
      },
      {
        nom: 'gueye',
        prenom: 'mouctar',
        adresse: 'dakar',
        email: 'mouctar@gmail.com',
        telephone: '77777347',
        solde: '16000'
      },
      {
        nom: 'cisse',
        prenom: 'yakhouba',
        adresse: 'dakar',
        email: 'yakhouba@gmail.com',
        telephone: '72356777',
        solde: '26000'
      },
      {
        nom: 'diamanka',
        prenom: 'mouhamaou',
        adresse: 'dakar',
        email: 'mouhamadou@gmail.com',
        telephone: '7777',
        solde: '74000'
      },
    ]
    this.emitbonClient();
  }

  ajoutbonClient(bonClient: any) {

    this.bonClient.push(bonClient)
    this.emitbonClient()

  }
}