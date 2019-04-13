const coinId = '2087'
const contentDiv = document.querySelector('.content')

const render = (item) => {
  const text = document.createTextNode(`height: ${item.height}`)
  const li = document.createElement('li')
  li.appendChild(text)
  contentDiv.appendChild(li)
}

const url = '/.netlify/functions/blockExplorer'
// const url = 'http://127.0.0.1:9000/blockExplorer'

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ coinId }),
})
.then(res => res.json())
.then(res => res.map(item => render(item)))
.catch(err => console.error(err))
