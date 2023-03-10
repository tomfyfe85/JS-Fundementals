const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
   console.log(true);
  } else { 
   console.log(false);
  }
}
module.exports = isValidLength