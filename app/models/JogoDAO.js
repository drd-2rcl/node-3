function JogoDAO(connection){
  this._connection = connection();
}

JogoDAO.prototype.gerarParametros = function(usuario, res){
  var dados = {
    operacao: "inserir",
    usuario:
      usuario,
      moeda: 15,
      suditos: 10,
      temor: Math.floor(Math.random() * 1000),
      sabedoria: Math.floor(Math.random() * 1000),
      comercio: Math.floor(Math.random() * 1000),
      magia: Math.floor(Math.random() * 1000)
    ,
    collection: "jogo",
    callback: function(err, result){
      res.send("Cadastro realizado");
    }
  }
  this._connection(dados);
}

JogoDAO.prototype.acao = function(acao){
  console.log(acao);
}

module.exports = function(){
  return JogoDAO;
}
