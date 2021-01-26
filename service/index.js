// import express from 'express'
const express = require("express");
const app = express();
const port = 4000;

const logger = (req, res, next) => {
  console.log("Logger was triggered.");
  next()
}

app.use(logger);

// Every one of these app.METHOD calls is defining middleware
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Organize these into routes with routers for organization!
// app.use('/api/v1', routerThingy)

// Get all products
app.get('/api/v1/products', (req, res) => {
  res.sendStatus(501);
});

// Get a single product by id
app.get('/api/v1/products/:id', (req, res) => {
  res.sendStatus(501);
});

// Create a new product
app.post('/api/v1/products', (req, res) => {
  res.sendStatus(501);
});

// Update an existing product
app.put('/api/v1/products/:id', (req, res) => {
  res.sendStatus(501);
});

// Delete an existing product
app.delete('/api/v1/products/:id', (req, res) => {
  res.sendStatus(501);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});