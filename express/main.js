import express from 'express';
import usersRouter from './routes/users.js'
import cookieParser from 'cookie-parser';
import assignment from './routes/assignment1.js';
import session from 'express-session';
import logging from './middleware/loger.js';
import allErrorHandler from './middleware/allErrorHandler.js';
import cookieRouter from './routes/cookies_tutorial.js'; // Make sure this path is correct

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('ashna123'));

app.use(session({
  secret: "ashna123",
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 60000 * 5,
  }
}));

app.use(logging);

app.use('/', assignment);
app.use('/cookies', cookieRouter); // Register cookieRouter here
app.use('/users',usersRouter)
app.use(allErrorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
