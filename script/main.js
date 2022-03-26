const express = require('express')

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json({ message: "Hello From Express Ap" });
});

app.get('/hello', (req, res)=>{
  res.send('heel')
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});