# Apartment Rental App for Techstack
## Technologies
### Frontend
- React + TypeScript + Eslint + Prettier
### Backend
- NestJs + PostgreSQL + Sequelize
## Start the project
To start the project you should preferably use Docker.
### Docker startup
- go to starting directory
- ```docker compose up``` in console to start the project. All the necessary properties are located in .env file. 
- go to backend directory
- ```npx sequelize-cli db:seed:all``` to seed initial apartments
- now you can access frontend at ```localhost:3000``` and backend at ```localhost:3001```.
### No Docker startup
- provide a PostgreSQL db with similar configurations as in .env file
- go to backend directory
- ```npm run start:dev```
- ```npx sequelize-cli db:seed:all``` to seed initial apartments
- go to frontend directory
- ```npm run dev```
- now you can access frontend at ```localhost:3000``` and backend at ```localhost:3001```.
