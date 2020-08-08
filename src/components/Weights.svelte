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
    db.collection("weights").doc(id).delete();
  }
</script>

<style>
  input {
    display: block;
  }
</style>

<Datepicker format={dateFormat} bind:formattedSelected bind:selected={date}>
  <button class="custom-button">{formattedSelected}</button>
</Datepicker>
<input type="float" bind:value />
<button class="custom-button" on:click={add}>ADD</button>

<ul>
  {#each $weights as wt}
    <WeightEntry {...wt} on:remove={removeEntry} />
  {/each}
</ul>

<button class="button is-info" on:click={add}>Add Weight</button>
