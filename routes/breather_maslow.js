const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/', (request, response) => {
  queries.getAll()
  .then(function(maslow){
    response.json(maslow)
  })
})


module.exports = router

// queries.getAll()
// .then(function(maslow){
//   response.json(maslow)
// })
