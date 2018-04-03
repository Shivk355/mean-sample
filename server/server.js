const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

var User = require('./models/users.js');
var Post = require('./models/post.js');

var auth = require('./router/auth.js');

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id', async (req, res) => {
    var author = req.params.id;
    var posts = await Post.find({author});
    res.send(posts);
});

app.post('/post', auth.checkAuthenticated, (req, res) => {
    var postData = req.body;
    postData.author = req.userId;
    var post = new Post(postData);
    post.save((err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Saving post error' });
        }
        res.status(200);
    });
});

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v');
        res.send(users);
    }
    catch (error) {
        res.sendStatus(500);
    }

});

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v');
        res.send(user);
    }
    catch (error) {
        res.sendStatus(500);
    }
})



mongoose.connect('mongodb://test:test@ds151528.mlab.com:51528/demo', (err) => {
    if (!err) {
        console.log('Connected To Mongo!');
    }
});

app.use('/auth', auth.router);

app.listen(port, function (err) {
    console.log('Server Started !');
}); 