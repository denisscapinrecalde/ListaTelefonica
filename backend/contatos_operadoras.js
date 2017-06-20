var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var contatos = [
	{id: 0, serial: "Rt5", nome: "Bruno Silva", telefone: "9999-2222", data: new Date(), cor: "red", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{id: 1, serial: "g$%",nome: "Sandra Oliveira", telefone: "9999-3333", data: new Date(), cor: "blue", operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{id: 2, serial: "6Ty",nome: "Marina Casagrande", telefone: "9999-9999", data: new Date(), cor: "green", operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
	contato = contatos[req.params.id];
	if(contato===undefined){
		res.statusCode = 204;
	}
  res.json(contato);
});

app.post('/contatos', function(req, res) {
	req.body.id = contatos.length;
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
