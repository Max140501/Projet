function Prix(selName){ //fonction calculant le prix d'un produit
    localStorage.clear();
    select = document.getElementById(selName);
    valueTaille = (Taille.options[Taille.selectedIndex].value)
    valueAssurance=(Assurance.options[Assurance.selectedIndex].value);
    valueEclairagedenuit=(Eclairagedenuit.options[Eclairagedenuit.selectedIndex].value);
    prix = Taille.options[Taille.selectedIndex].value + Eclairagedenuit.options[Eclairagedenuit.selectedIndex].value + Assurance.options[Assurance.selectedIndex].value;
    document.getElementById("prix").innerHTML=prix
    idT=(Taille.options[Taille.selectedIndex].text);
    idA=(Assurance.options[Assurance.selectedIndex].text);
    idC=(Couleurs.options[Couleurs.selectedIndex].text);
    idE=(Eclairagedenuit.options[Eclairagedenuit.selectedIndex].text);
    if(idT=="100x200"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="200x400"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="400x800"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="100x200" && idE=="Eclairage" ){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="200x400" && idE=="Eclairage"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="400x800" && idE=="Eclairage"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="100x200" && idE=="Rien"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="200x400" && idE=="Rien"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    if(idT=="400x800" && idE=="Rien"){document.getElementById("image").innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">'}
    localStorage.setItem("idT",idT);
    localStorage.setItem("idE",idE);
    localStorage.setItem("idA",idA);
    localStorage.setItem("idC",idC);
    localStorage.setItem("Image",document.getElementById("image"));
    localStorage.setItem("Prix",Prix);
}

//let btnPlus = document.querySelector() //fonction qui permet d'augmenter le nombre de produit achete


mapboxgl.accessToken = 'pk.eyJ1IjoibWF4MTQwNTAxIiwiYSI6ImNsYTNzMmlobjA1MXAzdm14dngyeG1zazQifQ.2IHWppCoE_B-epIl553RXg';

const start = [45.7627925, 4.8630073];
x=input()
y=input()
const end = [x,y];
async function getRoute(end) {
    const query = await fetch(
`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
    );
    const json = await query.json();
    const data = json.routes[0];
    console.log(data)
}
