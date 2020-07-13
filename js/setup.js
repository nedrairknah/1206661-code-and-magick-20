'use strict';
var WIZARDS_NUMBER = 4;

var WIZARD_NAMES = [
  'Иван ',
  'Хуан Себастьян ',
  'Мария ',
  'Кристоф ',
  'Виктор ',
  'Юлия ',
  'Люпита ',
  'Вашингтон '
];

var WIZARD_SURNAMES = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = ['black',
  'red',
  'blue',
  'yellow',
  'green'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

//1 создал пустой массив
var wizards = [];

//2 создал цикл
//выполнить цикл от 0 до 4 через единицу

var getWizard = function () {
  return {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
  }
};

for (var i = 0; i < 4; i++) {
  // в теле цикла присваиваем переменной wizards рандомные параметра объекта
  //3 внутри цикла пушим объект в массив
  wizards.push(getWizard())
  console.log(wizards)
}



// var wizards = [
//   {
//     name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
//     surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
//     coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
//     eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
//   },
//   {
//     name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
//     surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
//     coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
//     eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
//   },
//   {
//     name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
//     surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
//     coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
//     eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
//   },
//   {
//     name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
//     surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
//     coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
//     eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
//   }
// ];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;


  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
