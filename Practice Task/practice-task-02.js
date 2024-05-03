const tellJoke = (funnyMessage, stopSecond) => {

  const intervalId = setInterval(() => {
    console.log(funnyMessage);
  }, 2000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, stopSecond)

}

tellJoke("Why don't scientists trust atoms? Because they make up everything", 10000);