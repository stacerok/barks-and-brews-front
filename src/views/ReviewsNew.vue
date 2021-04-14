<template>
  <div class="new-review">
    <form v-on:submit.prevent="submit()">
      <h1>New Review</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Review:</label>
        <input type="text" class="form-control" v-model="review" />
      </div>
      <div class="form-group">
        <label>Rating:</label>
        <input type="integer" class="form-control" v-model="rating" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      review: "",
      rating: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        review: this.review,
        rating: this.rating,
      };
      axios
        .post("/api/reviews", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/reviews");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
