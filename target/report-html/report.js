$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserirconta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "Gostaria de cadastrar contas",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 7,
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "informo o usuario \"vanessa.sq@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "a senha \"123456789\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "Inserircontar.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 5929043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vanessa.sq@hotmail.com",
      "offset": 19
    }
  ],
  "location": "Inserircontar.informoOUsuario(String)"
});
formatter.result({
  "duration": 137314900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 9
    }
  ],
  "location": "Inserircontar.aSenha(String)"
});
formatter.result({
  "duration": 63550800,
  "status": "passed"
});
formatter.match({
  "location": "Inserircontar.selecionoEntrar()"
});
formatter.result({
  "duration": 804727900,
  "status": "passed"
});
formatter.match({
  "location": "Inserircontar.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 27534200,
  "status": "passed"
});
});