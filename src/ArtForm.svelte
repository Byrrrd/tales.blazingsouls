<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let title = '';
  let artist = '';
  let imageUrl = '';
  let description = '';

  function submitArt() {
      const artPiece = { title, artist, imageUrl, description };
      let artPieces = JSON.parse(localStorage.getItem('artPieces')) || [];
      artPieces.push(artPiece);
      localStorage.setItem('artPieces', JSON.stringify(artPieces));
      dispatch('artSubmitted', artPiece);
      title = '';
      artist = '';
      imageUrl = '';
      description = '';
  }
</script>

<h2>Submit Your Art</h2>
<form on:submit|preventDefault={submitArt}>
  <input type="text" bind:value={title} placeholder="Art Title" required />
  <input type="text" bind:value={artist} placeholder="Artist Name" required />
  <input type="url" bind:value={imageUrl} placeholder="Image URL" required />
  <textarea bind:value={description} placeholder="Description" required></textarea>
  <button type="submit">Submit</button>
</form>
