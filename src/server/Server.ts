import express from 'express'

const server = express()

server.get('/', (req, res) => {
  return res.send(`process: {
    aa: Blob,
    cc: decodeURI
  }`)
})
export { server }