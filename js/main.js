const TITLE = [
  'тут',
  'могла',
  'быть',
  'ваша',
  'реклама',
];

const TYPE = [
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

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
]

const DESCRIPTION = [
  'тут',
  'могла',
  'быть',
  'ваша',
  'реклама',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const getRandomInteger = function (num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {

    // Выход из функции при невалидном значении

    return
  }

  const minNumber = Math.ceil(Math.min(num1, num2));
  const maxNumber = Math.floor(Math.max(num1, num2));

  if (minNumber < 0 && maxNumber < 0) {

    // Выход из функции при значении меньше 0

    return
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

    // Выход из функции при невалидном значении

    return
  }

  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);

  if (minNumber < 0 && maxNumber < 0) {

    // Выход из функции при значении меньше 0

    return
  }

  if (maxNumber === minNumber) {
    return minNumber;
  }

  if (minNumber >= 0 && maxNumber >= 0 && maxNumber > minNumber) {
    return ((Math.random() * (maxNumber - minNumber)) + minNumber).toFixed(range);
  }
}

const getAvatar = function () {
  return `img/avatars/user0${getRandomInteger(1, 8)}.png`;
}

const getLocation = function () {
  return {
    x: getRandomFloatNumber(35.65000, 35.70000, 5),
    y: getRandomFloatNumber(139.70000, 139.80000, 5),
  }
}

const getAddres = function () {
  const location = getLocation();

  return `${location.x}, ${location.y}`;
}

const getPrise = function () {
  return getRandomInteger(1, 1000000);
}

const getRooms = function () {
  return getRandomInteger(1, 10);
}

const getQuests = function () {
  return getRandomInteger(1, 100);
}


const getSubArray = function (dictionary) {
  let subArrey = Array(getRandomInteger(1, dictionary.length)).fill('*');

  const arrey = dictionary;

  subArrey = subArrey.map(() => {
    return  arrey.splice(getRandomInteger(0, arrey.length - 1), 1).shift();
  });

  return subArrey;
}

const getFeatures = function () {
  const feature = getSubArray(FEATURES);

  return feature;
}

const getPhotos = function () {
  const photo = getSubArray(PHOTOS);

  return photo;
}

const getRandomArrayElement = function(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

const getAuthor = function() {
  return {
    avatar: getAvatar(),
  };
}

const getOffer = function() {
  return {
    title: getRandomArrayElement(TITLE),
    address: getAddres(),
    price: getPrise(),
    type: getRandomArrayElement(TYPE),
    rooms: getRooms(),
    guests: getQuests(),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getFeatures(),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getPhotos(),
  };
}

getAuthor();
getOffer();
