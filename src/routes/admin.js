const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/New")
const New = mongoose.model("news")
var moment = require('moment')

router.get("/", (req, res) => {
    res.render("admin/index")
})

router.get("/novidades", (req, res) => {
    New.find().sort({ date: "desc" }).lean().then((news) => {
        res.render("admin/news", { news: news })
    }).catch((e) => {
        req.flash("error_msg", "Erro ao listar as novidades.")
        res.redirect("/admin")
    })
})

router.get("/novidades/adicionar", (req, res) => {
    res.render("admin/news-add")
})

router.post("/novidades/adicionar", (req, res) => {
    var errors = []

    // authenticate author
    !req.body.author || typeof req.body.author == undefined || req.body.author == null ? errors.push({ text: "Autor inválido." }) : null
    // authenticate title
    !req.body.title || typeof req.body.title == undefined || req.body.title == null ? errors.push({ text: "Título inválido." }) : null
    // authenticate subtitle
    !req.body.subtitle || typeof req.body.subtitle == undefined || req.body.subtitle == null ? errors.push({ text: "Subtítulo inválido." }) : null
    // authenticate content
    !req.body.content || typeof req.body.content == undefined || req.body.content == null ? errors.push({ text: "Conteúdo inválido." }) : null
    // authenticate slug
    !req.body.slug || typeof req.body.slug == undefined || req.body.slug == null ? errors.push({ text: "Slug inválida." }) : null
    // authenticate spotlight
    req.body.spotlight > 0 && (!req.body.backgroundImage || !req.body.spotlightTitle) ? errors.push({ text: "Para destacar uma novidade é necessário preencher todos os campos." }) : null

    if (errors.length > 0) {
        res.render("admin/news-add", { errors: errors })
    } else {
        if (req.body.spotlight > 0) {
            New.findOne({ spotlight: req.body.spotlight }).then((newSpotlight) => {
                if (newSpotlight) {
                    newSpotlight.spotlight = 0

                    newSpotlight.save().then(() => {
                        console.log("Novidade em destaque substituída com sucesso!")
                    }).catch((e) => {
                        req.flash("error_msg", "Erro ao substituir novidade em destaque.")
                        res.redirect("/admin/novidades")
                    })
                }
            }).catch((e) => {
                req.flash("error_msg", "Erro ao substituir novidade em destaque.")
                res.redirect("/admin/novidades")
            })
        }

        const newNew = {
            author: req.body.author,
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content,
            slug: req.body.slug,
            spotlight: req.body.spotlight,
            spotlightTitle: req.body.spotlightTitle,
            backgroundImage: req.body.backgroundImage
        }

        new New(newNew).save().then(() => {
            req.flash("success_msg", "Novidade adicionada com sucesso!")
            res.redirect("/admin/novidades")
        }).catch((e) => {
            req.flash("error_msg", "Erro ao adicionar a novidade.")
            console.log("ERROR: " + e)
        })
    }
})

router.get("/novidades/editar/:id", (req, res) => {
    New.findOne({ _id: req.params.id }).lean().then((newFind) => {
        res.render("admin/news-edit", { new: newFind })
    }).catch((e) => {
        req.flash("error_msg", "Novidade não encontrada.")
        res.redirect("/admin/novidades")
    })
})

router.post("/novidades/editar", (req, res) => {
    var errors = []

    !req.body.author || typeof req.body.author == undefined || req.body.author == null ? errors.push({ text: "Autor inválido." }) : null
    !req.body.title || typeof req.body.title == undefined || req.body.title == null ? errors.push({ text: "Título inválido." }) : null
    !req.body.subtitle || typeof req.body.subtitle == undefined || req.body.subtitle == null ? errors.push({ text: "Subtítulo inválido." }) : null
    !req.body.content || typeof req.body.content == undefined || req.body.content == null ? errors.push({ text: "Conteúdo inválido." }) : null
    !req.body.slug || typeof req.body.slug == undefined || req.body.slug == null ? errors.push({ text: "Slug inválida." }) : null

    if (errors.length > 0) {
        req.flash("error_msg", "Erro ao editar a novidade. Certifique-se de preencher todos os campos!")
        res.redirect("/admin/novidades")
    } else {
        New.findOne({ _id: req.body.id }).then((newFind) => {
            newFind.author = req.body.author
            newFind.title = req.body.title
            newFind.subtitle = req.body.title
            newFind.content = req.body.content
            newFind.slug = req.body.slug

            newFind.save().then(() => {
                req.flash("success_msg", "Novidade editada com sucesso!")
                res.redirect("/admin/novidades")
            }).catch((e) => {
                req.flash("error_msg", "Erro ao salvar edição.")
                res.redirect("/admin/novidades")
            })
        }).catch((e) => {
            req.flash("error_msg", "Erro ao editar a novidade.")
            res.redirect("/admin/novidades")
        })
    }
})

router.post("/novidades/deletar", (req, res) => {
    New.remove({ _id: req.body.id }).then(() => {
        req.flash("success_msg", "Novidade deletada com sucesso!")
        res.redirect("/admin/novidades")
    }).catch((e) => {
        req.flash("error_msg", "Erro ao deletar novidade.")
        res.redirect("/admin/novidades")
    })
})

router.get("/banimentos", (req, res) => {
    res.render("admin/banimentos")
})

router.get("/loja", (req, res) => {
    res.render("admin/loja")
})

module.exports = router