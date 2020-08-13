<script>
  import { auth } from "../firebase";

  export let user;
</script>

<style>
  .btn {
    @apply font-bold py-2 px-2 rounded;
  }
  .btn-red {
    @apply bg-red-500 text-white;
  }
  .btn-red:hover {
    @apply bg-red-700;
  }
  .avatar {
    margin-top: 5px;
    padding-bottom: 5px;
  }
  .avatar img {
    padding: 1px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.1);
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
</style>

<!-- <h3 class="title has-text-black">Welcome</h3>
<h3 class="subtitle has-text-black">{user.displayName}!</h3>
<hr class="login-hr" />
<div class="box">
  <figure class="avatar">
    <img src={user.photoURL} alt="User Avatar" />
  </figure>
  <button
    on:click={() => auth.signOut()}
    class="button is-block is-danger is-large is-fullwidth">
    Signout
    <i class="fa fa-sign-out" aria-hidden="true" />
  </button>
</div> -->
<div class="flex items-center space-x-4">
  <div class="h-12">
    <img
      class="inline-block h-12 w-12 rounded-full text-white shadow-solid px-1
      py-1"
      src={user.photoURL}
      alt="User Avatar" />
  </div>
  <div class="flex-grow text-xl text-center">{user.displayName}</div>
  <button
    class="btn btn-red inline-flex items-center"
    on:click={() => auth.signOut()}>
    <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
      <path
        fill-rule="evenodd"
        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0
        001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1
        1 0 100 2h7.586l-1.293 1.293z"
        clip-rule="evenodd" />
    </svg>
  </button>
</div>
