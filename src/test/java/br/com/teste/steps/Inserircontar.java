package br.com.teste.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Inserircontar {
	private WebDriver driver;
	
	@Dado("^que estou acessando a aplicacao$")
	public void queEstouAcessandoAAplicacao() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\vanessa.quintino\\Documents\\DRIVER\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://srbarriga.herokuapp.com");
		
	}

	@Quando("^informo o usuario \"(.*?)\"$")
	public void informoOUsuario(String arg1) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);
	
	}

	@Quando("^a senha \"(.*?)\"$")
	public void aSenha(String arg1) throws Throwable {
		driver.findElement(By.name("senha")).sendKeys(arg1);
	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		//driver.findElement(By.tagName("button")).click();
		driver.findElement(By.xpath("/html/body/div[2]/form/button")).click();
	}

	@Entao("^visualizo a pagina inicial$")
	public void visualizoAPaginaInicial() throws Throwable {
		
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Bem vindo, Vanessa!", texto);
		
	}
	
	
	
	
	
	
	

}
