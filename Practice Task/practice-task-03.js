const jokeLoader = async () => {
  const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
  const data = await res.json();
  console.log(data.joke);
}

jokeLoader();
