<svelte:head>
	<link rel="icon" type="image/png" href="proj-favicon.png">
	<title>Projects</title>
</svelte:head>

<script>
    import { BackIco } from "../js/img.js";
</script>

<main class="about-body">
    <span class="about-head">
        <a href="/"><img src={BackIco} alt="Go Back" /></a>
        <h3>Some projects I've been working on:</h3>
    </span>
    <span class="about-toggles">
        <p>All</p>
        <p class="proj-break">|</p>
        <p>Projects</p>
        <p class="proj-break">|</p>
        <p>Experiments</p>
    </span>
    <div id="portfolio" class="home">
      <ul class="portfolio-body">
        <li id="proj0" class="portfolio-item">
          <div class="proj-on-hover">
            <div class="proj-on-hover-bg">
              <p class="proj-description">
                A Hybrid Travel App, designed to reward users for visiting new
                places with virtual collectable badges and statistics. (Currently
                Pre-Release Alpha Build)
              </p>
              <p class="proj-imgs">
                <a href="https://github.com/odyssey-dev/Odyssey"
                  ><img src="img/github.svg" alt="github"
                /></a>
                <span class="proj-divider">|</span>
                <a href="https://odysseyapp.dev/"
                  ><img src="img/portfolio/www.svg" alt="live site"
                /></a>
              </p>
            </div>
          </div>
  
          <img src="img/portfolio/odyssey.png" alt="site icon"/>
          <h2>Odyssey</h2>
          <p>Hybrid App (Svelte/Cordova)</p>
        </li>
  
        <li id="proj1" class="portfolio-item">
          <div class="proj-on-hover">
            <div class="proj-on-hover-bg">
              <p class="proj-description">
                A PWA made to help users gain inspiration for new pieces of art,
                no matter the medium, with a prompt, image and description.
              </p>
              <p class="proj-imgs">
                <a href="https://github.com/TLClassless/ArtistInspo"
                  ><img src="img/github.svg" alt="github"
                /></a>
                <span class="proj-divider">|</span>
                <a href="https://hardcore-heisenberg-d004ff.netlify.app/"
                  ><img src="img/portfolio/www.svg" alt="live site"
                /></a>
              </p>
            </div>
          </div>
          <img src="img/portfolio/inspo.png" alt="site icon"/>
          <h2>iNspo</h2>
          <p>PWA (Svelte)</p>
        </li>
  
        <li id="proj2" class="portfolio-item">
          <div class="proj-on-hover">
            <div class="proj-on-hover-bg">
              <p class="proj-description">
                A website created with the aim of providing challenges for the
                Counter-Strike: Global Offensive community gamemode "Strat
                Roulette" (Currently in Development)
              </p>
              <p class="proj-imgs">
                <a href="https://github.com/TLClassless/Strat-Roulette-CSGO"
                  ><img src="img/github.svg" alt="github"
                /></a>
                <span class="proj-divider">|</span>
                <a href="projects"><img src="img/portfolio/www.svg" id="unfinished" alt="live site"/></a>
              </p>
            </div>
          </div>
          <img src="img/portfolio/stratroulette.png" alt="site icon"/>
          <h2>Strat Roulette</h2>
          <p>Website (React)</p>
        </li>
  
        <li id="proj3" class="portfolio-item">
          <div class="proj-on-hover">
            <div class="proj-on-hover-bg">
              <p class="proj-description">
                A website made for the Streaming group "Top Left eSports", website
                is made to showcase their individual and group streams and give
                some background on the group.
              </p>
              <p class="proj-imgs">
                <a href="https://github.com/TLClassless/topLeft"
                  ><img src="img/github.svg" alt="github"
                /></a>
                <span class="proj-divider">|</span>
                <a href="https://topleftesports.com/"
                  ><img src="img/portfolio/www.svg" alt="live site"
                /></a>
              </p>
            </div>
          </div>
          <img id="tlico" src="img/portfolio/tlf-ico.svg" alt="site icon"/>
          <h2>Top Left</h2>
          <p>Website (HTML/CSS/JS)</p>
        </li>

        <li id="proj4" class="portfolio-item">
            <div class="proj-on-hover">
                <div class="proj-on-hover-bg">
                  <p class="proj-description">
                    A website made for the Streaming group "Top Left eSports", website
                    is made to showcase their individual and group streams and give
                    some background on the group.
                  </p>
                  <p class="proj-imgs">
                    <a href="projects"><img id ="unfinished" src="img/github.svg" alt="github"
                    /></a>
                    <span class="proj-divider">|</span>
                    <a href="https://thecarpetandovenwizard.co.uk/"
                      ><img src="img/portfolio/www.svg" alt="live site"
                    /></a>
                  </p>
                </div>
              </div>
              <img id="tlico" src="../img/portfolio/carpet-and-oven.svg" alt="site icon"/>
              <h2>Carpet & Oven Wizard</h2>
              <p>Website (HTML/CSS/JS)</p>
        </li>
        <!-- <li id="proj5" class="portfolio-item"></li>
        <li id="proj6" class="portfolio-item"></li> -->
      </ul>
    </div>
  </main>

  <style>

      .about-head img {
          height: 50pt;
      }

      .about-head {
          display: flex;
          flex-direction: row;
      }

        .proj-break {
        margin-left: 10pt;
        margin-right: 10pt;
        }

        .portfolio-body {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        }

        .portfolio-item {
        display: flex;
        flex-direction: column;
        height: 250px;
        width: 400px;
        background-color: #0074d9;
        color: #fff;
        border-radius: 20px;
        float: center;
        margin: 10px;
        align-items: center;
        justify-content: center;
        }

        .portfolio-item img {
        height: 100px;
        }

        .portfolio-item p {
        display: flex;
        align-items: center;
        margin: 0;
        }

        .portfolio-item h2 {
        margin: 0;
        font-size: 24pt;
        font-weight: 700;
        }

        .proj-on-hover img {
        height: 50px;
        }

        .proj-on-hover-bg {
        width: 400px;
        height: 250px;
        overflow: hidden;
        border-radius: 20px;
        display: flex;
        align-content: center;
        justify-content: center;
        position: absolute;
        background-color: #000;
        opacity: 0%;
        transition: all 0.4s ease;
        -webkit-transition: all 0.4s ease;
        z-index: 9;
        flex-direction: column;
        }

        .proj-on-hover {
        width: 400px;
        height: 250px;
        overflow: hidden;
        border-radius: 20px;
        display: flex;
        align-content: center;
        justify-content: center;
        position: absolute;
        opacity: 0%;
        transition: all 0.4s ease;
        -webkit-transition: all 0.4s ease;
        z-index: 10;
        }

        .proj-on-hover p {
        z-index: 11;
        }

        .proj-imgs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
        }

        .proj-description {
        text-align: center;
        padding: 10px;
        }

        .proj-on-hover-bg:hover {
        opacity: 90%;
        }

        .proj-on-hover:hover {
        opacity: 100%;
        }

        .proj-divider {
        margin: 0 16px;
        }

        #proj0 {
        background: #003972;
        background: -moz-linear-gradient(top, #003972 0%, #001322 100%);
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, #003972),
            color-stop(100%, #001322)
        );
        background: -webkit-linear-gradient(top, #003972 0%, #001322 100%);
        background: -o-linear-gradient(top, #003972 0%, #001322 100%);
        background: -ms-linear-gradient(top, #003972 0%, #001322 100%);
        background: linear-gradient(to bottom, #003972 0%, #001322 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#003972', endColorstr='#001322',GradientType=0 );
        }

        #proj1 {
        background: #fcd129;
        background: -moz-linear-gradient(top, #fcd129 0%, #b8860b 100%);
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, #fcd129),
            color-stop(100%, #b8860b)
        );
        background: -webkit-linear-gradient(top, #fcd129 0%, #b8860b 100%);
        background: -o-linear-gradient(top, #fcd129 0%, #b8860b 100%);
        background: -ms-linear-gradient(top, #fcd129 0%, #b8860b 100%);
        background: linear-gradient(to bottom, #fcd129 0%, #b8860b 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcd129', endColorstr='#b8860b',GradientType=0 );
        }

        #proj2 {
        background: #4a75b5;
        background: -moz-linear-gradient(top, #4a75b5 0%, #304b74 100%);
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, #4a75b5),
            color-stop(100%, #304b74)
        );
        background: -webkit-linear-gradient(top, #4a75b5 0%, #304b74 100%);
        background: -o-linear-gradient(top, #4a75b5 0%, #304b74 100%);
        background: -ms-linear-gradient(top, #4a75b5 0%, #304b74 100%);
        background: linear-gradient(to bottom, #4a75b5 0%, #304b74 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4a75b5', endColorstr='#304b74',GradientType=0 );
        }

        #proj3 {
        background: #ca0702;
        background: -moz-linear-gradient(top, #ca0702 0%, #7e0502 100%);
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, #ca0702),
            color-stop(100%, #7e0502)
        );
        background: -webkit-linear-gradient(top, #ca0702 0%, #7e0502 100%);
        background: -o-linear-gradient(top, #ca0702 0%, #7e0502 100%);
        background: -ms-linear-gradient(top, #ca0702 0%, #7e0502 100%);
        background: linear-gradient(to bottom, #ca0702 0%, #7e0502 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ca0702', endColorstr='#7e0502',GradientType=0 );
        }

        #tlico {
        border-radius: 10px;
        }

        #proj4 {
        background: #b91c8a;
        background: -moz-linear-gradient(top, #b91c8a 0%, #5e216d 100%);
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, #b91c8a),
            color-stop(100%, #5e216d)
        );
        background: -webkit-linear-gradient(top, #b91c8a 0%, #5e216d 100%);
        background: -o-linear-gradient(top, #b91c8a 0%, #5e216d 100%);
        background: -ms-linear-gradient(top, #b91c8a 0%, #5e216d 100%);
        background: linear-gradient(to bottom, #b91c8a 0%, #5e216d 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#434343', endColorstr='#5e216d',GradientType=0 );
        }

        /* #proj5 {
        background-color: darkslategray;
        }

        #proj6 {
        background-color: darksalmon;
        } */

        #unfinished {
        opacity: 40%;
        }
  </style>