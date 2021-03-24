import request from 'superagent'

const rootUrl = '/api/v1'

export function getNeckRadii () {
  return request.get(rootUrl + '/neck_radii')
    .then(res => {
      return res.body.neck_radii
    })
}

