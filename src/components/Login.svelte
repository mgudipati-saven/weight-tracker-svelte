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
  .hero.is-success {
    background: #f2f6fa;
  }
  .hero .nav,
  .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
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
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }

  .login-hr {
    border-bottom: 1px solid black;
  }

  .has-text-black {
    color: black;
  }

  .field {
    padding-bottom: 10px;
  }

  .fa {
    margin-left: 5px;
  }
</style>

<section class="hero is-fullheight">
  <div class="hero-head">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        {#if user}
          <Tabs {items} {activeItem} on:tabChange={tabChange} />
          {#if activeItem === 'Profile'}
            <Profile {user} />
          {:else if activeItem === 'Weights'}
            <Weights uid={user.uid} />
          {:else if activeItem === 'Progress'}
            <Chart uid={user.uid} />
          {/if}
        {:else}
          <h3 class="title has-text-black">Weight Tracker Login</h3>
          <hr class="login-hr" />
          <div class="box">
            <button
              on:click={login}
              class="button is-block is-info is-large is-fullwidth">
              Signon with Google
              <i class="fa fa-sign-in" aria-hidden="true" />
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
