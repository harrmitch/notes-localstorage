<script>
  import { v4 as uuid } from "uuid";

  import AddBtn from "./AddBtn.svelte";
  import NoteCard from "./NoteCard.svelte";
  import { getNotesDB, saveNote } from "../notesApi.svelte.js";

  const newNoteHandler = () => {
    saveNote({ id: uuid(), title: "New Note", body: "Begin noting..." });
  };
</script>

<div class="side-panel">
  <AddBtn onNewNote={newNoteHandler} />
  {#each getNotesDB() as note}
    <NoteCard {note} />
  {/each}
</div>

<style>
  .side-panel {
    display: flex;
    flex-direction: column;
    width: 25%;
    min-height: 100vh;
    padding: 1em;
    border-right: 3px solid grey;
    overflow-y: auto;
  }
</style>
