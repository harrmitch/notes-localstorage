<script>
  import { v4 as uuid } from "uuid";

  import AddBtn from "./AddBtn.svelte";
  import NoteCard from "./NoteCard.svelte";
  import { notesDB, saveNote, deleteNote } from "../NotesAPI";
  import { onMount } from "svelte";

  const newNoteHandler = () => {
    saveNote({ id: uuid(), title: "New Note", body: "Begin noting..." });
  };
</script>

<div class="side-panel">
  <AddBtn on:new-note={newNoteHandler} />
  {#each $notesDB as note}
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
