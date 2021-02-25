import {getOffer} from './data.js';
import {getDeclension} from './utils.js';

const WORD_DECLINATION = {
  room : ['комната', 'комнаты', 'комнат'],
  guest: ['гостя', 'гостей', 'гостей'],
};

const popupMap = document.querySelector('.map__canvas');
const cardTemplateFragment = document.querySelector('#card').content.querySelector('.popup');
const similarCard = cardTemplateFragment.cloneNode(true);

const createCard = function(card) {
  popupMap.appendChild(similarCard);

  const room = card.offer.rooms;
  const guests = card.offer.guests;

  similarCard.querySelector('.popup__title').textContent = card.offer.title || '';
  similarCard.querySelector('.popup__text--address').textContent = card.offer.address || '';
  similarCard.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь` || '';
  similarCard.querySelector('.popup__type').textContent = Object.values(card.offer.type) || '';
  similarCard.querySelector('.popup__text--capacity').textContent = `${room} ${getDeclension(room, WORD_DECLINATION.room)} для ${guests} ${getDeclension(guests, WORD_DECLINATION.guest)}` || '';
  similarCard.querySelector('.popup__text--time').textContent = `Заезд после  ${card.offer.checkin}, выезд до ${card.offer.checkout}` || '';
  similarCard.querySelector('.popup__description').textContent = card.offer.description || '';
  similarCard.querySelector('.popup__avatar').src = card.author.avatar || '';

  const featureList = similarCard.querySelector('.popup__features');
  if(card.offer.features){
    featureList.innerHTML = '';
    for (let i = 0; i < card.offer.features.length; i++) {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', `popup__feature--${card.offer.features[i]}`);
      featureList.appendChild(feature);
    }
  }else featureList.remove();

  const photosList = similarCard.querySelector('.popup__photos');
  if (card.offer.photos.length) {
    similarCard.querySelector('.popup__photo').src = card.offer.photos[0];
    if (card.offer.photos.length > 1) {
      photosList.innerHTML = '';
      for (let i = 0; i < card.offer.photos.length; i++) {
        const photo = cardTemplateFragment.querySelector('.popup__photo').cloneNode(true);
        photo.src = card.offer.photos[i];
        photosList.appendChild(photo);
      }
    }
  } else {
    photosList.classList.add('hidden');
  }
}

createCard(getOffer())
