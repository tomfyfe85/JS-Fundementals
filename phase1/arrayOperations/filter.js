 const nums = ['1763687364', '4763687363', '7867867862', 'AAAA#####AAAA#87@768767382672', '4763687363', '4763687363'];

const tenOrLess = (string) => {
if (string.length <= 10){
  return(true);
} else {
  return(false)
}
}

const underTen = nums.filter(tenOrLess)

console.log(underTen)
 

// module.exports = tenOrLess 
