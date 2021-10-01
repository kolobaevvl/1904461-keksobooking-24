function getRandIntFromRange(from, to) {
  if (from < 0 || to <= from) {
	  return false;
  }
  let randIntFromRange = from - 0.5 + Math.random() * (to - from + 1);
  return Math.round(randIntFromRange);
};


function getRandIntWithPrecision(from, to, precision) {
  if (from < 0 || to <= from) {
    return false;
  }
  let randIntWithPrecision = Number((Math.random() * (to - from) + from).toFixed(precision));
  return (randIntWithPrecision);
};
