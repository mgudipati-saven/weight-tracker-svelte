<script>
  import { auth, googleProvider } from "../firebase";
  import { authState } from "rxfire/auth";

  import Profile from "./Profile.svelte";
  import Weights from "./Weights.svelte";
  import Tabs from "../shared/Tabs.svelte";
  import Chart from "./Chart.svelte";

  // the user logged in
  let user;

  // subscribe to user auth state stream from firebase
  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  // function to login the user
  const login = () => {
    auth.signInWithPopup(googleProvider);
  };

  // tabs
  let items = ["Profile", "Weights", "Progress"];
  let activeItem = "Profile";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.1);
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
</style>

{#if user}
  <!-- <Tabs {items} {activeItem} on:tabChange={tabChange} /> -->
  <!-- {#if activeItem === 'Profile'} -->
  <div class="flex flex-col min-h-full items-stretch divide-y px-2 py-2">
    <Profile {user} />
    <Weights uid={user.uid} />
    <Chart uid={user.uid} />
  </div>
  <!-- {:else if activeItem === 'Weights'} -->
  <!-- {:else if activeItem === 'Progress'} -->
  <!-- {/if} -->
{:else}
  <div class="flex flex-col min-h-full items-center">
    <h3 class="text-4xl text-gray-800 text-center py-2">Weight Tracker</h3>
    <div class="border-b border-gray-400 w-1/2" />
    <div class="flex flex-col justify-center flex-grow">
      <button
        class="btn mx-auto btn-blue inline-flex items-center"
        on:click={login}>
        Signon with Google
        <svg viewBox="0 0 20 20" fill="currentColor" class="ml-2 w-6 h-6">
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0
            010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414
            1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
{/if}

<!-- <main class="flex justify-center pt-8">
    <h3 class="flex-none text-4xl text-gray-800 text-center">Weight Tracker</h3>
    <hr class="flex-none" />
    <div on:click={login} class="flex-grow h-1/2 is-block">
      Signon with Google
      <i class="fa fa-sign-in" aria-hidden="true" />
    </div>
  <div class="mb-8 text-white">
    <input
      id="search"
      type="text"
      class="form-input block w-full text-gray-800" />
    <div
      class="mt-4 w-128 max-w-lg font-sans overflow-hidden bg-gray-900
      rounded-lg shadow-lg">
      <div class="flex items-center justify-between px-6 py-8">
        <div class="flex items-center">
          <div>
            <div class="text-6xl font-semibold">8°C</div>
            <div>Feels like 2°C</div>
          </div>
          <div class="mx-5">
            <div class="font-semibold">Cloudy</div>
            <div>Toronto, Canada</div>
          </div>
        </div>
        <div>ICON</div>
      </div>

      <div class="text-sm bg-gray-800 overflow-hidden">
        {#each daily as item, index}
          <div
            class="flex items-center px-6 py-4"
            class:bg-gray-700={index % 2}>
            <div class="w-1/6 text-lg text-gray-200">DOW : {item}</div>
            <div class="flex items-center w-2/3 px-4">
              <div>ICON</div>
              <div class="ml-3">Cloudy with a chance of showers</div>
            </div>
            <div class="w-1/6 text-right">
              <div>5°C</div>
              <div>-2°C</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main> -->
