<!DOCTYPE html>
<html>
<head>
	<title>API</title>

	<style type="text/css">
		body {font-family: monospace; font-size: 130%; font-weight: 100; margin: 0; padding: 0; }
		a {color: #fff; }
		code {background: bisque; }
		h3:before {content: '// '; }
		h3 {font-style: italic; }
		tr {height: 50px; }
		th {background: rgba(85, 85, 85, 0.7); color: #fff; font-weight: 100; }
		tr.tr-1 {background: rgba(85, 85, 85, 0.1); }
		tr.tr-2 {background: rgba(85, 85, 85, 0.3); }
		td {padding: 0 1em; }
		header, footer {background: #555; color: #F0F8FF; padding: 1%; }
		#version {margin: 1em auto; padding: .3em; }
		#version p {display: inline-block; margin: 0 4em 0 0; }
		#main {padding: 0 0 2em 0; }
		.wrapper {max-width: 900px; width: 100%; margin: 0 auto; }
		.esp {background: rgba(115, 115, 115, 0.7); border-radius: 5px; color: #fff; cursor: pointer; padding: .5em 1em; }
	</style>
</head>
<body>

	<header>
		<div class="wrapper">
			<h1>Free API Contador de Visitas</h1>
			<h2>PHP 5.0, SQL, phpMyAdmin 4.0+</h2>				
		</div>	
	</header>

	<div id="version" class="wrapper">
		<p><b>Vers�o atual</b>: <?php include 'version.txt'; ?></p>
		<p><b>Download</b>: <span class="esp">EM BREVE</span></p>
	</div>

	<div id="main" class="wrapper">
		<h3>Procedimentos Iniciais</h3>
	<ol>
		<li>Insira o c�digo <code>contador_visita.sql</code> no phpMyAdmin.</li>
		<li>Insira o arquivo <code>api.php</code> na raiz do site e preencha <b>corretamente</b> as linhas 12 � 22.</li>
		<li>Insira o seguinte c�digo no arquivo <code>.htaccess</code> que se encontra na raiz do seu site.</li>
			<code>RewriteEngine on<br/>
RewriteRule ^([0-9]+)/api.js$ api.php?siteID=$1
RewriteRule ^api.js$ api.php
</code>
	</ol>

	<h3>C�digo</h3>
	<h4>J� retorna o n�mero de visitas.</h4>
	<p>Insira o seguinte c�digo nas p�ginas do seu site que voc� queira rastrear.</p>
	<code>&lt;script type="text/javascript" src="api.js" /&gt;</code>
	<p>Voc� pode optar tamb�m por colocar um <code>id</code>. Por exemplo, o id de uma postagem:</p>
	<code>&lt;script type="text/javascript" src="{id da postagem}/api.js" /&gt;</code>
	<p><b>Obs:</b> s� aceita-se n�meros como <code>id</code>.</p>

	<h3>Para desenvolvedores.</h3>
	<h4>Fun��es em <code>api.php</code></h4>

	<table border="0">
		<tr>
			<th>Nome</th>
			<th>Retorno</th>
			<th>Coment�rios</th>
		</tr>

		<tr class="tr-1">
			<td>getSiteIdByURi()</td>
			<td>int</td>
			<td>Retorna o id do site informado no par�metro 'siteID' GET</td>
		</tr>

		<tr class="tr-2">
			<td>geraIdentificador()</td>
			<td>String</td>
			<td>Gera o identificador do visitante baseado no IP e na hora.</td>
		</tr>

		<tr class="tr-1">
			<td>registraVisita()</td>
			<td>-</td>
			<td>Registra uma visita e/ou pageview para o visitante.</td>
		</tr>

		<tr class="tr-2">
			<td>visitantesOnline()</td>
			<td>int</td>
			<td>Fun��o que retorna o total de visitantes online.</td>
		</tr>		
	</table>
	</div>

	<footer>
		<div class="wrapper">
			<p>Free API Contador de Visitas &mdash; Mateus Gabi.
			<b><a target="_blank" href="https://github.com/slaureano/Contador-de-visita">C�digo Original feito por <i>Adriano Laureano</i>.</a></b>
			</p>
			<p>#SeedingThePeaceEveryDay &hearts; Brazil, Mato Grosso do Sul, Campo Grande.</p>
			<p><span class="esp"><script type="text/javascript" src="http://curitibahd.hostoi.com/0/pageviews.js" /> Visualiza��es.</span> </p>
		</div>
		</footer>

</body>
</html>