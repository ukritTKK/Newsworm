let ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const newsItem = { '_id' : new ObjectID(id) };
    db.collection('news').findOne(newsItem, (err, item) => {
      if (err) {
        res.send({ 'error' : 'An error has occurred.'});
      } else {
        res.send(item);
      }
    });
  });


  app.post('/news', (req, res) => {
    const news = { text: req.body.body, title: req.body.title };
    db.collection('news').insert(news, (err, result) => {
      if (err) {
        res.send({ 'error' : 'An error has occurred.' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });


  app.delete('/news/:id', (req, res) => {
    const id = req.params.id;
    const newsItem = { '_id' : new ObjectID(id) };
    db.collection('news').remove(newsItem, (err, item) => {
      if (err) {
        res.send({ 'error' : 'An error has occurred.'});
      } else {
        res.send('News ' + id + ' has been removed.');
      }
    });
  })


  app.put('/news/:id', (req, res) => {
    const id = req.params.id;
    const newsItem = { '_id' : new ObjectID(id) };
    const updatedContent = { text: req.body.body, title: req.body.title };
    db.collection('news').update(newsItem, updatedContent, (err, result) => {
      if (err) {
        res.send({ 'error' : 'An error has occurred.'});
      } else {
        res.send(updatedContent);
        console.log('News ' + id + ' has been edited.');
      }
    });
  })

};
