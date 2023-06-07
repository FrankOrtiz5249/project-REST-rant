const router = require('express').Router()

router.get("/new", (req, res) => {
  res.render("places/new");
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.semd('POST /places')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Tai-Food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Cat-Foam-Art.jpg'
      }]

    res.render('places/index', {places})
})

module.exports = router
