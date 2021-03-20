import request from 'superagent'

const rootUrl = '/api/v1'

export function getGuitars () {
  return request.get(rootUrl + '/guitars')
    .then(res => {
      return res.body.guitars
    })
}

export function getList(formData) {
  return request.post(rootUrl + '/guitars')
      .send(formData)
      .then(res => {
          return res.body
      })
}
