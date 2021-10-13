function getRandInteger(from, to) {
  if (from < 0 || to <= from) {
    throw new RangeError('Числа не подходят.');
  }
  return Math.round(from - 0.5 + Math.random() * (to - from + 1));
}
try {
  getRandInteger(100, 300);
}
catch(error)
{
  if(error instanceof RangeError) {
    // ошибка
  }
}

function getRandNumber(from, to, precision) {
  if (from < 0 || to <= from) {
    throw new RangeError('Числа не подходят.');
  }
  return Number((Math.random() * (to - from) + from).toFixed(precision));
}
try {
  getRandNumber(1.5, 2.9, 4);
}
catch(error)
{
  if(error instanceof RangeError) {
    // ошибка
  }
}


const finalArr = [];
const countObjects = 10;
const typesArray = [
	'palace', 
	'flat', 
	'house', 
	'bungalow', 
	'hotel'
];
const checkinTime = [
	'12:00', 
	'13:00', 
	'14:00'
];
const checkoutTime = [
	'12:00', 
	'13:00', 
	'14:00'
];
const featuresArray = [
	'wifi', 
	'dishwasher', 
	'parking', 
  'washer', 
	'elevator', 
	'conditioner',
];
const photosArray = [
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getAuthorAvatar(id) {
  const userAvatarID = String(++id).padStart(2,0);
  return `img/avatars/user${userAvatarID}.png`;
}

function getArray(randomLength) {
  const maxLength = randomLength.length;
  const lengthOfArray = getRandInteger(1, maxLength);
  const array = [];
  for(let foo = 0; foo < lengthOfArray; foo++) {
    const indexOfEl = getRandInteger(0, maxLength - 1);
    const el = randomLength[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

function getObjects () {

  for(let i = 0; i < countObjects; i++) {
    const lat = getRandNumber(35.65000, 35.70000, 5);
    const lng = getRandNumber(139.70000, 139.80000, 5);

    const offerObject = {
      author: {
        avatar: getAuthorAvatar(i),
      },
      offer: {
        title: 'Название объявления',
        adress: `${lat} ${lng}`,
        price: getRandInteger(1, 1000),
        type: typesArray[getRandInteger(0, 4)],
        rooms: getRandInteger(1, 5),
        guests: getRandInteger(1, 10),
        checkin: checkinTime[getRandInteger(0, 2)],
        checkout: checkoutTime[getRandInteger(0, 2)],
        features: getArray(featuresArray),
        description: 'Описание объекта объявления',
        photos: getArray(photosArray),
      },
			location: {
				lat: lat,
        lng: lng,
			}
    };
    finalArr.push(offerObject);
  }
}

getObjects();