import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponentApp } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { CreerBonclientComponent } from './composants/bonClients/creer-bonclient/creer-bonclient.component';
import { DetailBonclientComponent } from './composants/bonClients/detail-bonclient/detail-bonclient.component';
import { ListeBonclientComponent } from './composants/bonClients/liste-bonclient/liste-bonclient.component';
import { DetailBonDeLivraisonComponent } from './composants/bonDeLivraisons/detail-bon-de-livraison/detail-bon-de-livraison.component';
import { ListeBonDeLivraisonComponent } from './composants/bonDeLivraisons/liste-bon-de-livraison/liste-bon-de-livraison.component';
import { CreerCategorieComponent } from './composants/categories/creer-categorie/creer-categorie.component';
import { DetailCategorieComponent } from './composants/categories/detail-categorie/detail-categorie.component';
import { ListeCategorieComponent } from './composants/categories/liste-categorie/liste-categorie.component';
import { CreerCollaborationComponent } from './composants/collaborations/creer-collaboration/creer-collaboration.component';
import { DetailCollaborationComponent } from './composants/collaborations/detail-collaboration/detail-collaboration.component';
import { ListeCollaborationComponent } from './composants/collaborations/liste-collaboration/liste-collaboration.component';
import { CreerCommandeComponent } from './composants/commandeDeMedicaments/creer-commande/creer-commande.component';
import { DetailCommandeComponent } from './composants/commandeDeMedicaments/detail-commande/detail-commande.component';
import { ListeCommandeComponent } from './composants/commandeDeMedicaments/liste-commande/liste-commande.component';
import { CreerDepenseComponent } from './composants/depenses/creer-depense/creer-depense.component';
import { DetailDepenseComponent } from './composants/depenses/detail-depense/detail-depense.component';
import { ListeDepenseComponent } from './composants/depenses/liste-depense/liste-depense.component';
import { DetailFactureComponent } from './composants/factures/detail-facture/detail-facture.component';
import { ListeFactureComponent } from './composants/factures/liste-facture/liste-facture.component';
import { CreerFournisseurComponent } from './composants/fournisseurs/creer-fournisseur/creer-fournisseur.component';
import { DetailFournisseurComponent } from './composants/fournisseurs/detail-fournisseur/detail-fournisseur.component';
import { ListeFournisseurComponent } from './composants/fournisseurs/liste-fournisseur/liste-fournisseur.component';
import { CreerMedicamentComponent } from './composants/medicaments/creer-medicament/creer-medicament.component';
import { DetailMedicamentComponent } from './composants/medicaments/detail-medicament/detail-medicament.component';
import { ListeMedicamentComponent } from './composants/medicaments/liste-medicament/liste-medicament.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { CreerRayonComponent } from './composants/rayon/creer-rayon/creer-rayon.component';
import { DetailRayonComponent } from './composants/rayon/detail-rayon/detail-rayon.component';
import { ListeRayonComponent } from './composants/rayon/liste-rayon/liste-rayon.component';
import { CreerUtilisateurComponent } from './composants/utilisateurs/creer-utilisateur/creer-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/utilisateurs/detail-utilisateur/detail-utilisateur.component';
import { ListeUtilisateurComponent } from './composants/utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { CreerVenteComponent } from './composants/ventesMedicament/creer-vente/creer-vente.component';
import { DetailVenteComponent } from './composants/ventesMedicament/detail-vente/detail-vente.component';
import { ListeVenteComponent } from './composants/ventesMedicament/liste-vente/liste-vente.component';
import { DashboardComponent } from './composants/dashboard/dashboard.component'
import { EspaceAdminComponent } from './espace-admin/espace-admin.component'
<<<<<<< HEAD
import { ListeClientComponent } from './composants/client/liste-client/liste-client.component';
import { DetailClientComponent } from './composants/client/detail-client/detail-client.component';
import { CreerClientComponent } from './composants/client/creer-client/creer-client.component';
import { CreervendeurComponent } from './composants/vendeur/creer-vendeur/creer-vendeur.component';
import { DetailVendeurComponent } from './composants/vendeur/detail-vendeur/detail-vendeur.component';
import { ListeVendeurComponent } from './composants/vendeur/liste-vendeur/liste-vendeur.component';
=======
import { MedicamentDeffectueuxComponent } from './composants/medicaments/medicament-deffectueux/medicament-deffectueux.component';
import { MedicamentPerimesComponent } from './composants/medicaments/medicament-perimes/medicament-perimes.component';
import { VendeurComponent } from './composants/utilisateurs/vendeur/vendeur.component';
import { ClientComponent } from './composants/utilisateurs/client/client.component';
import { LotDeMedicamentComponent } from './composants/medicaments/lot-de-medicament/lot-de-medicament.component';
>>>>>>> 3f7ed1a40b63924dfeda6818636bbc354fdaf0a4
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', component: AccueilComponentApp },
  {

    path: 'espace', component: EspaceAdminComponent, children: [
      { path: "", component: AccueilComponent },
      { path: 'medicaments', component: ListeMedicamentComponent },
      { path: 'medicaments/:id', component: DetailMedicamentComponent },
      { path: 'creer-medicament', component: CreerMedicamentComponent },
      { path: 'categories', component: ListeCategorieComponent },
      { path: 'categories/:id', component: DetailCategorieComponent },
      { path: 'creer-categorie', component: CreerCategorieComponent },
      { path: 'rayons', component: ListeRayonComponent },
      { path: 'rayons/:id', component: DetailRayonComponent },
      { path: 'creer-rayon', component: CreerRayonComponent },
      { path: 'commander-medicament', component: ListeCommandeComponent },
      { path: 'commander-medicament/:id', component: DetailCommandeComponent },
      { path: 'creer-commande', component: CreerCommandeComponent },
      { path: 'fournisseurs', component: ListeFournisseurComponent },
      { path: 'fournisseurs/:id', component: DetailFournisseurComponent },
      { path: 'creer-fournisseur', component: CreerFournisseurComponent },
      { path: 'factures', component: ListeFactureComponent },
      { path: 'factures/:id', component: DetailFactureComponent },
      { path: 'ventes', component: ListeVenteComponent },
      { path: 'ventes/:id', component: DetailVenteComponent },
      { path: 'bon-client', component: ListeBonclientComponent },
      { path: 'bon-client/:id', component: DetailBonclientComponent },
      { path: 'creer-bon-client', component: CreerBonclientComponent },
      { path: 'bon-de-livraison', component: ListeBonDeLivraisonComponent },
      { path: 'bon-de-livraison/:id', component: DetailBonDeLivraisonComponent },
      { path: 'collaborations', component: ListeCollaborationComponent },
      { path: 'collaborations/:id', component: DetailCollaborationComponent },
      { path: 'creer-collaboration', component: CreerCollaborationComponent },
      { path: 'depenses', component: ListeDepenseComponent },
      { path: 'depenses/:id', component: DetailDepenseComponent },
      { path: 'creer-depense', component: CreerDepenseComponent },
      { path: 'utilisateurs', component: ListeUtilisateurComponent },
      { path: 'utilisateurs/:id', component: DetailUtilisateurComponent },
      { path: 'creer-utilisateur', component: CreerUtilisateurComponent },
<<<<<<< HEAD
      { path: 'client', component: ListeClientComponent },
      { path: 'client/:id', component: DetailClientComponent },
      { path: 'creer-client', component: CreerClientComponent },
      { path: 'vendeur', component: ListeVendeurComponent },
      { path: 'vendeur/:id', component: DetailVendeurComponent },
      { path: 'creer-vendeur', component: CreervendeurComponent },
      { path: 'dashboard', component: DashboardComponent }
=======
      { path: 'dashboard', component: DashboardComponent },
      { path: 'medicaments-deffectueux', component: MedicamentDeffectueuxComponent },
      { path: 'medicaments-perimes', component: MedicamentPerimesComponent },
      { path: 'vendeurs', component: VendeurComponent },
      { path: 'clients', component: ClientComponent },
      { path: 'lot-de-medicament', component: LotDeMedicamentComponent },

>>>>>>> 3f7ed1a40b63924dfeda6818636bbc354fdaf0a4
    ]
  },
  { path: 'creer-vente', component: CreerVenteComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'connexion', component: AuthentificationComponent },


  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
