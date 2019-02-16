<template>
  <section class="center">
    <div class="card">
      <h1 class="thick">Do I/O</h1>
      <input type="text" v-model="email" placeholder="Email address" class="input" required>
      <br>
      <input type="password" v-model="password" placeholder="Password" class="input" required>
      <br>
      <button @click="login" class="button">Enter</button>
      <p>
        <button @click="socialLogin" class="social-button">
          <font-awesome-icon :icon="['fab', 'google']"/>&nbsp;&nbsp;Google
        </button>
      </p>
    </div>
    <!-- <p>
      <router-link to="/signup">New Here? Create a new account</router-link>
    </p>-->
  </section>
</template>

<script lang="ts">
import firebase from "firebase";
import Vue from "vue";

const pageTitle = "Do I/O";

export default Vue.extend({
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.replace("");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    }
  },
  head: {
    title: {
      inner: pageTitle
    },
    meta: [
      {
        name: "description",
        content: "My description",
        id: "desc"
      },
      {
        name: "og:description",
        content: "My description",
        id: "og:desc"
      }
    ]
  }
});
</script>


<style>
input,
select {
  background-color: var(--blue);
}
button {
  background-color: var(--blue);
}
section {
  display: grid;
  justify-content: center;
  align-content: center;
  height: calc(100vh - 130px);
}
.social-button {
  padding: 0.25rem 1rem;
}
</style>