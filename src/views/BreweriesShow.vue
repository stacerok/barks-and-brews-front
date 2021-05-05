<template>
  <div class="breweries-show">
    <section class="py-7 pt-md-9 pb-md-8">
      <div class="container">
        <div class="d-md-flex flex-column flex-md-row justify-content-md-between align-items-end">
          <div class="mb-2 mb-md-0">
            <h1 class="single-listing-title">{{ brewery.name }}</h1>
            <p class="text-muted mb-1">
              <i class="fas fa-map-marker-alt text-primary mr-1"></i>
              {{ brewery.address }}
            </p>
            <p class="text-muted mb-1">
              <i class="fas fa-phone mr-3"></i>
              {{ brewery.phone }}
            </p>
            <p class="text-muted mb-1">
              <i class="fas fa-envelope mr-3"></i>
              <a :href="`mailto:${brewery.email}`" target="new window">{{ brewery.email }}</a>
            </p>
            <div class="d-flex align-items-center">
              <ul class="list-inline list-inline-rating mr-2">
                <li class="list-inline-item">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li class="list-inline-item">
                  <i class="far fa-star" aria-hidden="true"></i>
                </li>
              </ul>
              <span class="d-inline-block mr-2">(5 Reviews)</span>
              <button class="btn-like px-2" data-toggle="tooltip" data-placement="top" title="Favourite this listing">
                <i class="far fa-heart text-primary" aria-hidden="true"></i>
                <span>8 k</span>
              </button>
            </div>
          </div>
          <div>
            <a href="#add-review" class="btn btn-primary scrolling">Write a review</a>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-7 pb-4 pt-md-9 pb-md-8">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-lg-8">
            <!-- Listing Main Content -->
            <div class="single-listing-content mb-6">
              <h3 class="font-weight-normal mb-6">Features</h3>
              <p class="mb-6">{{ brewery.description }}</p>
            </div>

            <!-- Reviews -->
            <div class="my-6">
              <h3 class="font-weight-normal mb-6">Reviews</h3>
              <div class="media mb-3" v-for="review in brewery.reviews" v-bind:key="review.id">
                <div class="card-body">
                  <p class="card-text">
                    {{ review.review }}
                  </p>
                  <div v-if="$parent.getUserId() == review.user_id">
                    <router-link v-bind:to="`/reviews/${review.id}/edit`">Update Review</router-link>
                    <br />
                    <button v-on:click="destroyReview(review)">Delete Review</button>
                  </div>
                  <p class="card-text">
                    Rating:
                    {{ review.rating }}
                  </p>
                </div>
                <!-- <div class="media-body" v-for="review in reviews" v-bind:key="brewery.id"> -->
                <div class="media-body">
                  <div class="card-body">
                    <p class="card-title"></p>
                    <!-- <p class="card-text" v-bind:to="`./breweries/${brewery.id}`">{{ brewery.reviews_review }}</p> -->
                    <!-- <router-link class="btn btn-primary" v-bind:to="`./breweries/${brewery.id}`">
                      More Info...
                    </router-link> -->
                  </div>
                </div>
                <p>
                  <!-- {{ brewery.review }} -->
                </p>

                <!-- Reply Section -->
              </div>
              <hr />
            </div>

            <!-- Add Review -->
            <div class="my-6" id="add-review">
              <h3 class="font-weight-normal mb-6">Add Review</h3>
              <!-- <span class="star add-rating-default pl-0 mb-6"></span> -->
              <form v-on:submit.prevent="createReview()">
                <ul>
                  <li class="text-danger" v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </li>
                </ul>
                <div class="form-group mb-6">
                  <textarea class="form-control" rows="6" placeholder="Your review here" v-model="review"></textarea>
                  <br />
                  <input class="form-control" rows="6" placeholder="Rating 1-5" v-model="rating" />
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-primary" value="Submit" />
                </div>
              </form>
            </div>
          </div>

          <!--======= Sidebar ======= -->
          <div class="col-md-5 col-lg-4 pl-xl-8">
            <!-- Single listing Map -->
            <div class="map-sidebar border rounded mb-5">
              <div id="single-listing-map" data-lat="40.705793" data-lag="-74.006207"></div>
              <div class="px-6 py-5">
                <ul class="list-unstyled mb-0">
                  <li class="d-flex align-items-start">
                    <i class="fas fa-map-marker-alt mr-3 mt-1" aria-hidden="true"></i>
                    <span>{{ brewery.address }}</span>
                  </li>
                </ul>
              </div>
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
      brewery: [],
      errors: [],
    };
  },
  created: function () {
    this.showBreweries();
  },
  methods: {
    showBreweries: function () {
      axios.get("/api/breweries/" + this.$route.params.id).then((response) => {
        this.brewery = response.data;
        console.log("Selected Brewery:", this.brewery);
      });
    },
    createReview: function () {
      console.log("leaving a review!");
      var params = {
        brewery_id: this.brewery.id,
        review: this.review,
        rating: this.rating,
      };
      axios
        .post("/api/reviews/", params)
        .then(() => {
          this.$router.push("/breweries/" + this.$route.params.id);
        })
        .catch((error) => console.log(error.response));
    },
    destroyReview: function (review) {
      axios.delete("/api/reviews/" + review.id).then(() => {
        console.log("Review Deleted");
        this.$router.push("/breweries/" + this.$route.params.id);
      });
    },
  },
};
</script>
