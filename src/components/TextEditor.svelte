<script>
  import { selected, saveNote } from "../NotesAPI";
  const handleBlur = () => {
    saveNote($selected);
  };
</script>

<div class="text-editor">
  {#if $selected}
    <input
      on:blur={handleBlur}
      class="title"
      type="text"
      placeholder="New Note"
      bind:value={$selected.title}
    />
    <textarea
      on:blur={handleBlur}
      class="body"
      cols="30"
      rows="10"
      bind:value={$selected.body}
    />
  {/if}
</div>

<style>
  .text-editor {
    display: flex;
    flex-direction: column;
    width: 75%;
    gap: 0;
    padding: 2em;
  }
  input {
    font-weight: bold;
    font-size: 3em;
    border: none;
    margin-bottom: 1em;
  }
  input:focus {
    font-weight: bold;
    font-size: 3em;
    outline: none;
    border-bottom: 1px solid grey;
    margin-bottom: 1em;
  }
  textarea {
    font-size: 1.5rem;
    border: none;
    outline: none;
  }
</style>
