const addToBatch = (array, num) => {
  if (array.length > 5) {
    console.log(array);
  } else { 
   const NewArray = array.concat(num);
    console.log(NewArray);
  }
}

module.exports = addToBatch 
