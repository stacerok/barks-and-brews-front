<template>
  <div class="reviewsindex">
    <div class="container">
      <div class="row" v-for="review in reviews" v-bind:key="review.id">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ review.brewery_name }}</h5>
              <p class="card-text">Rating: {{ review.rating }}</p>
              <router-link v-bind:to="`reviews/${review.id}`">
                <button type="button" class="btn btn-secondary">More Info...</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      reviews: [],
    };
  },
  created: function () {
    this.indexReviews();
  },
  methods: {
    indexReviews: function () {
      axios.get("/api/reviews").then((response) => {
        this.reviews = response.data;
        console.log("All Reviews:", this.reviews);
      });
    },
  },
};
</script>
