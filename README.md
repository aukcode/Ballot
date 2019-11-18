## What is this

This is an app that allows an organization to hold general elections. It's intended use is while holding general assemblies and elections within these. An emphasis have been put on anonymity. Names are associated with polls only, not individual answers.

## What is it made with

#### Front-end
>./client
- UI: TailwindCSS
- Typescript
- React & React Hooks
- React Router

#### Back-end
>./server
- NodeJS & Express
- MongoDB
- JWT and bcrypt library for security
- Hapi/Joi for data validation

## Install and run

cd into both server and client. Then, Run:

`$ npm install`

To run the app locally, run:

`$ npm start`

In order to make the backend work, you must connect a database. The .env file with database secret is not included. 
This file must contain the db connect line "DB_CONNECT={your stuff here}" and "TOKEN_SECRET={random stuff here}".
Go to [cloud.mongodb.com](http://cloud.mongodb.com) to learn how to do this.

# Development Notes

## Further dev?

- Sentry (use Capra consulting sentry app?) They also had something for docker
  - [sentry-utils-js](https://github.com/capraconsulting/sentry-utils-js)
- HTTP calls with Axios

## Pages

Landing page

Login page / modal

Admin page for creating and managing elections/voting sessions

Report modal

Answer page for answering questions

## Implementation

Login and session management with JWT and joi validation ([Medium article](https://medium.com/@rossbulat/joi-for-node-exploring-javascript-object-schema-validation-50dd4b8e1b0f))

A pin is made for each voting session. Users can join by providing this pin. Only when active.

Users can log in or just provide a pseudonym to join a session

## Security and GDPR concerns

1. User passwords should be stored as salted hashes.
2. Names should only be associated with polls, not answers
3. OWASP Top 10 should be consulted
4. There should be a mechanism for deleting old data

## Estimation

**Week 1:** ~~Set up the monorepo~~, ~~commitizen~~ ~~(+icons?)~~, ~~lerna~~, ~~react router,~~ ~~prettier~~, ~~pretty-quick~~, ~~husky~~, ~~deployment~~, ~~CI~~, ~~mongo~~, ~~mongoose~~, ~~add~~ ~~petterive~~

**Week 2:** ~~Implement session management with JWT~~. ~~Design the general page layout.~~

**Week 3:** ~~Implement the create page with poll management~~

**Week 4:** Implement joining and voting/answering. Setup testing. ~~TSLint~~.

**Week 5:** Create a component library in the monorepo. Make Button, Card and essential components

**Week 6:** ~~README.md~~, testing and deployment

**Week 7:** Finalising. Fixing.
