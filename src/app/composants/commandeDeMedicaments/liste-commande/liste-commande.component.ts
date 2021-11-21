import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicecommandeService } from 'src/app/services/servicecommande.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  commandes!: any[];
  subscribcommande!: Subscription
  constructor(private routes: Router, private servicecommande: ServicecommandeService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      language: { url: 'assets/datatable-French.json' },
      // data: this.personne,
      // search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }

    this.getcommande()

  }

  getcommande() {
    this.subscribcommande = this.servicecommande.commandesubject.subscribe((commande: any[]) => {
      this.commandes = commande
    })
    this.servicecommande.getcommande()
  }

  ngOnDestroy() {
    this.subscribcommande.unsubscribe()
  }
}
