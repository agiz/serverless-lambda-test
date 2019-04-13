// require('custom-env').env()
const jsdom = require('jsdom')
const request = require('request-promise')
const { JSDOM } = jsdom

const ua = 'Mozilla/5.0 (compatible; Najdi.si/3.1)'

const headers = {
  'User-Agent': ua,
}

// const r = request.defaults({ proxy: 'http://128.199.74.200:8888' })
const r = request.defaults({})

const init = async (coinId) => {
  // const { API_URL } = process.env
  // const url = `${API_URL}?id=${coinId}&rand=${new Date().getTime()}`
  const url = 'https://ifconfig.co/json'
  const res = await r({ url, headers })
  // const dom = new JSDOM(res)
  //
  // const arr = await Array.from(dom.window.document.querySelectorAll('tr'))
  // .slice(1)
  // .map(x => ({ height: x.querySelectorAll('td')[3].textContent }))

  const obj = JSON.parse(res)
  return [{ ...obj, height: new Date().getTime(), coinId }]
  // return arr
  // return [{ height: '1234', url: API_URL }]
}

exports.handler = (event, context, callback) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': '2592000',
    'Access-Control-Allow-Credentials': 'true',
  };

  const send = (body) => {
    callback(null, {
      statusCode: 200,
      headers,
      body,
    })
  }

  if (event.httpMethod === 'OPTIONS') {
    callback(null, { statusCode: '204', headers })
  } else if (event.httpMethod === 'POST') {
    const { coinId } = JSON.parse(event.body)
    // const coinId = '2370' // '2087'
    console.log('coinId:', coinId)

    init(coinId)
    .then(res => send(JSON.stringify(res)))
    .catch(err => send(err))
  }
}

