const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const typeHousing = document.querySelector('#type');
const priseHousing = document.querySelector('#price');

const changeMinPriceForNight = function () {
  switch (typeHousing.value) {
    case 'bungalow':
      priseHousing.setAttribute('min', 0);
      priseHousing.setAttribute('placeholder', 0);
      break
    case 'flat':
      priseHousing.setAttribute('min', 1000);
      priseHousing.setAttribute('placeholder', 1000);
      break
    case 'house':
      priseHousing.setAttribute('min', 5000);
      priseHousing.setAttribute('placeholder', 5000);
      break
    case 'palace':
      priseHousing.setAttribute('min', 10000);
      priseHousing.setAttribute('placeholder', 10000);
      break
  }
};

typeHousing.addEventListener('change', changeMinPriceForNight);

const changeTime = function (timeInElement, timeOutElement) {
  timeInElement.value = timeOutElement.value;
}

timeIn.addEventListener('change', function () {
  return changeTime(timeOut, timeIn);
})

timeOut.addEventListener('change', function () {
  return changeTime(timeIn, timeOut);
})
