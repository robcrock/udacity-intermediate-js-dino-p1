/* eslint-disable prettier/prettier */
// Create Dino Constructor
const Dino = function (species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.facts = [this.diet, this.where, this.when, fact];
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
  const humanTile = Human();

  const gridItemHuman =
    `<div class="grid-item">
        <img src="./images/human.png">
        <h3>${humanTile.name}</h3>
    </div>`;

  fetch('dino.json')
    .then(response => response.json())
    .then(dinos => {

      // Create the array of grid items.
      const gridItemDinos = [];

      // Push each div into the array
      dinos.Dinos.forEach((dino, i) => {

        const thisDino = new Dino(
          dino.species,
          dino.weight,
          dino.height,
          dino.diet,
          dino.where,
          dino.when,
          dino.fact
        );

        console.log(thisDino);

        if (i !== 7) {
          thisDino.facts.push(
            compareHeight(humanTile.heightInFeet, humanTile.heightInInches, thisDino.height),
            compareWeight(humanTile.weight, thisDino.weight),
            compareDiet(humanTile.diet, thisDino.diet)
          )
        }

        let factI = 0;
        if (i !== 7) {
          factI = Math.floor(6 * Math.random());
        } else {
          factI = 0;
        }

        console.log(thisDino.species, thisDino.facts[3]);

        gridItemDinos.push(
          `<div class="grid-item">
            <img src="./images/${thisDino.species}.png">
            <h3>${thisDino.species}</h3>
            <p>${factI !== 0 ? thisDino.facts[factI] : thisDino.facts[3]}</p>
          </div>`
        );

      });

      // Insert the Humam grid item.
      gridItemDinos.splice(4, 0, gridItemHuman);

      // Select the main grid div from the HTML
      const gridDiv = document.getElementById('grid');

      gridItemDinos.forEach((item, i) => {

        const gridItem = document.createElement('div');

        gridDiv.appendChild(gridItem).innerHTML = gridItemDinos[i];

      });

      const formElem = document.getElementById('dino-compare');

      formElem.style.display = 'none';
    });
};

// Remove form from screen
document.getElementById('btn').addEventListener('click', fetchDinoData);
