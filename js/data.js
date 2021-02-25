import {getRandomFloatNumber} from './utils.js';
import {getRandomInteger} from './utils.js';

const AD_TITLES = [
  'Девичье гнездышко',
  'Приют всех муз',
  'Дыхание природы',
  'Штучный экземпляр',
  'Дом под старину',
];

const ROOM_TYPES = [
  {palace: 'Дворец'},
  {flat: 'Квартира'},
  {house: 'Дом'},
  {bungalow: 'Бунгало'},
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
  'Звоните сейчас, завтра цены будут дороже',
  'Европейский интерьер с джакузи',
  'Не проходите мимо!',
  'Мега супер квартира!',
  'Вам повезло с ценой!',
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
  return array.slice(0, getRandomInteger(0, array.length));
}

const getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
}

const getOffer = function () {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },
    location: getLocation(),
    offer: {
      title: getRandomArrayElement(AD_TITLES),
      address:
        `${getRandomFloatNumber(35.65000, 35.70000, 5)},
         ${getRandomFloatNumber(139.70000, 139.80000, 5)}`,
      price: getRandomInteger(0, 30000),
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

export {getOffer};
