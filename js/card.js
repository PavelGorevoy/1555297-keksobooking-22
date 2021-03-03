import {getOffer} from './data.js';
import {getDeclension} from './utils.js';

const WORD_DECLENSION_MAP = {
  room : ['комната', 'комнаты', 'комнат'],
  guest: ['гостя', 'гостей', 'гостей'],
};

const cardTemplateFragment = document.querySelector('#card').content.querySelector('.popup');
const similarCard = cardTemplateFragment.cloneNode(true);

const createCard = function(card) {
  const roomsAmount = card.offer.rooms;
  const guestsAmount = card.offer.guests;

  similarCard.querySelector('.popup__title').textContent = card.offer.title || '';
  similarCard.querySelector('.popup__text--address').textContent = card.offer.address || '';
  similarCard.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь` || '';
  similarCard.querySelector('.popup__type').textContent = card.offer.type || '';
  similarCard.querySelector('.popup__text--capacity').textContent = `${roomsAmount} ${getDeclension(roomsAmount, WORD_DECLENSION_MAP.room)} для ${guestsAmount} ${getDeclension(guestsAmount, WORD_DECLENSION_MAP.guest)}` || '';
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
  }
  else {
    featureList.classList.add('hidden');
  }

  const photosList = similarCard.querySelector('.popup__photos');

  if (card.offer.photos.length) {
    similarCard.querySelector('.popup__photo').src = card.offer.photos[0];
    if (card.offer.photos.length > 1) {
      photosList.innerHTML = '';
      for (let i = 1; i < card.offer.photos.length; i++) {
        const photo = cardTemplateFragment.querySelector('.popup__photo').cloneNode(true);
        photo.src = card.offer.photos[i];
        photosList.appendChild(photo);
      }
    }
  } else {
    photosList.classList.add('hidden');
  }

  return similarCard;

}

createCard(getOffer())

export {createCard};
