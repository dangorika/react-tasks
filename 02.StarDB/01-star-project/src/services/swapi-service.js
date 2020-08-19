export default class SwapiService {
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
    return response.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const response = await this.getResource(`planets/`);
    return response.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const response = await this.getResource(`starships/`);
    return response.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractId(planet) {
    const idRegExp = /\/([0-9])*\/$/;
    return planet.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  }
  
}

// const swapi = new SwapiService();

// swapi.getAllPeople()
//   .then(people => {
//     people.forEach(person => {
//       console.log(`Person name is: ${person.name}`);
//     });
//   });

// swapi.getPerson(3)
//   .then(person => {
//     console.log(`Single person name is: ${person.name}`);
//   });

// swapi.getAllPlanets()
//   .then(planets => {
//     planets.forEach(planet => {
//       console.log(`Planet name is: ${planet.name}`);
//     });
//   });

// swapi.getPlanet(3)
//   .then(planet => {
//     console.log(`Single planet name is: ${planet.name}`);
//   });

// swapi.getAllStarships()
//   .then(starships => {
//     starships.forEach(starship => {
//       console.log(`Starship name is: ${starship.name}`);
//     });
//   });

// swapi.getStarship(3)
//   .then(starship => {
//     console.log(`Single starship name is: ${starship.name}`);
//   });
