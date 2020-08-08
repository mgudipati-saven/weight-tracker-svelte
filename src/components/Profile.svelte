<script>
  import { auth } from "../firebase";

  export let user;
</script>

<h3 class="title has-text-black">Welcome {user.displayName}!</h3>
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
</div>
