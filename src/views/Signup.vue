<template>
  <div class="signup">
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
    <section
      class="py-7 py-md-10 bg-light height100vh"
      :style="{
        backgroundImage:
          'url(https://www.builderguru.com/wp-content/uploads/2021/03/20210226_Bark-Social_0186-1500x1176.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'bottom',
      }"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-xl-7">
            <div class="bg-white p-5 rounded border">
              <h2 class="font-weight-normal mb-4">Account Registration</h2>
              <p>
                Please fill out the fields below to create your account. If you already have an account, please
                <a href="/">click here</a>
                .
              </p>

              <form class="py-7" action="#" v-on:submit.prevent="submit()">
                <div class="form-group">
                  <label for="inputText">Full Name*</label>
                  <input type="text" class="form-control" v-model="name" />
                </div>
                <div class="form-group mb-8">
                  <label for="inputAddress">Email Address*</label>
                  <input type="email" class="form-control" v-model="email" />
                </div>
                <div class="row mb-6">
                  <div class="form-group col-md-6 mb-4">
                    <label for="inputPassword">Password*</label>
                    <input type="password" class="form-control" v-model="password" />
                  </div>
                  <div class="form-group col-md-6 mb-4">
                    <label for="inputPassword">Password (re-type)*</label>
                    <input type="password" class="form-control" v-model="passwordConfirmation" />
                  </div>
                </div>

                <div class="form-group mb-6">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" />
                      I agree to the
                      <a href="terms-of-services.html">Terms of Use</a>
                      &amp;
                      <a href="#">Privacy Policy</a>
                      .
                    </label>
                  </div>
                </div>

                <input type="submit" class="btn btn-primary" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
