<script>
  import { deleteNote, getSelected, setSelected } from "../notesApi.svelte.js";

  let { note } = $props();

  const selected = () => getSelected() && getSelected().id == note.id ? true : false;

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this note?")) {
      deleteNote(note.id);
    }
  };
  const handleClick = () => {
    setSelected(note)
  };
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div 
  class={selected() ? "selected card" : "card"}
  onclick={handleClick}
  ondblclick={handleDelete}
>
  <p class={selected() ? "selected title" : "title"}>{note.title}</p>
  <p class={selected() ? "selected body" : "body"}>{note.body}</p>
  <p class={selected() ? "selected updated" : "updated"}>
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
    line-clamp: 2;
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
