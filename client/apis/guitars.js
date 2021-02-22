import request from 'superagent'

const rootUrl = '/api/v1'

export function getGuitars () {
  return request.get(rootUrl + '/guitars')
    .then(res => {
      return res.body.guitars
    })
}
