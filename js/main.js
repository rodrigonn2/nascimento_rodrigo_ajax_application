(() => {

const hotspots = document.querySelectorAll(".Hotspot");
const materialTemplate = document.querySelector("#material-template");
const materialList = document.querySelector("#material-list");
const loader = document.querySelector("#loader");



function getData() {
  loader.classList.toggle("hidden");
fetch("https://swiftpixel.com/earbud/api/materials") //fetch the information and then take the response from Json
  .then(response => response.json())
  .then(material => {


      materialList.innerHTML = "";

      const ul = document.createElement("ul");
      ul.id = "material-list";

//Comecando a criar a lista
material.forEach(results => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
 
h3.textContent = results.heading;



const p = document.createElement("p");
p.textContent = results.description;


li.appendChild(h3);
li.appendChild(p);
ul.appendChild(li);

      });
      loader.classList.toggle ("hidden");
      materialList.appendChild(ul);

      

  })

    .catch(error =>{ 
        console.log(error)
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Ops, something went wrong. Please check your connection or try again.";
        materialList.appendChild(errorMessage);
    });

}

getData();



function loadInfoBoxes() {
  
fetch("https://swiftpixel.com/earbud/api/infoboxes")
    .then(response => response.json())
    .then(results => {
 
      for (let index = 0; index < 4; index++) {
       
        let selected = document.querySelector(`#hotspot-${index + 1}`);
        const loaderHot = document.querySelector(`#loaderhot_${index + 1}`);
        loaderHot.classList.add("hidden");
        console.log('Its here.')

        

        const titleElement = document.createElement('h2');
        titleElement.textContent = results[index].heading;

        const textElement = document.createElement('p');
        textElement.textContent = results[index].description;

        selected.appendChild(titleElement);
        selected.appendChild(textElement);
      }


     
    })
    .catch(error =>{ 
      console.log(error)
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Ops, something went wrong. Please check your Connection ";
      hotspot.appendChild(errorMessage);
    });
}

loadInfoBoxes();

  


  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

