<script>
  const { onNewNote } = $props();
</script>

<button onclick={onNewNote}>Add note</button>

<style>
  button {
    min-height: 2em;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: #1183ca;
  }
  button:hover {
    background-color: #25a0ed;
  }
</style>
