package br.com.teste.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	  features = "src/test/resources/features/inserirconta.feature",  //Selecionar Feature
	 glue = "br.com.teste.steps",   // Diret�rio dos Steps
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, // formata��o de relat�rio no console
		monochrome = true,   
		snippets = SnippetType.CAMELCASE, 
		dryRun= false,  // dryRum=true valida��o de passos, caso falta ele gera.
		strict = false
		)
public class RunnerFuncionalTest {

}
