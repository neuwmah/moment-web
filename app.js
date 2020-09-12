//loading modules
const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
const admin = require("./src/routes/admin")
const mongoose = require("mongoose")
const session = require("express-session")
const flash = require("connect-flash")
require("./src/models/New")
const New = mongoose.model("news")
var moment = require('moment')
const m = moment()
const Promise = require("bluebird")
app.set('views', 'src/views')

//session/flash
app.use(session({
    secret: "momentcraft",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

//middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
})

//body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

//mongoose
mongoose.connect("mongodb://localhost/moment", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true
}).then(() => {
    console.log("MongoDB connection success!")
}).catch((e) => {
    console.log("ERROR: " + e)
})

//public
app.use(express.static(path.join(__dirname, "src/public")))

//routes
app.use("/admin", admin)

app.get("/", async (req, res) => {
    spotlights = {
        first: null,
        second: null,
        third: null
    }
    New.findOne().where('spotlight').equals(1).lean().then((spotlight1) => {
        spotlights.first = spotlight1
    }).catch((e) => {
        console.log("ERROR: " + e)
    })
    New.findOne().where('spotlight').equals(2).lean().then((spotlight2) => {
        spotlights.second = spotlight2
    }).catch((e) => {
        console.log("ERROR: " + e)
    })
    New.findOne().where('spotlight').equals(3).lean().then((spotlight3) => {
        spotlights.third = spotlight3
    }).catch((e) => {
        console.log("ERROR: " + e)
    })
    await New.find().sort({ date: "desc" }).lean().then((news) => {
        Promise.each(news, function(news) {
            news.date = moment(news.date).lang('pt-br').format("d [de] MMM. YYYY")
        }).then(function(news) {
            res.render("index", { news: news, first: spotlights.first, second: spotlights.second, third: spotlights.third })
        })
    }).catch((e) => {
        console.log("ERROR: " + e)
    })
})

app.get("/novidades", (req, res) => {
    res.redirect("/.")
})

app.get("/novidades/:slug", (req, res) => {
    New.findOne({ slug: req.params.slug }).lean().then((newFind) => {
        (newFind) ? newFind.date = moment(newFind.date).lang('pt-br').format("d [de] MMM. YYYY") : null
        newFind ? res.render("news", { new: newFind }) : res.redirect("/")
    }).catch((e) => {
        console.log("ERROR: " + e)
    })
})

//etc
const port = 3000

app.listen(port, () => {
    //console.clear()
    console.log("Server running on http://localhost:" + port)
})