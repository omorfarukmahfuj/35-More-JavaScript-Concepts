const delayedMessage = setTimeout(() => {
  console.log('This is a delayed message');
}, 5000);

const delayedGreeting = (name, delayTime) => {
  setTimeout(() => {
    console.log(`Hi, ${name}!`)
  }, delayTime)
}

delayedGreeting('Omor', 7000);