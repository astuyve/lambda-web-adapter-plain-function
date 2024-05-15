const staticInitTime = Date.now();
const express = require('express')
const app = express()
const port = process.env['PORT'] || 8080
let isColdStart = true

app.get('/health', (_req, res) => {
  res.send('OK')
})

app.get('/', (_req, res) => {
  let coldStartResult = false
  if (isColdStart) {
    coldStartResult = true
    isColdStart = false
  }
  const handlerRunTime = Date.now();
  const resp = {
    handlerRunTime,
    staticInitTime,
    coldStartResult,
    processUptime: process.uptime(),
  }

    res.send(resp)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
