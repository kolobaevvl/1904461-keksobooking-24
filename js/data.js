import {ADVERT_COUNT, ADVERT_TYPES, CHECKIN_TIME, CHECKOUT_TIME, FEATURES_ADVERT,
  PHOTOS_ADVERT, RANDOM_ADVERTS} from './js/constants.js';
import {getRandInteger, getRandNumber, getAuthorAvatar, mixItems} from './js/utils.js';

const getRandomAdverts = () => {
  for(let i = 0; i < ADVERT_COUNT; i++) {
    const lat = getRandNumber(35.65000, 35.70000, 5);
    const lng = getRandNumber(139.70000, 139.80000, 5);

    const adverts = {
      author: {
        avatar: getAuthorAvatar(i+1),
      },
      offer: {
        title: 'Название объявления',
        address: `${lat}, ${lng}`,
        price: getRandInteger(1, 1000),
        type: ADVERT_TYPES[getRandInteger(0, ADVERT_TYPES.length - 1)],
        rooms: getRandInteger(1, 5),
        guests: getRandInteger(1, 10),
        checkin: CHECKIN_TIME[getRandInteger(0, 2)],
        checkout: CHECKOUT_TIME[getRandInteger(0, 2)],
        features: mixItems(FEATURES_ADVERT),
        description: 'Описание объекта объявления',
        photos: mixItems(PHOTOS_ADVERT),
      },
      location: {
        lat,
        lng,
      },
    };
    RANDOM_ADVERTS.push(adverts);
  }
  return RANDOM_ADVERTS;
};

getRandomAdverts(ADVERT_COUNT);

export {getRandomAdverts};
