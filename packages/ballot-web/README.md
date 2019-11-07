## What is this

## What is it made with

## Install and run

# NOTES

## Further dev

- Sentry (use Capra consulting sentry app?) They also had something for docker
  - [sentry-utils-js](https://github.com/capraconsulting/sentry-utils-js)

## Pages

Landing page

Login page / modal

Admin page for creating and managing elections/voting sessions

Report modal

Answer page for answering questions

## Implementation

Login and session management with JWT and joi validation ([https://medium.com/@rossbulat/joi-for-node-exploring-javascript-object-schema-validation-50dd4b8e1b0f](https://medium.com/@rossbulat/joi-for-node-exploring-javascript-object-schema-validation-50dd4b8e1b0f))

A pin is made for each voting session. Users can join by providing this pin. Only when active.

Users can log in or just provide a pseudonym to join a session

## Security and GDPR concerns

User passwords should be stored as salted hashes.

Names should only be associated with polls, not answers

OWASP Top 10 should be consulted

## Estimation

**Week 1:** ~~Set up the monorepo~~, ~~commitizen~~+scope(+icons?), ~~lerna~~, ~~react router,~~ ~~prettier~~, ~~pretty-quick~~, ~~husky~~, ~~deployment~~, ~~CI~~, ~~mongo~~, ~~mongoose~~, ~~add~~ ~~petterive~~

**Week 2:** ~~Implement session management with JWT~~. ~~Design the general page layout.~~

**Week 3:** Implement the create page with poll management

**Week 4:** Implement joining and voting/answering. Setup testing. TSLint.

**Week 5:** Create a component library in the monorepo. Make Button, Card and essential components

**Week 6:** README.md, testing and deployment

**Week 7:** Finalising. Fixing.
