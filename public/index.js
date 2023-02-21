const express = require('express')
const fs = require('fs')


const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, html) => {
        if (err) {
            res.status(500).send('Something went wrong :)');
        }

        res.send(html)
    })
})

app.listen(process.env.PORT || 3000, () => console.log(`App avalible in http://localhost:3000`))