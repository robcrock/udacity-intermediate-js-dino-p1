/* eslint-disable prettier/prettier */

// Create comparison methods

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

const createDinosItems = function (arrayOfObjs, humanItem) {
  // Push each div into the array
  const dinoItems = arrayOfObjs.map((dino, i) => {

    const thisDino = new Dino(
      dino.species,
      dino.weight,
      dino.height,
      dino.diet,
      dino.where,
      dino.when,
      dino.fact
    );

    if (i !== 7) {
      thisDino.facts.push(
        compareHeight(humanItem.heightInFeet, humanItem.heightInInches, thisDino.height),
        compareWeight(humanItem.weight, thisDino.weight),
        compareDiet(humanItem.diet, thisDino.diet)
      )
    }

    return thisDino

  });

  return dinoItems;
}

// Create Human Object
const Human = function (name, feet, inches, weight, diet) {
  this.name = name;
  this.heightInFeet = feet;
  this.heightInInches = inches;
  this.height = `${feet}ft and ${inches} inches`;
  this.weight = weight;
  this.diet = diet;
};

const createHumanItem = function () {
  return new Human(
    document.getElementById('name').value,
    document.getElementById('feet').value,
    document.getElementById('inches').value,
    document.getElementById('weight').value,
    document.getElementById('diet').value
  )
}

// Create the grid elements
const createInnerHtml = function (item, i) {

  let factIndex = 0;
  if (i !== 8) {
    factIndex = Math.floor(6 * Math.random());
  } else {
    factIndex = 3;
  }

  // Conditionally return the appropriate element.
  let element = '';
  if (i === 4) {
    const humanElement =
      `<div class="grid-item">
      <img src="./images/human.png">
      <h3>${item.name}</h3>
    </div>`;

    element = humanElement;
  } else {
    const dinoElement =
      `<div class="grid-item">
      <img src="./images/${item.species}.png">
      <h3>${item.species}</h3>
      <p>${item.facts[factIndex]}</p>
    </div>`;

    element = dinoElement;
  }

  return element;

}

const insertGridElement = function (innerHtml, targetElem) {

  const gridItemHtml = document.createElement('div');

  targetElem.appendChild(gridItemHtml).innerHTML = innerHtml;

};

// Generate Tiles for each Dino in Array
const fetchDinoData = function () {

  fetch('dino.json')
    .then(response => response.json())
    .then(dinos => {

      // Create grid items
      const humanItem = createHumanItem();
      const dinoItems = createDinosItems(dinos.Dinos, humanItem);

      // Insert the Humam grid item.
      dinoItems.splice(4, 0, humanItem);

      const gridHtml = dinoItems.map(createInnerHtml);

      // Select the main grid div from the HTML
      const gridDiv = document.getElementById('grid');

      gridHtml.forEach(html => {
        insertGridElement(html, gridDiv);
      });

      const formElem = document.getElementById('dino-compare');
      formElem.style.display = 'none';

    });

};

// Remove form from screen
document.getElementById('btn').addEventListener('click', fetchDinoData);
