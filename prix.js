<script type="text/javascript">
function calculTotal(){
    var Taille = Number(panier.getElementById("Taille").value);
    var Duree = Number(panier.getElementById("Duree").value);
    var Exposition = Number(panier.getElementById("Exposition").value);
    var Eclairagedenuit = Number(panier.getElementById("Eclairagedenuit").value);
    var Assurance = Number(panier.getElementById("Assurance").value);
    var Livraison = Number(panier.getElementById("Livraison").value);
  
    var amount = Number(((Taille + Exposition + Eclairagedenuit + Assurance) * Duree) + Livraison) ;
    panier.getElementById("amount") = amount;
}
</script>
