import {ROOM_TYPES} from './data.js';

const formNode = document.querySelector('.ad-form');

const onFormNodeChange = function (evt) {
  switch (evt.target) {
    case formNode.timein:
    case formNode.timeout:
      validateTimeSelects(evt);
      break;
    case formNode.type:
      validatePriceInput();
      break;
  }
};

const validatePriceInput = function () {
  formNode.price.placeholder = ROOM_TYPES[formNode.type.value].minPrice;
  formNode.price.min = ROOM_TYPES[formNode.type.value].minPrice;
};

const validateTimeSelects = function (evt) {
  if (evt.target === formNode.timein) {
    formNode.timeout.value = formNode.timein.value;
  }

  else {
    formNode.timein.value = formNode.timeout.value;
  }
};

formNode.addEventListener('change', onFormNodeChange);
