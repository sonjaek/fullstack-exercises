// Express is middleware -> used for handling request and response objects
const express = require('express')
const app = express()

// Add custom middleware to log request data on every request:
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

// Add custom middleware to handle requests to undefined endpoints:
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// JSON parser middleware takes raw data from a request object, parses it to JSON & places it in the request's body field
app.use(express.json())
// The logger middleware has to be taken into use AFTER the JSON parser so that request.body gets initialized early enough
app.use(requestLogger)

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>') // Express sets Content-Type to be text/html
})

app.get('/api/notes', (req, res) => {
  res.json(notes) // Express sets Content-Type to be application/json
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end() // .end() = return no data
  }
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id)) // spread syntax: array -> individual numbers
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

// Middleware that only handles requests not handled by any route should be taken into use AFTER the routes:
app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})