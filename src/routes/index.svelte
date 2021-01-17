<script>
import { loop } from "svelte/internal";
import { Github, LinkedIn, Dribbble } from "../js/img";

let words = [
  "Hello",
  "Olá",
  "Привет",
  "你好",
  "Ahoj",
  "Bonjour",
  "Kamusta",
  "Hei",
  "Aloha",
  "Ciao",
  "こんにちは",
  "여보세요",
  "Hallå",
  "Hi",
  "¿Qué tal?",
  "Salve",
  "Halløj",
  "Shalom",
  "Namastē",
  "Cześć",
  "Góðan dag",
  "مرحبا",
];
let word = "";
let i = 0;

(function loop() {
  console.log(i);
  word = words[i];
  if (++i) {
    setTimeout(loop, 4000);
  }
  if (i === words.length) {
    i = 0;
  }
})();

console.log(word);


</script>

<svelte:head>
	<title>{word}, I'm Ben</title>
</svelte:head>

<main>
    <h1 id="one" class="intro">
        <span id="word">{word}</span> I'm <a href="http://github.com/TLClassless">Ben!</a>
    </h1>
    <h1 class="intro">
        I'm a Web 
        <a href="https://github.com/TLClassless">Developer</a> & 
        <a href="https://dribbble.com/TLClassless">Designer</a> from the North West of England, feel free to 
        <a href="mailto: benbuckley94@gmail.com">get in touch,</a> or check out 
        <a href="portfolio.html">some of my projects</a>
    </h1>
    <div class="links">
        <a href="https://github.com/TLClassless"><img src={Github} alt="github" /></a>
        <a href="https://dribbble.com/TLClassless"><img src={Dribbble} id="dribbble" alt="dribbble" /></a>
        <a href="https://www.linkedin.com/in/ben-buckley-7502ba140/"><img src={LinkedIn} alt="linkedin" /></a>
    </div>
</main>

<style>
    .links img {
        height: 50pt;
    }

    main {
		height: 100vh;
		width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .intro {
        margin: 0 0 20pt 0;
		font-size: 50pt;
		font-weight: 700;
		width: 80%;

    }

    .intro a {
		color: #fff;
		text-decoration: none;
	}
	
	.intro :hover {
		text-decoration: underline;
	}

  #one {
    text-align: center;
    transition: all 1s;
    -moz-transition: all 1s;
  }

  
</style>