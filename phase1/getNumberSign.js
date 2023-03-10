const getNumberSign = (number) => {
  if (number === 0){
    console.log('zero');
  } else if (number < 0){
    console.log('negative');
  } else { 
    console.log('positive');
  }
}

module.exports = getNumberSign;