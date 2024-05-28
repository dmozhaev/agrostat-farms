# AgroStat

Full-stack web project written in Typescript (Node.js / React). Note: the project was done in 2022.

![agrostat](https://github.com/dmozhaev/agrostat-farms/assets/35990664/1381508e-284e-4eba-b3ea-f5170bb2f655)

## Database

Create DB user manually, e.g. via pgAdmin:

- Login/Group roles -> Create new
- Username: farms
- Password: farms
- Privileges: tick all privileges ON
- Create manually database named farms. Owner should be user named farms (created in previous steps)
- Copy-paste queries manually from createTables.sql file to query editor and run those queries. There should be 4 empty tables created.

## Backend

```bash
cd <project root>/backend
npm install
nodemon index.ts
```

## Frontend

```bash
cd <project root>/frontend
npm install
npm start
```

## Dockerized app

```bash
docker-compose up -d
docker-compose down
```

## Integration tests

```bash
cd <project root>/backend
npm run test
```

## End-to-end tests

```bash
cd <project root>/e2e
npm install
.\node_modules\.bin\cypress open
```
