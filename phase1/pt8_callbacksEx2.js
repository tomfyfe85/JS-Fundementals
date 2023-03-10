const printHello = () => {
  console.log('Hello')
}

const executeAfterDelay = (time, cb) => {
  setTimeout(cb, time * 1000); 
}

executeAfterDelay(5, printHello)