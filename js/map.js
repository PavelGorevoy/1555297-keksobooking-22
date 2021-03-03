/* global L:readonly */
import {getActiveForm} from './disabled-form.js';
import {createOffers} from './data.js';
import {createCard} from './card.js';

const addressElement = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    getActiveForm();
  })
  .setView({
    lat: 35.62605,
    lng: 139.77081,
  }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [52 / 2, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.62605,
    lng: 139.77081,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

addressElement.value = '35.62605, 139.77081';

mainMarker.on('move', (evt) => {
  addressElement.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

createOffers().forEach((card) => {
  const lat = card.location.x;
  const lng = card.location.y;

  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [52, 52],
    iconAnchor: [52 / 2, 52],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: pinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      createCard(card),
      {
        keepInView: true,
      },
    );
});
