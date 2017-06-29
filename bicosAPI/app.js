var express =  require('express');
var mysql = require('mysql');
var body = require('body-parser');
var crypto = require('crypto');
var app = express();

app.listen(2000, function(){
  console.log('Essa bagaça rodou sussa!');
});
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

var connection = mysql.createConnection({
      host : 'localhost',
      port: 3306,
      user : 'jorge',
      pass : '',
      database : 'bicos'
});

app.get('/anuncios', function(req, res){
  connection.query('SELECT * FROM servico', function(err, result){
        if(err){
          res.json(err);
          return;
        }else if(result){
          res.json(result);
       }
  });
});
app.post('/anuncios', function(req, res){
  var data = req.body;
  console.log(data);
  connection.query('INSERT INTO servico SET ?', data, function(err, result){
        if(err){
          res.json({err: err});
          return;
        }else if(result){
          res.json({msg: 'servico cadastrado com sucesso'});
       }
  });
});
app.post('/cadastro', function(req, res){
    var data = {
      nome: req.body.nome,
      usuario: req.body.usuario,
      email: req.body.email,
      senha: req.body.senha
    };
    console.log(data);
        connection.query('INSERT INTO user SET ?', data, function(err, result){
               if(err){
                 res.json(err);
                 return;
               }else if(result){
                   res.json({msg:"Cadastrado com sucesso"});
           }
        });
});
