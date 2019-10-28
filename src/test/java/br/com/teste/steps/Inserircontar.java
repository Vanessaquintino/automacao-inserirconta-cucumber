package br.com.teste.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Inserircontar {
	private WebDriver driver;
	
	@Dado("^que estou acessando a aplicacao$")
	public void queEstouAcessandoAAplicacao() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\vanessa.quintino\\Documents\\DRIVER\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://sco.rsinet.com.br/Default.aspx?msg=1");
		
	}

	
	@Quando("^informo o usuario \"(.*?)\"$")
	public void informoOUsuario(String arg1) throws Throwable {
		

	driver.findElement(By.name("txtLogin")).sendKeys(arg1);
	
	}

	@Quando("^a senha \"(.*?)\"$")
	public void aSenha(String arg1) throws Throwable {
		driver.findElement(By.name("txtSenha")).sendKeys(arg1);
	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		//driver.findElement(By.tagName("button")).click();
		//driver.findElement(By.xpath("/html/body/div[2]/form/button")).click();
	driver.findElement(By.xpath("//*[@id=\"btnEntrar\"]")).click();
	
	driver.findElement(By.name("ctl00$ContentConteudo$ddlFilial")).click();
			WebElement element = driver.findElement(By.name("ctl00$ContentConteudo$ddlFilial"));
			Select combo = new Select(element);
			combo.selectByVisibleText("OSASCO - OPERAÇÕES");

			driver.findElement(By.name("ctl00$ContentConteudo$ddlPlantasUsuario")).click();
			WebElement element1 = driver.findElement(By.name("ctl00$ContentConteudo$ddlPlantasUsuario"));
			Select combo1 = new Select(element1);
			combo1.selectByVisibleText("SANTANDER QA – (QUALITY ASSURANCE)");
			
			driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul/li[3]/a")).click();
			driver.findElement(By.linkText("Lançamento de TimeSheet")).click();
			driver.findElement(By.name("ctl00$ContentConteudo$btnAddAcao")).click();
	}


	@Entao("^visualizo a pagina inicial$")
	public void visualizoAPaginaInicial() throws Throwable {
		
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Bem vindo, Vanessa!", texto);
		}
	
	@Quando("^informar chave de acesso$")
	public void informar_chave_de_acesso() throws Throwable {
String texto = driver.findElement(By.xpath("//*[@id=\"caption\"]")).getText();
		driver.findElement(By.name("txtcaption")).sendKeys(texto);
		// Write code here that turns the phrase above into concrete actions
	    
	}

}
