const expect = require('chai').expect
const fetch = require('node-fetch')

describe('Teste Soma', () => {

  it('returns 200', async () => {
    const divisor = 5
    const dividendo = 7
    const url = 'http://localhost:3000/soma'
    const body = {
      divisor,
      dividendo
    }
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json' }
    })
    expect(data.status).to.equal(200)
    const jsonData = await data.json()
    console.log(jsonData)
    expect(jsonData.resultado).to.equal(1)
    expect(jsonData.resto).to.equal(2)
  })

  it('returns 400', async () => {
    const divisor = '7'
    const dividendo = '5'
    const url = 'http://localhost:3000/soma'
    const body = {
      divisor,
      dividendo
    }
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json' }
    })
    expect(data.status).to.equal(400)
  })
})
