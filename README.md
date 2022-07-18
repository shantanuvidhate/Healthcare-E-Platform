
# Healthcare E Platform
This is a web application used to book the appointments, emergency booking, bed status availability checking and payment transactions.

## Problem Statement
WHO Claimed that over 1.4 million people world- wide suffer from infectious complications acquired in hospital. As we see the long queues for appointment booking in the hospitals it can lead to the communicable viral diseases. This application works on queue reduction policy by booking appointment online hassle free. This can also be used to book emergency bookings and payment transaction.
## Features

- Appointment booking.
- Emergency Booking using Geolocation API.
- Book Appointment Specialist wise.
- Bed status Availability.
- Payment Transaction using Unified payment Interface.
- Storing the patients information in MongoDB database.


## Tech Stack

**Client:** HTML, CSS, JavaScript, Bootstrap

**Server:** Node, Express

**Database:** MongoDB (Mongo Shell, MongoDB Compass)


## Run Locally

Clone the project

```bash
  git clone https://github.com/shantanuvidhate/Healthcare-E-Platform
```

Go to the project directory

```bash
  cd <app.js directory>
```

Install dependencies

```bash
  npm install nodemon --save-dev
  npm install express --save
  npm install mongoose --save
  npm install body-parser --save
```

Start the server (Localhost:3000)

```bash
  node app.js
```
Start the Database server (in each seperate terminal)

```bash
mongod
mongo
```


## Screenshots
Home page with image Carousel

![App Screenshot](https://github.com/shantanuvidhate/Healthcare-E-Platform/blob/master/Screenshots/S1.PNG)

Specialist options cards

![App Screenshot](https://github.com/shantanuvidhate/Healthcare-E-Platform/blob/master/Screenshots/S3.PNG)

Appointment Booking Form

![App Screenshot](https://github.com/shantanuvidhate/Healthcare-E-Platform/blob/master/Screenshots/S4.PNG)

Database

![App Screenshot](https://github.com/shantanuvidhate/Healthcare-E-Platform/blob/master/Screenshots/S6.PNG)

## License

[MIT](https://choosealicense.com/licenses/mit/)

