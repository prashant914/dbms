const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const app = express();

//Routers
const indexRouter = require("./routes/index");
const galleryRouter = require("./routes/gallery");
const aboutRouter = require("./routes/about");
const blogRouter = require("./routes/blog");
const contactRouter = require("./routes/contact");
const signUpRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const homePageRouter = require("./routes/homePage");
const adminRouter = require("./routes/admin");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/home", indexRouter);
app.use("/gallery", galleryRouter);
app.use("/aboutWildlife", aboutRouter);
app.use("/blogs", blogRouter);
app.use("/contactUs", contactRouter);
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/homePage", homePageRouter);
app.use("/admin", adminRouter);  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function(){
  console.log("Listening on " + port);
});