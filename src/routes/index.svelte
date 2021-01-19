<script>
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
  word = words[i];
  if (++i) {
    setTimeout(loop, 4000);
  }
  if (i === words.length) {
    i = 0;
  }
})();

</script>

<svelte:head>
  <link rel="icon" type="image/png" href="home-favicon.png">
	<title>{word}, I'm Ben</title>
</svelte:head>

<main>
  <div class="wrapper">
    <h1 id="one" class="intro">
        <span id="word">{word}</span> <a href="about">I'm Ben!</a>
    </h1>
    <h1 class="intro">
        I'm a Web 
        <a href="https://github.com/TLClassless">Developer</a> & 
        <a href="https://dribbble.com/TLClassless">Designer</a> from the North West of England, feel free to 
        <a href="mailto: benbuckley94@gmail.com">get in touch,</a> or check out 
        <a href="projects">some of my projects</a>
    </h1>
    <div class="links">
        <a href="https://github.com/TLClassless"><img src={Github} alt="github" /></a>
        <a href="https://dribbble.com/TLClassless"><img src={Dribbble} id="dribbble" alt="dribbble" /></a>
        <a href="https://www.linkedin.com/in/ben-buckley-7502ba140/"><img src={LinkedIn} alt="linkedin" /></a>
    </div>
  </div>
</main>

<style>
    .links img {
      height: 50pt;
      margin: 10pt;
    }

    main {
      width: 100%;
      height: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .intro {
      margin: 0 0 20pt 0;
      font-weight: 700;
      width: 80%;
    }

    .intro a {
      color: #fff;
      text-decoration: none;
    }

    #one {
      text-align: center;
    }

    #word {
      text-decoration: none;
    }

    a {
      color: #fff;
      text-decoration: none;
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