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

