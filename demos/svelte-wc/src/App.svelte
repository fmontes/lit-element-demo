<script>
  export let title;

  function changeHandler({ target: { value } }) {
    title = value;
  }
</script>

<style>
  :global(html),
  :global(body) {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .wcs {
    text-align: center;
  }
</style>

<img src="svelte-logo-vertical.svg" alt="Svelte Demo" />
<div class="wcs">
  <h3>{title || 'Will show when you type'}</h3>
  <app-textfield placeholder="Type something" on:change={changeHandler} />
  <app-button
    data={{ label: 'Show me', action: () => alert('Hello from Svelte') }} />
</div>
