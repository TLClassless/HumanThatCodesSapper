<svelte:head>
	<link rel="icon" type="image/png" href="proj-favicon.png">
	<title>Projects</title>
</svelte:head>

<script>
    import { BackIco } from "../js/img.js";
</script>

<main>
    <span class="head">
        <a href="/"><img src={BackIco} alt="Go Back" /></a>
        <span class="br"></span>
        <h3>Some projects I've been working on:</h3>
    </span>
    <span class="toggles">
        <p>(Hover a project for more information and links to live sites & github repositories)</p>
    </span>
      <ul class="portfolio-body">
        <li id="proj0" class="portfolio-item">
          <div class="proj-on-hover">
            <div class="proj-on-hover-bg">
              <p class="proj-description">
                A Hybrid Travel App, designed to reward users for visiting new
                places with virtual collectable badges and statistics. (Currently
                Pre-Release Alpha Build, not available in browser on release, use phone view)
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
          <p class="proj-type">Hybrid App (Svelte/Cordova/Firebase)</p>
        </li>
  
        <li id="proj1" class="portfolio-item">
          <div class="proj-on-hover">
            <div class="proj-on-hover-bg">
              <p class="proj-description">
                A PWA made to help users gain inspiration for new pieces of art,
                no matter the medium, with a prompt, image and description. (Primarily Mobile)
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
          <p class="proj-type">PWA (Svelte)</p>
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
          <p class="proj-type">Website (React)</p>
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
          <p class="proj-type">Website (HTML/CSS/JS)</p>
        </li>

        <li id="proj4" class="portfolio-item">
            <div class="proj-on-hover">
                <div class="proj-on-hover-bg">
                  <p class="proj-description">
                    A website made for a Carpet & Oven Cleaning specialist, the
                    website is made to be a business front to give contact info & details to
                    potential clients.
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
              <p class="proj-type">Website (HTML/CSS/JS)</p>
        </li>

        <li id="proj5" class="portfolio-item">
          <div class="proj-on-hover">
              <div class="proj-on-hover-bg">
                <p class="proj-description">
                  A Social Network platform for sharing your best gaming clips! This platform is currently in development.
                </p>
                <p class="proj-imgs">
                  <a href="https://github.com/TLClassless/Blink"><img src="img/github.svg" alt="github"
                  /></a>
                  <span class="proj-divider">|</span>
                  <a href="projects"
                    ><img src="img/portfolio/www.svg" id ="unfinished" alt="live site"
                  /></a>
                </p>
              </div>
            </div>
            <img id="blinkico" src="../img/portfolio/blink-ico.svg" alt="site icon"/>
            <h2>Blink</h2>
            <p class="proj-type">Social Network (Svelte/Firebase)</p>
      </li>
        <!-- <li id="proj5" class="portfolio-item"></li>
        <li id="proj6" class="portfolio-item"></li> -->
      </ul>
  </main>
  
  <style>

      ul {
        padding: 0;
      }

      .head img {
          height: 40pt;
      }

      .head {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
      }

      .head h3 {
          font-weight: 700;
          margin: 0;
      }

      .toggles {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
      }

        .portfolio-body {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        max-width: 70rem;
        }

        .portfolio-item {
        display: flex;
        flex-direction: column;
        height: 300px;
        width: 300px;
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
        text-align: center;
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
        width: 300px;
        height: 300px;
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
        width: 300px;
        height: 300px;
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
        font-size: 12pt;
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

        #blinkico {
          width: 200px;
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

        #proj5 {
        background: #ff3e01;
        background: -moz-linear-gradient(top, #ff3e01 0%, #ff8301 100%);
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, #ff3e01),
            color-stop(100%, #ff8301)
        );
        background: -webkit-linear-gradient(top, #ff3e01 0%, #ff8301 100%);
        background: -o-linear-gradient(top, #ff3e01 0%, #ff8301 100%);
        background: -ms-linear-gradient(top, #ff3e01 0%, #ff8301 100%);
        background: linear-gradient(to bottom, #ff3e01 0%, #ff8301 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3e01', endColorstr='#ff8301',GradientType=0 );

        }

        /* #proj6 {
        background-color: darksalmon;
        } */

        #unfinished {
        opacity: 40%;
        cursor: default;
        }

        .br {
          width: 20pt;
        }

        a {
          line-height: 0;
        }

        .proj-type {
          font-size: 12pt;
        }

        h2 {
          text-align: center;
          font-size: 20pt;
        }

        @media (max-width: 700px) {
          h2 {
            font-size: 15pt;
          }
        }

  </style>