<script>
  import { getSelected, saveNote } from "../notesApi.svelte.js";
  const handleBlur = () => {
    saveNote(getSelected());
  };
</script>

<div class="text-editor">
  {#if getSelected()}
    <input
      onblur={handleBlur}
      class="title"
      type="text"
      placeholder="New Note"
      value={getSelected().title}
      oninput={(e) => (getSelected().title = e.target.value)}
    />
    <textarea
      onblur={handleBlur}
      class="body"
      cols="30"
      rows="10"
      value={getSelected().body}
      oninput={(e) => (getSelected().body = e.target.value)}
></textarea>
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
