<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { formatDate } from "timeUtils";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  export let id; // document ID
  export let date;
  export let value;

  let format = "#{m}/#{d}/#{Y}";
</script>

<style>
  .btn {
    @apply font-bold rounded;
  }
  .btn-red {
    @apply bg-red-500 text-white;
  }
  .btn-red:hover {
    @apply bg-red-700;
  }

  li {
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
  }
  span {
    margin-right: auto;
  }
</style>

<!-- <div in:fly={{ x: 900, duration: 500 }} out:fade> -->
<div class="text-center">{formatDate(date.toDate(), format)}</div>
<div class="text-center">{Number(value).toFixed(1)}</div>
<div class="text-right">
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- svelte-ignore a11y-missing-content -->
  <button class="btn btn-red inline-flex items-center mt-1" on:click={remove}>
    <svg viewBox="0 0 20 20" fill="currentColor" class="minus w-4 h-4">
      <path
        fill-rule="evenodd"
        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
        clip-rule="evenodd" />
    </svg>
  </button>
</div>
<!-- </div> -->

<!-- <li in:fly={{ x: 900, duration: 500 }} out:fade>
  <span>{date}</span>
  <span>{value}</span>
  <a class="delete" on:click={remove} />
</li> -->
