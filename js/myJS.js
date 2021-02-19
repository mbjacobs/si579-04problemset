const firsts = 
["First Female, Black, South Asian Vice President: Kamala Harris", 
"First First Lady with a Doctorate: Dr. Jill Biden",
"Youngest U.S. Inaugural Poet: Amanda Gorman",
"First Second Gentleman: Doug Emhoff"]

const images =  [{
    url: 'https://images.unsplash.com/photo-1594036608069-c96ee2c3310d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80',
    alt: 'Single, white lit candle in the foreground with dripping wax, pictured with solid black background',
  }, {
    url: 'https://images.unsplash.com/photo-1505231509341-30534a9372ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    alt: 'Marquee letters lit up to spell HOPE amid trees and lit lightbulbs strung through branches',
  }, {
    url: 'https://images.unsplash.com/photo-1533647008673-fe40911c986a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    alt: 'Orange and blue sunrise from the Lincoln Memorial, facing the Washington Monument in Washington DC',
  }, 
];
const illuminatebtn = document.querySelector("#illuminatebtn");
const shatterbtn = document.querySelector("#shatterbtn");

//REQUIREMENT: Attach at least three event listeners to DOM elements or timer events
window.addEventListener('load', populateImages); //REQUIREMENT: Write an event listener that reacts to something other than click
illuminatebtn.addEventListener("click", handleIlluminateButtonClick);
shatterbtn.addEventListener("click", populateList);

function populateImages () {
    const imageList =  document.querySelector("#image-section");
    images.forEach(function (image) {
            let img =  document.createElement("img");
            img.setAttribute("src", image.url);
            img.setAttribute("alt", image.alt);
            imageList.append(img);
        } 
    )
}

function handleIlluminateButtonClick () {
    illuminateImages();
    toggleButton();
}

function illuminateImages () {
    const imageList =  document.querySelector("#image-section").getElementsByTagName("img");
    const message = document.querySelector("#illuminatebtn").innerHTML;
    //REQUIREMENT: In at least one callback, use JavaScript to change the CSS style of at least one element
    for (let i =0; i < imageList.length; i++) {
        if (message === "Illuminate") {
            imageList[i].style.filter = 'grayscale(0)';
        } else {
            imageList[i].style.filter = 'grayscale(100)';
        }
    }
}

function toggleButton () {
    const message = document.querySelector("#illuminatebtn").innerHTML;
    if (message === "Illuminate") {
        illuminatebtn.innerHTML =  "Extinguish";
    }
    else {
        illuminatebtn.innerHTML = "Illuminate";
    }
}

//REQUIREMENT: Write a JavaScript function which takes an array of strings and creates a set of <li> elements
function populateList () {
    const btn = document.querySelector("#shatterbtn");
    const ul = document.querySelector("#firstsList");
    ///REQUIREMENT: In at least one callback, use JavaScript to modify the DOM structure by ADDING or deleting elements
    firsts.forEach(function (item) {
            let li =  document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        } 
    )
    //Disable button.
    btn.disabled =  'true';
}