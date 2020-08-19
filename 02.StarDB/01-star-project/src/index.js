class SwapiService {
  _apiBase = 'https://swapi.dev/api/';
  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const result = await response.json();
    return result;
  }

  async getAllPeople() {
    const response = await this.getResource(`people/`);
    return response.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}/`);
  }

  async getAllPlanets() {
    const response = await this.getResource(`planets/`);
    return response.results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}/`);
  }

  async getAllStarships() {
    const response = await this.getResource(`starships/`);
    return response.results;
  }

  getStarship(id) {
    return this.getResource(`starships/${id}/`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople()
  .then(people => {
    people.forEach(person => {
      console.log(`Person name is: ${person.name}`);
    });
  });

swapi.getPerson(3)
  .then(person => {
    console.log(`Single person name is: ${person.name}`);
  });

swapi.getAllPlanets()
  .then(planets => {
    planets.forEach(planet => {
      console.log(`Planet name is: ${planet.name}`);
    });
  });

swapi.getPlanet(3)
  .then(planet => {
    console.log(`Single planet name is: ${planet.name}`);
  });

swapi.getAllStarships()
  .then(starships => {
    starships.forEach(starship => {
      console.log(`Starship name is: ${starship.name}`);
    });
  });

swapi.getStarship(3)
  .then(starship => {
    console.log(`Single starship name is: ${starship.name}`);
  });
