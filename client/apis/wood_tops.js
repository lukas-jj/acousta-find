import request from 'superagent'

const rootUrl = '/api/v1'

export function getWoodTops () {
  return request.get(rootUrl + '/wood_tops')
    .then(res => {
      return res.body.wood_tops
    })
}

