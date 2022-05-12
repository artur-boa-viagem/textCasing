//carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const path = require('path')
    const soap = require('soap')
    const url = "https://www.dataaccess.com/webservicesserver/TextCasing.wso?WSDL"
    //const mongoose = require('mongoose')

//configurações
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    //handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Public
    app.use(express.static(path.join(__dirname, "public")))
//rotas

app.get("/", (req, res) => {
    res.render("admin/index")
})

app.post("/seila", (req,res)=>{
    //console.log(req.body.func)
    if (req.body.func == 1){
        res.redirect("/TitleCaseWordsWithToken")
    }
    if (req.body.func == 2 ){
        res.redirect("/InvertStringCase")
    }
    if (req.body.func == 3){
        res.redirect("/InvertCaseFirstAdjustStringToPrevious")
    }
    if (req.body.func == 4){
        res.redirect("/InvertCaseFirstAdjustStringToCurrent")
    }
    if (req.body.func == 5){
        res.redirect("/AllUppercaseWithToken")
    }
    if (req.body.func == 6){
        res.redirect("/AllLowercaseWithToken")
    }
    if (req.body.func == 7){
        res.redirect("/UppercaseWordsWithToken")
    }
    if (req.body.func == 8){
        res.redirect("/LowercaseWordsWithToken")
    }
})

app.get("/TitleCaseWordsWithToken", (req, res) => {
    res.render("admin/func1")
})

app.post("/TitleCaseWordsWithToken/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.TitleCaseWordsWithToken({
                sText: req.body.sText,
                sToken: req.body.sToken
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func1", {resposta: resposta})
                }
            })
        }
    })
})

app.get("/InvertStringCase", (req, res) => {
    res.render("admin/func2")
})

app.post("/InvertStringCase/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.InvertStringCase({
                sAString: req.body.sAString
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func2", {resposta: resposta})
                }
            })
        }
    })
})

app.get("/InvertCaseFirstAdjustStringToPrevious", (req, res) => {
    res.render("admin/func3")
})

app.post("/InvertCaseFirstAdjustStringToPrevious/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.InvertCaseFirstAdjustStringToPrevious({
                sAString: req.body.sAString
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func3", {resposta: resposta})
                }
            })
        }
    })
})

app.get("/InvertCaseFirstAdjustStringToCurrent", (req, res) => {
    res.render("admin/func4")
})

app.post("/InvertCaseFirstAdjustStringToCurrent/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.InvertCaseFirstAdjustStringToCurrent({
                sAString: req.body.sAString
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func4", {resposta: resposta})
                }
            })
        }
    })
})

app.get("/AllUppercaseWithToken", (req, res) => {
    res.render("admin/func5")
})

app.post("/AllUppercaseWithToken/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.AllUppercaseWithToken({
                sAString: req.body.sAString,
                sToken: req.body.sToken
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func5", {resposta: resposta})
                }
            })
        }
    })
})

app.get("/AllLowercaseWithToken", (req, res) => {
    res.render("admin/func6")
})

app.post("/AllLowercaseWithToken/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.AllLowercaseWithToken({
                sAString: req.body.sAString,
                sToken: req.body.sToken
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func6", {resposta: resposta})
                }
            })
        }
    })
})

app.get("/UppercaseWordsWithToken", (req, res) => {
    res.render("admin/func7")
})

app.post("/UppercaseWordsWithToken/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.UppercaseWordsWithToken({
                sAString: req.body.sAString,
                sToken: req.body.sToken
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func7", {resposta: resposta})
                }
            })
        }
    })
})

app.get("/LowercaseWordsWithToken", (req, res) => {
    res.render("admin/func8")
})

app.post("/LowercaseWordsWithToken/resposta", (req, res) => {
    soap.createClient(url, (err, client) => {
        if(err){
            console.log("erro: " + err)
            res.render("/")
        }
        else{
            let resposta = []
            console.log("ok")
            client.LowercaseWordsWithToken({
                sAString: req.body.sAString,
                sToken: req.body.sToken
            }, (err, resultado) => {
                if (err){
                    console.log("erro: " + err)
                    res.render("/")
                }
                else{
                    console.log(resultado)
                    resposta.push({texto: resultado})
                    //console.log(resultado)
                    res.render("admin/func8", {resposta: resposta})
                }
            })
        }
    })
})

//outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("servidor rodando!")
})