<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import AddWeightForm from "./components/AddWeightForm.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import Chart from "./Chart.svelte";

  // tabs
  let items = ["Weights", "Progress"];
  let activeItem = "Weights";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  let data = [
    {
      x: new Date("08/01/2020"),
      y: 1,
    },
    {
      x: new Date("08/02/2020"),
      y: 2,
    },
    {
      x: new Date("08/03/2020"),
      y: 1,
    },
    {
      x: new Date("08/04/2020"),
      y: 3,
    },
    {
      t: new Date("08/05/2020"),
      y: 1,
    },
  ];
</script>

<style>
  main {
    max-width: 480px;
    margin: 40px auto;
  }
</style>

<Header />

<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === 'Weights'}
    <AddWeightForm />
  {:else if activeItem === 'Progress'}
    <Chart {data} />
  {/if}
</main>

<Footer />
