const data = require('./data.json')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

router.get('/posts', (req, res) => {
    //devolvemos todos los post
    res.json(data)

})

router.get('/posts/:id', (req, res) => {
    // TÚ CÓDIGO VA AQUÍ
    const { id } =  req.params
    // 'data' necesitamos sacar el objeto que haga match con su id con el dado en la url
    console.log(typeof id)
    const post = data.filter((p) => {
        //filtramos por esta condicion
        return p.id === parseInt(id,10)
    })[0]

    //comprobamos si es que hay algun dato filtrado
    if(typeof post === 'undefined') {
        res.status(404).json({})
        return
    }

    //devolvemos solo un post filtrado
    res.json(post)
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)

