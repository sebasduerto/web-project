var comentarios, types, title, types_text;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Describe this function...
function next_page() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_types_images2 = document.getElementById('types-images');
  types.push(types[0]);
  element_types_images2.setAttribute("src", types.shift());
  let element_types_title2 = document.getElementById('types-title');
  title.push(title[0]);
  element_types_title2.innerText = title.shift();
  let element_types_text2 = document.getElementById('types-text');
  types_text.push(types_text[0]);
  element_types_text2.innerText = types_text.shift();
}

// Describe this function...
function previous_page() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_types_images3 = document.getElementById('types-images');
  types.unshift(types.slice(-1)[0]);
  element_types_images3.setAttribute("src", types.pop());
  let element_types_title3 = document.getElementById('types-title');
  title.unshift(title.slice(-1)[0]);
  element_types_title3.innerText = title.pop();
  let element_types_text3 = document.getElementById('types-text');
  types_text.unshift(types_text.slice(-1)[0]);
  element_types_text3.innerText = types_text.pop();
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

// Describe this function...
function comentar() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_comments_list = document.getElementById('comments-list');
  let new_div = document.createElement('div');
  new_div.innerText = comentarios.shift();

  element_comments_list.appendChild(new_div);
  let new_span = document.createElement('span');
  new_span.innerText = comentarios.pop();

  element_comments_list.appendChild(new_span);
}


types = ['https://i.pinimg.com/originals/6a/bc/aa/6abcaa8436cceeebaf5137aaf07f03e4.jpg', 'https://www.sharksandrays.com/wp-content/uploads/2021/01/Spiny-Dogfish-038.jpg', 'https://www.thoughtco.com/thmb/qz4n4mdgKpteH-wsXiwCahrmemI=/2000x1333/filters:fill(auto,1)/Pristiophorus_japonicus_2-7a23b88baf9147ef9427af0ae37a3672.jpg', 'https://inaturalist-open-data.s3.amazonaws.com/photos/251622498/original.jpg', 'https://res.cloudinary.com/dr0zfbman/images/f_auto,q_auto:good/v1687582208/WordPress%20Content/Heterodontiformes_OpenCage-Systems/Heterodontiformes_OpenCage-Systems.jpg?_i=AA', 'https://www.tiburoneswiki.com/Imagenes/tiburones-orectolobiformes.jpg', 'https://portphillipmarinelife.net.au/images/species/speciesHero_520121.jpeg', 'https://th.bing.com/th/id/R.e0cd43ff4c562358c1aaffe20bc15ab2?rik=OBDuWP9cR7TZDQ&riu=http%3a%2f%2ffishbiosystem.ru%2fshark%2fCarcharhinidae%2fFoto%2f(Carcharhinus+falciformis)+1f.jpg&ehk=rukUJ2%2fw1BHrx74fkFKKd0P36GMd%2bixSDBIrCO%2fPpJo%3d&risl=&pid=ImgRaw&r=0'];

title = ['Hexanchiforms', 'Squaliformes', 'Pristiophoriformes', 'Squatiniformes', 'Heterodontiformes', 'Orectolobiformes', 'Carcharhiniformes', 'Lamniformes'];

types_text = ['In this order there are six living species grouped in three families, characterized by having six gills, a single dorsal fin and no third eyelid. It is the most primitive order of sharks, such as the eel shark (Chlamydoselachus anguineus) or the cow shark (Notorynchus cepedianus).', 'In this order there are 125 living species, in seven different families, which also lack a third eyelid and anal fin, but have two dorsal fins, some of which may be venomous. The pygmy shark (Euprotomicrus bispinatus) and the sea pig (Oxynotus centrina) belong to this order.', 'There are eight species in two different genera, with six gills and an elongated, serrated snout resembling a saw, with which they scour the ocean floor in search of prey. The most representative of the order is the saw shark (Pilotrema warreni).', 'Comprising twenty-two different species in the same genus, these are flattened sharks, adapted to roam the seabed, detecting their prey buried in the sand. A good example is the angel shark (Squatina dumeril).', 'In this case there are nine species with short snout, five gills and spines inside their dorsal fins, as they are accustomed, like the horned seabream (Heterodontus francisci) to nocturnal and reef life.', 'Composed of 33 species in seven different families, they lack anal fins and have various types of whiskers connected to their olfactory organs (nostrils). Examples of this order are the dogfish (Ginglymostoma cirratum) and the huge whale shark (Rhincodon typus).', 'Composed of 197 species in eight different families, this is the most complex group of sharks, with five gills and wide, rounded snouts, sometimes with particular shapes, such as the hammerhead shark (Sphyrna mokarran), the bull shark (Carcharhinus leucas) or the blue shark (Prionace glauca).', 'In this order there are 16 species grouped in seven families, and they are the classic sharks of the movies, those that have large teeth born under the eyes, five gills and the complete set of fins. Here we find the great white shark (Carcharodon carcharias), the mako shark (Isurus oxyrinchus) or the basking shark (Cetorhinus maximus).'];

let element_types_images = document.getElementById('types-images');
element_types_images.setAttribute("src", types[0]);
let element_types_title = document.getElementById('types-title');
element_types_title.innerText = title[0];
let element_types_text = document.getElementById('types-text');
element_types_text.innerText = types_text[0];


document.getElementById('previous').addEventListener('click', (event) => {
  previous_page();

});

document.getElementById('next').addEventListener('click', (event) => {
  next_page();

});
comentarios = [];


document.getElementById('add').addEventListener('click', (event) => {
  comentarios.unshift(document.getElementById('my-name').value);
  comentarios.push(document.getElementById('comments-text').value);
  comentar();

});