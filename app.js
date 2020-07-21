console.log(Dinos);

// Create Dino Constructor
function Dino(species, img, fact) {
  return {
    species: this.species,
    img: this.image,
    fact: this.fact,
  };
}

// Create Dino Objects
const dino1 = new Dino('test', 'test', 'test');
const dino2 = new Dino('test', 'test', 'test');
const dino3 = new Dino('test', 'test', 'test');
const dino4 = new Dino('test', 'test', 'test');
const dino5 = new Dino('test', 'test', 'test');
const dino6 = new Dino('test', 'test', 'test');
const dino7 = new Dino('test', 'test', 'test');
const dino8 = new Dino('test', 'test', 'test');

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
  const me = Object.create(human);

  me.name = document.getElementById('name').value;
  me.heightInFeet = document.getElementById('feet').value;
  me.heightInInches = document.getElementById('inches').value;
  me.weight = document.getElementById('weight').value;
  me.diet = document.getElementById('diet').value;

  return me;
};

document.getElementById('btn').addEventListener('click', submit);

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

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
