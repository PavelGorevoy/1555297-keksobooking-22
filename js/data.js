import {getRandomFloatNumber} from './util.js';
import {getRandomInteger} from './util.js';

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

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
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

const getOffer = function () {
  const location = getLocation();

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },
    location: {
      x: `${location.x}`,
      y: `${location.y}`,
    },
    offer: {
      title: getRandomArrayElement(AD_TITLES),
      address:
        `${getRandomFloatNumber(35.65000, 35.70000, 5)},
         ${getRandomFloatNumber(139.70000, 139.80000, 5)}`,
      price: getRandomInteger(1, 1000000),
      type: getRandomArrayElement(ROOM_TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 100),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getSubArray(ROOM_FEATURES),
      description: getRandomArrayElement(AD_DESCRIPTIONS),
      photos: getSubArray(ROOM_PHOTOS),
    },
  };
}

getOffer();
