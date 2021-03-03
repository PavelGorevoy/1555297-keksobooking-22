const mapElement = document.querySelector('.map__filters');
const formAdvertElement = document.querySelector('.ad-form');
const fieldset = document.querySelectorAll('fieldset');
const selectsFilter = mapElement.querySelectorAll('select');


const setDisabledState = (elements) => {
  elements.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

const getInactiveForm = () => {
  mapElement.classList.add('map__filters--disabled');
  formAdvertElement.classList.add('ad-form--disabled');

  setDisabledState(fieldset);
  setDisabledState(selectsFilter);
};

getInactiveForm();

const getActiveForm = () => {
  mapElement.classList.remove('map__filters--disabled');
  formAdvertElement.classList.remove('ad-form--disabled');

  setDisabledState(fieldset);
  setDisabledState(selectsFilter);
};

export {getActiveForm}
