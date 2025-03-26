import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

let employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'HR Specialist' },
];

app.get('/employees',(_, res) => {
  res.json(employees)
})

app.get('/employees/:id',(req, res) => {
  // filter
  const emp = employees.find(x => x.id === parseInt(req.params.id))
  if(!emp){
    return res.status(404).json({ message: 'Employee not found' });
  }
  res.status(200).json(emp);
})

app.post('/employees', (req, res) => {
  let max
  const {name , position} = req.body;

  if(!name || !position){
    return res.status(404).json({ message: 'Details Incomplete' });
  }

  if(employees.length === 0){
    max = 0
  }else{
    max = Math.max(...employees.map(o=>o.id));
  }

  
  employees.push({id: max + 1, name: name, position: position})
  res.status(200).json(employees);
})


app.put('/employees/:id', (req, res) => {

  const {name , position} = req.body;

  const emp = employees.find(x => x.id === parseInt(req.params.id))

  if(!emp){
    return res.status(404).json({ message: 'Employee not found' });
  }else if(!name && !position){
    return res.status(404).json({ message: 'Details Incomplete' });
  }


  if(name){
    emp.name = name;
  }
  
  if(position){
    emp.position = position;
  }

  res.status(200).json(employees);
})

app.delete('/employees/:id', (req, res) => {
  
  const emp = employees.splice(employees.findIndex(x => x.id === parseInt(req.params.id)), 1)

  if(!emp){
    return res.status(404).json({ message: 'Employee not found' });
  }

  res.status(200).json(employees);

})




app.listen(process.env.PORT || 3000, () => {
  console.log('Service is running');
});
