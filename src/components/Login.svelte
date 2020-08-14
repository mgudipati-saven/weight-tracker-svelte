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
</style>

{#if user}
  <div class="flex flex-col min-h-full items-stretch divide-y px-2 py-2">
    <Profile {user} />
    <Weights uid={user.uid} />
    <Chart uid={user.uid} />
  </div>
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
