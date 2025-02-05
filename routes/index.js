var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form')
})
router.post('/new', function(req, res, next){
  const messageName = req.body.name
  const messageText = req.body.text
  messages.push(
    {
      text: messageText,
      user: messageName,
      added: new Date(),
    }
  );
  res.redirect('/')
})

module.exports = router;
