<script>
  import { onMount } from "svelte";
  import { getAllNotes } from "./NotesAPI";

  import SidePanel from "./components/SidePanel.svelte";
  import TextEditor from "./components/TextEditor.svelte";

  import global from "./global.css";

  onMount(() => {
    getAllNotes();
  });
</script>

<div class="notes">
  <SidePanel />
  <TextEditor />
</div>

<style>
  .notes {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100%;
  }
</style>
