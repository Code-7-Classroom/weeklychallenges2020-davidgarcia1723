let express = require('express');

let app = express();

let data = require('./public/employees.json');

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

app.get('/employees', (req, res) => {
    
    if(!data){
        res.status(404).send('These are not the employees you are looking for.')
    }

    res.send(data);
})

app.get('/employees/:id', function(req,res) {
    const sData = data.employees.find(function(employee){
        console.log(employee.id);

        return parseInt(req.params.id) === employee.id;
    });

    if(!sData){
        res.status(404).send('These are not the employees you are looking for.')
    }

    res.send(sData);
})
