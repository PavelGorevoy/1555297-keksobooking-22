const titlesAdt = [
  'тут',
  'могла',
  'быть',
  'ваша',
  'реклама',
];

const typesRoom = [
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

const featuresRoom = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
]

const descriptionsAdt = [
  'тут',
  'могла',
  'быть',
  'ваша',
  'реклама',
];

const photosRoom = [
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

const getSubArray = function (dictionary) {
  let subArray = Array(getRandomInteger(1, dictionary.length)).fill('*');

  const array = dictionary.slice();

  subArray = subArray.map(() => {
    return array.splice(getRandomInteger(0, array.length - 1), 1).shift();
  });

  return subArray;
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
    title: getRandomArrayElement(titlesAdt),
    address:
      `${getRandomFloatNumber(35.65000, 35.70000, 5)},
       ${getRandomFloatNumber(139.70000, 139.80000, 5)}`,
    price: getRandomInteger(1, 1000000),
    type: getRandomArrayElement(typesRoom),
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 100),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getSubArray(featuresRoom),
    description: getRandomArrayElement(descriptionsAdt),
    photos: getSubArray(photosRoom),
  }
}

const getOffer = function () {
  return {
    avatar: getAuthor(),
    location: getLocation(),
    offer: getDescription(),
  };
}

getOffer();
