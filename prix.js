
function getid(selName){ //fonction qui permet de changer l'image suivant le formulaire
    select = document.getElementById(selName);
    id=(select.options[select.selectedIndex].text);
    document.getElementById(id).innerHTML = '<img src="C:/Users/maxgi/Desktop/site/i2.jpg">';
}
   
function calculTotal(){ //fonction calculant le prix d'un produit
    select = document.getElementByValue(selName);
    value=select.options[select.selectedIndex].text;
    document.prix.innerHTML = value
}

//let btnPlus = document.querySelector() //fonction qui permet d'augmenter le nombre de produit achete


mapboxgl.accessToken = 'pk.eyJ1IjoibWF4MTQwNTAxIiwiYSI6ImNsYTNzMmlobjA1MXAzdm14dngyeG1zazQifQ.2IHWppCoE_B-epIl553RXg';
//const map = new mapboxgl.Map({
    //container: 'map',
    //style: 'mapbox://styles/mapbox/streets-v11',
    //center: [-122.662323, 45.523751], // starting position
    //zoom: 12
//    });
//const bounds = [
//    [-123.069003, 45.395273],
//    [-122.303707, 45.612333]
//  ];
//map.setMaxBounds(bounds);
const start = [45.7627925, 4.8630073];
const end = [46,5]
async function getRoute(end) {
    const query = await fetch(
`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
    );
    const json = await query.json();
    const data = json.routes[0];
    console.error(data)
}
