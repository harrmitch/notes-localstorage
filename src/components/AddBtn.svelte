<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("new-note")}>Add note</button>

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
