
const getRandInteger = (from, to) => {
  if (from < 0 || to <= from) {
    throw new RangeError('Числа не подходят.');
  }
  return Math.round(from - 0.5 + Math.random() * (to - from + 1));
};
try {
  getRandInteger(100, 300);
}
catch(error)
{
  if(error instanceof RangeError) {
    // ошибка
  }
}

const getRandNumber = (from, to, precision) => {
  if (from < 0 || to <= from) {
    throw new RangeError('Числа не подходят.');
  }
  return Number((Math.random() * (to - from) + from).toFixed(precision));
};
try {
  getRandNumber(1.5, 2.9, 4);
}
catch(error)
{
  if(error instanceof RangeError) {
    // ошибка
  }
}

const ADVERT_COUNT = 10;
const ADVERT_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES_ADVERT = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS_ADVERT = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const RANDOM_ADVERTS = [];

const getAuthorAvatar = (id) => {
  const userAvatarID = String(id).padStart(2,0);
  return `img/avatars/user${userAvatarID}.png`;
};

const getRandomItemsInArray = (randomLength) => {
  const maxLength = randomLength.length;
  const lengthOfArray = getRandInteger(1, maxLength);
  const items = [];
  for(let i = 0; i < lengthOfArray; i++) {
    const randomIndex = getRandInteger(0, maxLength - 1);
    const randomElement = randomLength[randomIndex];
    if (!items.includes(randomElement)) {
      items.push(randomElement);
    }
  }
  return items;
};

const getRandomAdverts = (ADVERT_COUNT2) => {
  for(let j = 0; j < ADVERT_COUNT2; j++) {
    const lat = getRandNumber(35.65000, 35.70000, 5);
    const lng = getRandNumber(139.70000, 139.80000, 5);

    const adverts = {
      author: {
        avatar: getAuthorAvatar(j+1),
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
        features: getRandomItemsInArray(FEATURES_ADVERT),
        description: 'Описание объекта объявления',
        photos: getRandomItemsInArray(PHOTOS_ADVERT),
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
// const FINAL_ADVERTS = getRandomAdverts(ADVERT_COUNT);
