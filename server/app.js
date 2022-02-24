require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const { welcomeUser } = require('./middleware/midOrFeed');

const { PORT } = process.env || 3001;

// const indexRouter = require('./routes/indexRouter');
// const usersRouter = require('./routes/userRouter');
// const postsRouter = require('./routes/postRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'snovaisnova', // строка для шифрования сессии
    resave: false, // не пересохраняем сессию если не было изменений
    saveUninitialized: false, // не сохраняем сессию если она пустая
    cookie: { secure: false }, // не HTTPS
    name: 'login', // имя сессионной куки
    store: new FileStore(), // хранилище для куков - папка с файлами
  }),
);
// app.use(welcomeUser);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`server podnyat my capitan on port ${PORT}`);
});
