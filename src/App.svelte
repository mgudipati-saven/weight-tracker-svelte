<script>
  import Login from "./components/Login.svelte";
</script>

<style>
  main,
  html,
  body {
    font-family: "Questrial", sans-serif;
    font-size: 14px;
    font-weight: 300;
    overflow-x: hidden;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />

  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

  <link
    href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
    rel="stylesheet" />
</svelte:head>

<main>
  <Login />
</main>
