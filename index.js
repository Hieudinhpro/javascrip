const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return res.send('Hello World! sahjba aad aadaf asad abdhajdahcc abdahjbac hieu dinh pro')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})