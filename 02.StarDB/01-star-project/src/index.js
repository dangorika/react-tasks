const getResource = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, received ${response.status}`);
  }
  const result = await response.json();

  return result;
};

getResource('https://swapi.dev/api/people/134243/')
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });