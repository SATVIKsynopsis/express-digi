import express from "express";

const app = express()

const port = 3001

app.use(express.json())


let codeData = []
let nextID = 1

// add a new code
app.post('/code', (req, res) => {
   
    	const {name, price} = req.body
        const newCode= {id: nextID++, name, price}
        codeData.push(newCode)
        res.status(201).send(newCode)
})

// get all code 
app.get('/code', (req, res) => {
    res.status(200).send(codeData)
})

// get a code with id
app.get('/code/:id', (req, res) => {
    const code = codeData.find(t => t.id === parseInt(req.params.id))

    if (!code){
        return res.status(404).send('Code not found')
         
    }
    res.status(200).send(code)
        
    
})


// update code
app.put('/code/:id', (req, res) => {
    const code = codeData.find(t => t.id === parseInt(req.params.id))
    if (!code){
        return res.status(404).send('Code not found')
    }
    const {name, price} = req.body
    code.name = name
    code.price = price
    res.status(200).send(code)
})

// delete a code
app.delete('/code/:id', (req, res) => {
    codeData.findIndex(t => t.id === parseInt(req.params.id))

    if (index === -1){
        return res.status(404).send('Code not found')
    } 
    codeData.splice(index, 1)
    return res.status(204).send('deleted')
})






app.listen(port, () => {
    console.log(`Server is listening at port: ${port}...`)
})