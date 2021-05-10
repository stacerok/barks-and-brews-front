<template>
  <section
    class="py-7 py-md-10 bg-light"
    :style="{
      backgroundImage:
        'url(https://www.builderguru.com/wp-content/uploads/2021/03/20210226_Bark-Social_0186-1500x1176.jpg)',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'bottom',
    }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="card">
            <form v-on:submit.prevent="submit()">
              <div class="bg-primary text-center py-4">
                <h2 class="text-white mb-0 h4">Members Log In</h2>
                <ul>
                  <li class="text-danger" v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </li>
                </ul>
              </div>
              <div class="card-body px-7 pt-7 pb-0">
                <div class="form-group mb-7">
                  <label for="exampleInputText">Email</label>
                  <input type="text" class="form-control" v-model="email" aria-describedby="emailHelp" required />
                  <!-- <em>Enter your Foundation username.</em> -->
                </div>
                <div class="form-group mb-7">
                  <label for="exampleInputPassword1">Password*</label>
                  <input type="password" class="form-control" v-model="password" />
                  <!-- <em>Enter the password that accompanies your username.</em> -->
                </div>
                <div class="form-group d-flex justify-content-between align-items-center mb-7">
                  <input type="submit" class="btn btn-primary" value="Submit" />
                  <!-- <a href="#FogotPassword">Fogot Password?</a> -->
                </div>
              </div>
              <div class="card-footer bg-transparent text-center py-3">
                <p class="mb-0">
                  Not a member yet?
                  <a href="/signup" class="link">Sign up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);

          this.$router.push("/breweries");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
