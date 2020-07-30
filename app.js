/* eslint-disable prettier/prettier */
// Create Dino Constructor
const Dino = function (obj) {
  return {
    species: obj.species,
    weight: obj.weight,
    height: obj.height,
    diet: obj.diet,
    where: obj.where,
    when: obj.when,
    fact: [],
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
const Human = function () {
  const me = Object.create(human);

  me.name = document.getElementById('name').value;
  me.heightInFeet = document.getElementById('feet').value;
  me.heightInInches = document.getElementById('inches').value;
  me.weight = document.getElementById('weight').value;
  me.diet = document.getElementById('diet').value;

  return me;
  // const gridDiv = document.getElementById('grid');
  // const gridItem = document.createElement('div');
  // gridDiv.appendChild(gridItem).innerHTML = gridItemHtml;
  // console.log(me);
};

// Create Dino Compare Height
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareHeight = function (hHeightFt, hHeightIn, dTotalHeightInInches) {
  const hTotalHeightInInches = parseInt(hHeightFt) * 12 + parseInt(hHeightIn);

  if (hTotalHeightInInches > +dTotalHeightInInches) {
    return 'This dino is shorter than the human.';
  } if (hTotalHeightInInches < +dTotalHeightInInches) {
    return 'This dino is taller than the human.';
  } return 'This dino is the same height as the human.';
};

// Create Dino Compare Weight
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareWeight = function (hWeight, dWeight) {
  // const dWeight = hWeight; // REFACTOR
  const weightDiff = parseInt(dWeight) - parseInt(hWeight);

  if (weightDiff > 0) {
    return `This dino is heavier than the human.`;
  } if (weightDiff < 0) {
    return `This dino is lighter than the human.`;
  } return 'The dino and the human are the same weight.';
};

// Create Dino Compare Diet
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareDiet = function (hDiet, dDiet) {

  if (hDiet.toLowerCase() === dDiet) {
    return 'This dino and human have the same diet.';
  } return 'This dino and human have different diets.';
};

// Generate Tiles for each Dino in Array
const fetchDinoData = function () {
  const human = Human();

  const gridItemHuman =
    `<div class="grid-item">
      <img src="./images/human.png">
      <h3>${human.name}</h3>
  </div>`;

  fetch('dino.json')
    .then(response => response.json())
    .then(dinos => {

      // Create the array of grid items.
      const gridItemDinos = [];

      // Push each div into the array
      dinos.Dinos.forEach((dino, i) => {

        const thisDino = Dino(dino);
        if (i !== 7) {
          thisDino.fact.push(compareHeight(human.heightInFeet, human.heightInInches, thisDino.height), compareWeight(human.weight, thisDino.weight), compareDiet(human.diet, thisDino.diet))
        } else {
          thisDino.fact.push('All birds are living dinosaurs.');
        }

        let factI = 0;
        if (i !== 7) {
          factI = Math.floor(3 * Math.random());
        } else {
          factI = 0;
        }

        gridItemDinos.push(`<div class="grid-item">
        <img src="./images/${thisDino.species}.png">
        <h3>${thisDino.species}</h3>
        <p>${thisDino.fact[factI]}</p>
        </div>`);
      });

      // Insert the Humam grid item.
      gridItemDinos.splice(4, 0, gridItemHuman);

      // Select the main grid div from the HTML
      const gridDiv = document.getElementById('grid');
      gridItemDinos.forEach((item, i) => {
        const gridItem = document.createElement('div');
        gridDiv.appendChild(gridItem).innerHTML = gridItemDinos[i];
      });
      console.log(gridItemDinos);
      const formElem = document.getElementById('dino-compare');
      formElem.style.display = 'none';
    });
};

// Add tiles to DOM
// fetchDinoData();

// Remove form from screen
document.getElementById('btn').addEventListener('click', fetchDinoData);

// On button click, prepare and display infographic
