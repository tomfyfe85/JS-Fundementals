const hello = () => {
  console.log("HI!");
};

const executeAfterDelay = (num, greetFunction) => {
  return setTimeout(() => {
    return greetFunction();
  }, num * 1000);
};

executeAfterDelay(5, hello);
