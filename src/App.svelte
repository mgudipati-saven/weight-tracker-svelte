<script>
  import Login from "./components/Login.svelte";
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

  <link
    href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
    rel="stylesheet" />
</svelte:head>

<main class="bg-gray-100 h-screen max-w-sm mx-auto">
  <Login />
</main>
