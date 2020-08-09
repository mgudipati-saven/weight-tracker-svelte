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

</style>

<div class="content has-text-centered">
  <div class="columns is-mobile">
    <div class="column">
      <Datepicker
        format={dateFormat}
        bind:formattedSelected
        bind:selected={date}>
        <button class="button is-dark is-quarter">{formattedSelected}</button>
      </Datepicker>
    </div>
    <div class="column is-quarter">
      <input class="input" type="float" placeholder="New Weight" bind:value />
    </div>
    <div class="column">
      <button class="button is-primary" on:click={add}>ADD</button>
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Weight</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each $weights as wt}
        <WeightEntry {...wt} on:remove={removeEntry} />
      {/each}
    </tbody>
  </table>

  <!-- <ul>
    {#each $weights as wt}
      <WeightEntry {...wt} on:remove={removeEntry} />
    {/each}
  </ul> -->

</div>
