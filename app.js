// Create Dino Constructor
const Dino = function (obj) {
  return {
    species: obj.species,
    weight: obj.weight,
    height: obj.height,
    diet: obj.diet,
    facts: [obj.where, obj.when, obj.fact],
  };
};

// Create Human Object
const human = {
  name: this.name,
  heightInFeet: this.heightInFeet,
  hrightInInches: this.heightInInches,
  height: `${this.feet}ft and ${this.inches} inches`,
  weight: this.weight,
  diet: this.diet,
};

// Use IIFE to get human data from form
const submit = function () {
  const formElem = document.getElementById('dino-compare');
  formElem.style.display = 'none';

  const me = Object.create(human);

  me.name = document.getElementById('name').value;
  me.heightInFeet = document.getElementById('feet').value;
  me.heightInInches = document.getElementById('inches').value;
  me.weight = document.getElementById('weight').value;
  me.diet = document.getElementById('diet').value;

  const gridDiv = document.getElementById('grid');
  const gridItem = document.createElement('div');
  const gridItemHtml = `<div class="grid-item">
      <img src="./images/human.png">
      <h3>${me.name}</h3>
      <p>Fun Fact</p>
  </div>`;
  gridDiv.appendChild(gridItem).innerHTML = gridItemHtml;
  console.log(me);
  return me;
};

// Create Dino Compare Height
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareHeight = function (hHeightFt, hHeightIn) {
  const hTotalHeightInInches = hHeightFt / 12 + hHeightIn;
  const dTotalHeightInInches = 10;

  if (hTotalHeightInInches > dTotalHeightInInches) {
    console.log('This dino is shorter than the human.');
  } else if (hTotalHeightInInches < dTotalHeightInInches) {
    console.log('This dino is taller than the human.');
  } else console.log('This dino is the same height as the human.');
};

// Create Dino Compare Weight
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareWeight = function (hWeight) {
  const dWeight = hWeight; // REFACTOR
  const weightDiff = dWeight - hWeight;

  if (weightDiff > 0) {
    console.log(`This dino is ${weightDiff}lbs heavier`);
  } else if (weightDiff < 0) {
    console.log(`This dino is ${weightDiff}lbs lighter`);
  } else {
    console.log('The dino and the human are the same weight.');
  }
};

// Create Dino Compare Diet
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareDiet = function (hDiet) {
  const dDiet = 'Herbavor';

  if (hDiet === dDiet) {
    console.log('This dino and human have the same diet.');
  } else {
    console.log('This dino and human have different diets.');
  }
};

// Generate Tiles for each Dino in Array
const fetchDinoData = function () {
  fetch('dino.json')
    .then(response => response.json())
    .then(dinos => {
      const gridDiv = document.getElementById('grid');
      dinos.Dinos.forEach(dino => {
        const gridItem = document.createElement('div');
        const gridItemHtml = `<div class="grid-item">
            <img src="./images/${Dino(dino).species}.png">
            <h3>${Dino(dino).species}</h3>
            <p>${Dino(dino).facts[0]}</p>
        </div>`;
        gridDiv.appendChild(gridItem).innerHTML = gridItemHtml;
      });
    });
};

// Add tiles to DOM
fetchDinoData();

// Remove form from screen
document.getElementById('btn').addEventListener('click', submit);

// On button click, prepare and display infographic
