<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");

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