import request from 'superagent'

const rootUrl = '/api/v1'

export function getNeckWidths () {
  return request.get(rootUrl + '/neck_widths')
    .then(res => {
      return res.body.neck_widths
    })
}

