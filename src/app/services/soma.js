
const div = async (req, res) => {

  const divisor = req.body.divisor
  const dividendo = req.body.dividendo
  if (divisor > dividendo) {
    res.status(400).json('Divisor maior que o dividendo')
  }else {
    const resultado = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor
    const jsonObject = {
      resultado,
      resto
    }
    res.status(200).json(jsonObject)
  }
}
module.exports = {
  div
}
