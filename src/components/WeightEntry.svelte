<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  export let id; // document ID
  export let date;
  export let value;
</script>

<style>
  li {
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
  }
  span {
    margin-right: auto;
  }
</style>

<li in:fly={{ x: 900, duration: 500 }} out:fade>
  <span>{date}</span>
  <span>{value}</span>
  <button class="is-button" on:click={remove}>🗑️</button>
</li>
