
Let Taillet=[5,10,20]
Let Dureet=[7,14,30,60,365]
Let Expositiont=[2,1,0]
Let Eclairagedenuitt=[2,1,0]
Let Assurancet=[1,0]
Let Livraisont=[25,0]

const Prix = (Taillet[Taille.options[Taille.selectedIndex].id] + Expositiont[Exposition.options[Exposition.selectedIndex].id] + Eclairagedenuitt[Eclairagedenuit.options[Eclairagedenuit.selectedIndex].id] + Assurancet[Assurance.options[Assurance.selectedIndex].id]) * Dureet[Duree.options[Duree.selectedIndex].id] + Livraisont[Livraison.options[Livraison.selectedIndex].id];

(Taillet[0] + Expositiont[2] + Eclairagedenuitt[0] + Assurancet[0]) * Dureet[0] + Livraisont[0];