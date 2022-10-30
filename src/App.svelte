<script>
  import { onMount } from "svelte";
  import { getAllNotes } from "./NotesAPI";

  import SidePanel from "./components/SidePanel.svelte";
  import TextEditor from "./components/TextEditor.svelte";

  import global from "./global.css";

  onMount(() => {
    getAllNotes();
    alert(
      "Instruction:\nCLICK 'New notes' to ADD notes.\nCLICK OUTSIDE the text editor to SAVE.\nCLICK on any note in the panel to EDIT.\nDOUBLE CLICK on any note in the panel to DELETE."
    );
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
