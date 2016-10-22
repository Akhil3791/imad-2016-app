var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title:`Article One | Akhil`,
    heading:'article one',
    date:`otober 22 2016`,
    content:`<p> 
                this is a demo content for article one.. Loreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreum
            </p>
             <p> 
                this is a demo content for article one.. Loreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreum
            </p>
             <p> 
                this is a demo content for article one.. Loreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreumoreum ipsum ipsum loreum loreum ipsum
                ipsum loreum
            </p>`
                
};

function crateTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = date.content;
    var htmlTemplaec=`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}




app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
