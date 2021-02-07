const AD_TITLES = [
  'тут',
  'могла',
  'быть',
  'ваша',
  'реклама',
];

const ROOM_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const ROOM_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
]

const AD_DESCRIPTIONS = [
  'тут',
  'могла',
  'быть',
  'ваша',
  'реклама',
];

const ROOM_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const getRandomInteger = function (num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {

    throw new Error('getRandomInteger - функция принимает только числа');
  }

  const minNumber = Math.ceil(Math.min(num1, num2));
  const maxNumber = Math.floor(Math.max(num1, num2));

  if (minNumber < 0 && maxNumber < 0) {

    throw new Error('getRandomInteger - функция принимает только положительные числа');
  }

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
}

const getRandomFloatNumber = function (num1, num2, range) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {

    throw new Error('getRandomFloatNumber - функция принимает только числа');
  }

  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);

  if (minNumber < 0 && maxNumber < 0) {

    throw new Error('getRandomFloatNumber - функция принимает только положительные числа');
  }

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return ((Math.random() * (maxNumber - minNumber)) + minNumber).toFixed(range);
  }
}

const getLocation = function () {
  return {
    x: getRandomFloatNumber(35.65000, 35.70000, 5),
    y: getRandomFloatNumber(139.70000, 139.80000, 5),
  }
}

const getSubArray = function (array) {
  return array.slice(0, getRandomInteger(1, array.length-1));
}

const getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
}

const getAuthor = function () {
  return {
    avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
  };
}

const getDescription = function () {
  return {
    title: getRandomArrayElement(AD_TITLES),
    address:
      `${getRandomFloatNumber(35.65000, 35.70000, 5)},
       ${getRandomFloatNumber(139.70000, 139.80000, 5)}`,
    price: getRandomInteger(1, 1000000),
    type: getRandomArrayElement(ROOM_TYPES),
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 100),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getSubArray(ROOM_FEATURES),
    description: getRandomArrayElement(AD_DESCRIPTIONS),
    photos: getSubArray(ROOM_PHOTOS),
  }
}

const getOffer = function () {
  return {
    author: getAuthor(),
    location: getLocation(),
    offer: getDescription(),
  };
}

getOffer();
