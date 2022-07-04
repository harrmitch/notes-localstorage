<script>
  import { deleteNote, selected as selectedNote } from "../NotesAPI";

  export let note;

  let selected = false;
  $: selected = $selectedNote && $selectedNote.id == note.id ? true : false;

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this note?")) {
      deleteNote(note.id);
    }
  };
  const handleClick = (e) => {
    selected = true;
    selectedNote.set(note);
  };
</script>

<div
  class={selected ? "selected card" : "card"}
  on:click={handleClick}
  on:dblclick={handleDelete}
>
  <p class={selected ? "selected title" : "title"}>{note.title}</p>
  <p class={selected ? "selected body" : "body"}>{note.body}</p>
  <p class={selected ? "selected updated" : "updated"}>
    {new Date(note.updated).toLocaleString()}
  </p>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 5px;
  }
  .card.selected {
    background-color: #eeeeee;
  }
  .body,
  .title {
    overflow: hidden;
    line-height: 2em;
    max-height: calc(2em * 2);
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    margin: 0;
    border: 0;
  }
  .title {
    font-size: 1.25rem;
  }
  .updated {
    padding: 0;
    margin: 0;
    border: 0;
    text-align: end;
    font-style: italic;
    color: grey;
  }
  .selected {
    font-weight: bold;
  }
</style>
