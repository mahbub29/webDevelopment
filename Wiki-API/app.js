// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true
});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);


///////////// REQUEST FOR ALL ARTICLEES //////////////

app.route("/articles")

.get(function(req, res) {
  Article.find(function(err, foundArticles) {
    // console.log(foundArticles);
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
})

.post(function(req, res) {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err) {
    if (!err) {
      res.send("Successfully added a new article.");
    } else {
      res.send(err);
    }
  });
})

.delete(function(req, res) {
  Article.deleteMany(function(err) {
    if (!err) {
      res.send("Successfully deleted all articles.");
    } else {
      res.send(err);
    }
  });
});


////////////////// REQUEST FOR SPECIFIC ARTICLE //////////////////

app.route("/articles/:articleTitle")

.get(function(req, res) {
  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (foundArticle) {
      res.send(foundArticle);
    } else {
      res.send("No articles matching title found.");
    }
  });
})

// PUT request replaces entire contents of an object with the newly assigned contents
// e.g. if an object has title and content and you send request with only new content,
// it will replace both original title and content with the new content.
.put(function(req, res) {
  Article.update(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
      if (!err) {
        res.send("Article successfully updated.");
      } else {
        res.send(err);
      }
    }
  );
})

.patch(function(req, res){
  Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err){
      if (!err){
        res.send("Article successfully updated.");
      } else {
        res.send(err);
      }
    }
  );
})

.delete(function(req, res) {
  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err){
      if (!err){
        res.send("Article successfully deleted.");
      } else {
        res.send(err);
      }
    }
  );
});


// ^^^ USING CHAINED METHODS ABOVE
// AS ALTERNATIVE TO WRRITING EACH METHOD OUT SEPARATELY:

// app.get("/articles", function(req, res){
//   Article.find(function(err, foundArticles){
//     // console.log(foundArticles);
//     if (!err) {
//       res.send(foundArticles);
//     } else {
//       res.send(err);
//     }
//   });
// });

// app.post("/articles", function(req, res) {
//   // console.log(req.body.title);
//   // console.log(req.body.content);
//
//   const newArticle = new Article({
//     title:req.body.title,
//     content:req.body.content
//   });
//
//   newArticle.save(function(err) {
//     if (!err){
//       res.send("Successfully added a new article.");
//     } else {
//       res.send(err);
//     }
//   });
// });

// app.delete("/articles", function(req, res) {
//   Article.deleteMany(function(err) {
//     if (!err){
//       res.send("Successfully deleted all articles.");
//     } else {
//       res.send(err);
//     }
//   });
// });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
