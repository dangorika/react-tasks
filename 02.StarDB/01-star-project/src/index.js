const getResource = async url => {
  const response = await fetch(url);
  const result = await response.json();

  return result;
};

getResource('https://swapi.dev/api/people/1/')
  .then(result => {
    console.log(result);
  });