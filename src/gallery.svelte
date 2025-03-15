<script>
  let artPieces = JSON.parse(localStorage.getItem('artPieces')) || [];
</script>

<h2>Gallery</h2>
<div>
  {#each artPieces as artPiece}
      <div class="art-piece">
          <img src={artPiece.imageUrl} alt={artPiece.title} />
          <h3>{artPiece.title}</h3>
          <p>by {artPiece.artist}</p>
          <p>{artPiece.description}</p>
      </div>
  {/each}
</div>

<style>
  .art-piece {
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 10px;
      padding: 10px;
      display: inline-block;
      width: 200px;
  }
  .art-piece img {
      width: 100%;
      height: auto;
  }
</style>
