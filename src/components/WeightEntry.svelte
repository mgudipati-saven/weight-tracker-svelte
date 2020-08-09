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
  li {
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
  }
  span {
    margin-right: auto;
  }
</style>

<tr in:fly={{ x: 900, duration: 500 }} out:fade>
  <td>{formatDate(date.toDate(), format)}</td>
  <td>{value}</td>
  <td>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-missing-content -->
    <a class="delete" on:click={remove} />
  </td>
</tr>

<!-- <li in:fly={{ x: 900, duration: 500 }} out:fade>
  <span>{date}</span>
  <span>{value}</span>
  <a class="delete" on:click={remove} />
</li> -->
