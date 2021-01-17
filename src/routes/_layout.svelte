<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");

/* background animation */

main {
  background: linear-gradient(
    270deg,
    #833ab4,
    #be2c6c,
    #fd1d1d,
    #fc6c33,
    #fcb045
  );
  background-size: 800% 100%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* background animation */

main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
}

</style>



<main>
	<slot></slot>
</main>