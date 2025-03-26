import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'HR Specialist' },
];

app.get('/employees',(req, res) => {
  res.json(employees)
})

app.get('/employees/:id',(req, res) => {
  //console.log(req.params.id)

  res.json(employees.find(x => x.id === parseInt(req.params.id)).name)

})

app.listen(process.env.PORT || 3000, () => {
  console.log('Service is running');
});
