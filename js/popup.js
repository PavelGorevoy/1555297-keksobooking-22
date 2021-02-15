import {getOffer} from './data.js';

const popupMap = document.querySelector('.map__canvas');

const cardTemplateFragment = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCard = function(card) {
  const similarCard = cardTemplateFragment.cloneNode(true);
  popupMap.appendChild(similarCard);

  const cardTitle = similarCard.querySelector('.popup__title');
  if (card.offer.title) {
    cardTitle.textContent = card.offer.title;
  }else cardTitle.remove();

  const cardAddress = similarCard.querySelector('.popup__text--address');
  if (card.offer.address) {
    cardAddress.textContent = card.offer.address;
  }else cardAddress.remove();

  const cardPrice = similarCard.querySelector('.popup__text--price');
  if (card.offer.price) {
    cardPrice.textContent = `${card.offer.price} ₽/ночь`;
  }else cardPrice.remove();

  const cardType = similarCard.querySelector('.popup__type');
  if (card.offer.type) {
    cardType.textContent = card.offer.type;
  }else cardType.remove();

  const cardRoomsGuests = similarCard.querySelector('.popup__text--capacity');
  if (card.offer.rooms && card.offer.guests) {
    cardRoomsGuests.textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  }else cardRoomsGuests.remove();

  const cardTime = similarCard.querySelector('.popup__text--time');
  if (card.offer.checkin && card.offer.checkout) {
    cardTime.textContent = `Заезд после  ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  }else cardTime.remove();

  const featureList = similarCard.querySelector('.popup__features');
  if(card.offer.features){
    featureList.innerHTML = '';
    for (let i = 0; i < card.offer.features.length; i++) {
      const feature = document.createElement('li');
      const featureClass = `popup__feature--${card.offer.features[i]}`;
      feature.classList.add('popup__feature', featureClass);
      featureList.appendChild(feature);
    }
  }else featureList.remove();

  const cardDescription = similarCard.querySelector('.popup__description');
  if (card.offer.description) {
    cardDescription.textContent = card.offer.description;
  }else cardDescription.remove();

  const photoList = similarCard.querySelector('.popup__photos');
  if(card.offer.photos){
    photoList.innerHTML = '';
    for (let i = 0; i < card.offer.photos.length; i++) {
      const photo = cardTemplateFragment.querySelector('.popup__photo').cloneNode(true);
      photo.src = card.offer.photos[i];
      photoList.appendChild(photo);
    }
  }else photoList.remove();

  const cardAvatar = similarCard.querySelector('.popup__avatar');
  if (card.author.avatar) {
    cardAvatar.src = card.author.avatar;
  }else cardAvatar.remove();
}

createCard(getOffer())
