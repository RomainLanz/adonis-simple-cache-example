'use strict'

const cache = require('../../cache')

class CacheController {
  value ({ params }) {
    return cache.get(params.key)
  }

  has ({ params }) {
    return cache.has(params.key)
  }

  set ({ request, params }) {
    const { value } = request.get()
    cache.set(params.key, value)
    return true
  }
}

module.exports = CacheController
