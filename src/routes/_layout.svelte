<script>
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");

main {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100%;
  font-family: 'Noto Sans', sans-serif;
}

@media (max-width: 700px) {
  main {
    height: auto;
  }
}

</style>



<main>
	<slot></slot>
</main>