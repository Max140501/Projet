function Prix(selName){ //fonction calculant le prix d'un produit et la personnalisation
    localStorage.clear();
    select = document.getElementById(selName);
    valueTaille = (Taille.options[Taille.selectedIndex].value)
    valueAssurance=(Assurance.options[Assurance.selectedIndex].value);
    valueEclairagedenuit=(Eclairagedenuit.options[Eclairagedenuit.selectedIndex].value);
    idT=(Taille.options[Taille.selectedIndex].text);//variable pour le local storage
    idA=(Assurance.options[Assurance.selectedIndex].text);
    idC=(Couleurs.options[Couleurs.selectedIndex].text);
    idE=(Eclairagedenuit.options[Eclairagedenuit.selectedIndex].text);
    
    if(idT=="100x200"){document.getElementById("image").innerHTML = '<img src="panneaux1.png">',
    prix=50,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux1.png">'
    }

    if(idT=="200x400"){document.getElementById("image").innerHTML = '<img src="panneaux2.png">',
    prix=100,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux2.png">'}

    if(idT=="400x800"){document.getElementById("image").innerHTML = '<img src="panneaux3.png">',
    prix=200,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux3.png">'}

    if(idT=="100x200" && idC=="Bleu" ){document.getElementById("image").innerHTML = '<img src="panneaux1bleu.png">',
    prix=55,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux1bleu.png">'}

    if(idT=="100x200" && idC=="Rouge"){document.getElementById("image").innerHTML = '<img src="panneaux1rouge.png">',
    prix=55,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux1rouge.png">'}

    if(idT=="100x200" && idC=="Vert"){document.getElementById("image").innerHTML = '<img src="panneaux1vert.png">',
    prix=55,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux1vert.png">'}

    if(idT=="200x400" && idC=="Bleu"){document.getElementById("image").innerHTML = '<img src="panneaux2bleu.png">',
    prix=105,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux2bleu.png">'}

    if(idT=="200x400" && idC=="Rouge"){document.getElementById("image").innerHTML = '<img src="panneaux2rouge.png">',
    prix=105,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux2rouge.png">'}

    if(idT=="200x400" && idC=="Vert"){document.getElementById("image").innerHTML = '<img src="panneaux2vert.png">',
    prix=105,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux2vert.png">'}

    if(idT=="400x800" && idC=="Bleu"){document.getElementById("image").innerHTML = '<img src="panneaux3bleu.png">',
    prix=205,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux3bleu.png">'}

    if(idT=="400x800" && idC=="Rouge"){document.getElementById("image").innerHTML = '<img src="panneaux3rouge.png">',
    prix=205,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux3rouge.png">'}

    if(idT=="400x800" && idC=="Vert"){document.getElementById("image").innerHTML = '<img src="panneaux3vert.png">',
    prix=205,
    document.getElementById("prix").innerHTML=prix
    Image= '<img src="panneaux3vert.png">'}

    localStorage.setItem("idT",idT); //local storage
    localStorage.setItem("idE",idE);
    localStorage.setItem("idA",idA);
    localStorage.setItem("idC",idC);
    localStorage.setItem("Image",Image);
    localStorage.setItem("prix",prix);
}

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4MTQwNTAxIiwiYSI6ImNsYTNzMmlobjA1MXAzdm14dngyeG1zazQifQ.2IHWppCoE_B-epIl553RXg';

const start = [45.7627925, 4.8630073];
const end = [input(x),input(y)]
async function getRoute(end) {
    const query = await fetch(
`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${x},${y}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
    );
    const json = await query.json();
    const data = json.routes[0];
    console.error(data)
}