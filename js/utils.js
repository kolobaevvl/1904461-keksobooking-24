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

const getAuthorAvatar = (id) => {
  const userAvatarID = String(id).padStart(2,0);
  return `img/avatars/user${userAvatarID}.png`;
};

const mixItems = (randomLength) => {
  const maxLength = randomLength.length;
  const lengthOfArray = getRandInteger(1, maxLength);
  const newMixItems = [];
  for(let i = 0; i < lengthOfArray; i++) {
    const randomIndex = getRandInteger(0, maxLength - 1);
    const randomElement = randomLength[randomIndex];
    if (!newMixItems.includes(randomElement)) {
      newMixItems.push(randomElement);
    }
  }
  return newMixItems;
};

export {getRandInteger, getRandNumber, getAuthorAvatar, mixItems};
