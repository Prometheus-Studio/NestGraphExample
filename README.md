## Generated readme below

### Install & run
1) npm install
2) nest start

### Queries 
#### rest: 
``` 
GET
localhost:3000/rest/pagination?pageSize=10&pageNumber=1
localhost:3000/rest/byPosition?position=1
localhost:3000/rest/byYear?year=1984
localhost:3000/rest/ (get all)
```

```
POST localhost:3000/rest/ 
{
    "position": 251,
    "title": "Трое из Простоквашино",
    "year": 1989,
    "rating": 9.2
  }
```

```
PUT localhost:3000/rest/ 
{
	"oldPosition": 1,
	"film": {
    "position": 1,
    "title": "Какой-то фильм",
    "year": 0,
    "rating": 9.2
  }
}
```

``` 
DELETE localhost:3000/rest/byPosition?position=2 
```

#### GRAPH
``` 
GET
localhost:3000/graphql?query={findByPosition(position: "1"){title,position,year,rating}}
localhost:3000/graphql?query={findByYear(year: "1984"){title,position,year,rating}}
localhost:3000/graphql?query={getPage(pageSize: "10", pageNumber: "1"){title,position,year,rating}}
localhost:3000/graphql?query={filter(filter: {minYear: 1999, minRating: 8, namePart: "Dark"}){title,position,year,rating}}
```

```
POST localhost:3000/graphql
mutation {
  addItem(
    item:
    {
      title:"Трое из Простоквашино",
      position:251,
      year:1989,
      rating:7
    }
  )
  {position,title,year,rating}
}
```

```
POST localhost:3000/graphql
mutation {
  updateItem(
    item: {
      oldPosition: 1,
      film:
      {
        title:"Трое из Простоквашино",
        position:1,
        year:1989,
        rating:7
      } 
    }    
  )
  {position,title,year,rating}
}
```

```
POST localhost:3000/graphql
mutation {
  deleteByPosition(
    item: {
      position: 2     
    }    
  )
  {position,title,year,rating}
}
```


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
