<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  div {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>

<div class="columns is-mobile">
  {#each items as item}
    <div
      on:click={() => dispatch('tabChange', item)}
      class="column"
      class:active={item === activeItem}>
      {item}
    </div>
  {/each}
</div>
