import request from 'superagent'

const rootUrl = '/api/v1'

export function getBrands () {
  return request.get(rootUrl + '/brands')
    .then(res => {
      return res.body.brands
    })
}

