<script>
  import { db } from "../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  import WeightEntry from "./WeightEntry.svelte";
  import Datepicker from "./Datepicker.svelte";

  let dateFormat = "#{M} #{j}, #{y}";
  let formattedSelected;
  let value;
  let date;

  export let uid;

  const query = db
    .collection("weights")
    .where("uid", "==", uid)
    .orderBy("date");

  const weights = collectionData(query, "id").pipe(startWith([]));

  function add() {
    db.collection("weights").add({
      uid,
      date,
      value,
    });
  }

  function removeEntry(event) {
    const { id } = event.detail;
    console.log(id);
    db.collection("weights").doc(id).delete();
  }
</script>

<style>
  .btn {
    @apply font-bold py-2 px-2 rounded;
  }
  .btn-gray {
    @apply bg-gray-500 text-white;
  }
  .btn-gray:hover {
    @apply bg-gray-700;
  }
  .btn-green {
    @apply bg-green-500 text-white;
  }
  .btn-green:hover {
    @apply bg-green-700;
  }
</style>

<div class="flex items-center space-x-4 py-2">
  <Datepicker format={dateFormat} bind:formattedSelected bind:selected={date}>
    <button class="btn btn-gray">{formattedSelected}</button>
  </Datepicker>
  <input
    class="flex-grow shadow appearance-none border rounded py-2 px-3
    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="float"
    placeholder="New Weight"
    bind:value />

  <button class="btn btn-green inline-flex items-center" on:click={add}>
    <svg viewBox="0 0 20 20" fill="currentColor" class="plus w-6 h-6">
      <path
        fill-rule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0
        110-2h3V6a1 1 0 011-1z"
        clip-rule="evenodd" />
    </svg>
  </button>
</div>

<div class="grid grid-cols-3 gap-1 divide-y">
  <th>Date</th>
  <th>Weight</th>
  <th>Actions</th>
  {#each $weights as wt}
    <WeightEntry {...wt} on:remove={removeEntry} />
  {/each}
</div>

<!-- <ul>
    {#each $weights as wt}
      <WeightEntry {...wt} on:remove={removeEntry} />
    {/each}
  </ul> -->
