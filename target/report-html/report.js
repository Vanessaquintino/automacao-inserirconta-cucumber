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
  "name": "informar chave de acesso",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "informo o usuario \"vanessa.quintino\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"15924706\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "Inserircontar.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 5425085200,
  "status": "passed"
});
formatter.match({
  "location": "Inserircontar.informar_chave_de_acesso()"
});
formatter.result({
  "duration": 117727400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vanessa.quintino",
      "offset": 19
    }
  ],
  "location": "Inserircontar.informoOUsuario(String)"
});
formatter.result({
  "duration": 86430100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15924706",
      "offset": 9
    }
  ],
  "location": "Inserircontar.aSenha(String)"
});
formatter.result({
  "duration": 59680900,
  "status": "passed"
});
formatter.match({
  "location": "Inserircontar.selecionoEntrar()"
});
formatter.result({
  "duration": 1969491500,
  "status": "passed"
});
formatter.match({
  "location": "Inserircontar.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 26959200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027alert alert-success\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RSI0527\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\VANESS~1.QUI\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:51186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1892390e24fc7cc4cc9a61734dfc869c\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027alert alert-success\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat br.com.teste.steps.Inserircontar.visualizoAPaginaInicial(Inserircontar.java:44)\r\n\tat ✽.Entao visualizo a pagina inicial(src/test/resources/features/inserirconta.feature:12)\r\n",
  "status": "failed"
});
});