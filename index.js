var express = require ('express');
var app = express ();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Comment = require('./models/comment')
//Config.
    //Template Engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
//Rotas Inicial
        app.get('/',function(req,res){
            Comment.findAll({order: [['id','DESC']]}).then(function(comments){
                res.render('home', {comment:comments})
            })
                })
//Rota do formulário
        app.get('/form',function(req,res){
            res.render('formulário.handlebars')
        })
//rotas "post" só pode ser acessada quando alguem faz uma requisição
        app.post('/add',function(req,res){
            Comment.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo 
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("Comentário não pode ser criado" + erro)
            })
        })

        //Rota para deletar Comentários
        app.get('/deletar/:id',function(req,res){
            Comment.destroy({where:{'id':req.params.id}}).then(function(){
                res.send("Comentário deletado com sucesso")
            }).catch(function(erro){
                res.send('Ocorreu um erro')
            })
        })
    
app.listen(8081,function(){
    console.log("Servidor rodando na porta http://localhost:8081/");
});








app.use(express.static(__dirname + '/public'));


app.get ('/home', function(req, res) {
    res.sendFile(__dirname + '/public/html/home.html');
});

app.get ('/jovemtech/listaalunos', function(req, res) {
    res.sendFile(__dirname + '/public/html/alunos.html');
});

app.get ('/jovemtech/professores', function(req, res) {
    res.send('Página para listar professores');
});

app.get ('/jovemtech/cursos', function(req, res) {
    res.send('Página informar cursos ofertados');
});

app.get ('/jovemtech/inscricao', function(req, res) {
    res.send('Página de inscrição');
});

app.get ('/jovemtech/comentarios', function(req, res) {
    res.send('Página para deixar seu comentário');
});

app.listen(8081,function(){
    console.log("Servidor rodando na porta http://localhost:8081/home");
});