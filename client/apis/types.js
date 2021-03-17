import request from 'superagent'

const rootUrl = '/api/v1'

export function getTypes () {
  return request.get(rootUrl + '/types')
    .then(res => {
      return res.body.types
    })
}

