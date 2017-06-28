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
      user : 'root',
      pass : '',
      database : 'bicos'
});
app.post('/cadastro', function(req, res){

    var data = {
      nome: req.body.nome,
      usuario: req.body.usuario,
      email: req.body.email,
      senha: req.body.senha
    };
    console.log(data);
    connection.connect();
    connection.query('SELECT * FROM user WHERE email=? AND usuario=?', {email: data.email, usuario: data.usuario}, function(err, result){
      if (result != undefined) {
        res.json("Email ou Usuario Já Cadastrado");
      }
      else if (result == undefined) {
        connection.query('INSERT INTO user SET ?', data, function(err, result){
               if(err){
                 res.json(err);
                 return;
               }else if(result){
                   res.json({msg:"Cadastrado com sucesso"});
                 }
             });
           }
       });
});
app.post('/cadastroServico', function(req, res){

    var dataservico = {
      titulo: req.body.titulo,
      valor: req.body.valor,
      descricao: req.body.descricao
    };
    console.log(dataservico);
    connectionServico.connect();
    connectionServico.query('INSERT INTO servico SET ?', dataservico, function(err, result){
           if(err){
             res.json(err);
             return;
           }else if(result){
               res.json({msg:"Dados enviados com sucesso"});
             }
         });

});
app.get('/anuncios', function(req, res){
  connection.connect();
  connection.query('SELECT * FROM servico', function(err, result){
    res.json(result);
  }
});
