
<script>
	import { BackIco } from "../js/img.js";
	let HTMLang = "../img/html.svg";
	let CSSheets = "../img/css.svg";
	let JS = "../img/javascript.svg";
	let PHP = "../img/php.svg";
	let Git = "../img/git.svg";
	let SvelteLang = "../img/svelte.png";
	let NPManager = "../img/npm.svg";
	let Framework7 = "../img/framework7.svg";
	let GithubTxt = "../img/github-txt.svg";
	let Adobe = "../img/adobe.svg";
	let Wordpress = "../img/wordpress.png";
	let Gitkraken = "../img/gitkraken.png";
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="about-favicon.png">
	<title>A Little About Me</title>
</svelte:head>

<main>
	<div class="main-zone">
		<span class="title">
			<a href="/"><img src={BackIco} alt="Go Back" /></a>
			<h3>A Little About Me:</h3>
		</span>
		<p>
		Hello there, I'm Ben, I'm a web developer, a designer and a hot sauce
		aficionado.
		</p>
		<p>
		I've been a developer for around a year and a bit, mostly focusing on
		web based technologies, and have <a href="projects">a few
		projects</a> under my belt. My main focus as
		of late has been on learning JS frameworks and getting more
		comfortable with those, but I am familiar with a range of languages
		and technologies (have a look in the table below). I have a keen
		interest in developing myself as an engineer and love bringing ideas
		to life through technology.
		</p>
		<p>
		If you wanna know anything else about my development history, hire me
		to do a web project or suggest a new hot sauce, feel free to
		<a
			href="https://www.messenger.com/t/HelloBenBuckley"
			target="_blank"
			rel="noopener noreferrer"
			>message</a>
		or <a href="mailto: benbuckley94@gmail.com">email</a> me!
		</p>

		<div class="lang">
			<img src={HTMLang} alt="HTML">
			<img src={CSSheets} alt="CSS">
			<img src={JS} alt="JS">
			<img src={PHP} alt="PHP">
			<img src={Git} alt="Git">
			<img src={SvelteLang} alt="Svelte">
			<img src={Wordpress} alt="Wordpress">
			<img src={NPManager} alt="NPM">
			<img src={Gitkraken} alt="Gitkraken">
			<img src={Framework7} alt="Framework7">
			<img src={GithubTxt} alt="Github">
			<img src={Adobe} alt="Adobe Creative Cloud">
		</div>
	</div>

</main>
<style>

	p {
		font-size: 14pt;
	}

	.lang {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-content: space-between;
	}

	.lang img {
		margin: 10pt;
	}

	main {
		width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
		font-weight: 700;
    }

	.main-zone {
		width: 80%;
		height: 100%;
	}

	img {
		height: 30pt;
		margin-right: 20pt;
	}

	.title {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.title h3 {
		font-weight: 700;
		margin: 0;
	}

	a {
      color: #fff;
	  text-decoration: none;
	  line-height: 0;
    }

    a:hover {
      color: transparent;
      -webkit-text-stroke: 2px #fff;
    }

    @supports not(-webkit-text-stroke: 2px #fff) {
      a:hover {
        text-shadow:
          3px 3px 0 #fff,
          -1px -1px 0 #fff,
          1px -1px 0 #fff,
          -1px 1px 0 #fff,
          1px 1px 0 #fff;
      }
    }

</style>