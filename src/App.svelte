<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import People from './lib/People.svelte';
</script>

<main class='container'>
  <div class="list"><People /></div>

</main>

<style>
  .container {
		display: flex;
    align-items: flex-start;
    justify-content:space-between;
	}
  .list {
    border: 2px solid lightskyblue;
    text-align: left;
    
}
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
