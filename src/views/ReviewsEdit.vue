<template>
  <div class="reviews-edit">
    <form v-on:submit.prevent="updateReview(review)">
      <h1>Update Review</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Review:</label>
        <input type="text" class="form-control" v-model="review.review" />
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
      review: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/reviews/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.review = response.data;
    });
  },
  methods: {
    updateReview: function (review) {
      console.log("Updating a review!");
      var params = {
        review: review.review,
        rating: review.rating,
      };
      axios
        .patch("/api/reviews/" + this.$route.params.id, params)
        .then(() => {
          this.$router.push("/reviews/" + this.review.id);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
