const express = require('express');
const path = require('path');
const tableData = require('./data/tableData');
const waitingList = require('./data/waitingListData');


const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes for html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/home.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '/public/reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '/public/tables.html')));

//routes for API


app.get('/api/tables', (req, res) => res.json(tableData));
app.get('/api/reserve', (req, res) => res.json(waitingList));

app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body
  
    console.log(newTable);
  
    // We then add the json the user sent to the character array
    tableData.push(newTable);
  
    // We then display the JSON to the users
    res.json(tableData);
  });


app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));
