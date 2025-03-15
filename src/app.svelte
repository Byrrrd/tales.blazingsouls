<script>
  import Gallery from './Gallery.svelte';
  import ArtForm from './ArtForm.svelte';
  import AuthForm from './AuthForm.svelte';

  let currentView = 'auth'; // 'auth', 'gallery', or 'submitArt'

  function showGallery() {
      currentView = 'gallery';
  }

  function showArtForm() {
      currentView = 'submitArt';
  }

  function showAuth() {
      currentView = 'auth';
  }
</script>

<style>
  nav {
      margin-bottom: 20px;
  }
</style>

<header>
  <h1>Art Gallery</h1>
  <nav>
      <!-- svelte-ignore a11y-unknown-aria-attribute -->
      <button type="button" on:click={showGallery} aria-role="link">Gallery</button>
      <button type="button" on:click={showArtForm} role="link">Submit Art</button>
      <!-- svelte-ignore a11y-unknown-aria-attribute -->
      <button type="button" on:click={showAuth} aria-role="link">Login / Register</button>
  </nav>
</header>

<main>
  {#if currentView === 'gallery'}
      <Gallery />
  {:else if currentView === 'submitArt'}
      <ArtForm />
  {:else if currentView === 'auth'}
      <AuthForm />
  {/if}
</main>