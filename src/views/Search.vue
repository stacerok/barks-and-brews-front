<template>
  <!-- <div class="main-wrapper"> -->
  <section class="py-7 py-md-10">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="card card-list" v-for="brewery in filteredBreweries" v-bind:key="brewery.id">
            <div class="row">
              <div class="col-sm-5">
                <div class="card-list-img">
                  <img v-bind:src="brewery.image" v-bind:alt="brewery.name" />
                </div>
              </div>
              <div class="col-sm-7">
                <div class="card-body p-0">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <h3 class="card-title mb-0">{{ brewery.name }}</h3>
                    <button
                      class="btn-like px-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Favourite this listing"
                    >
                      <i class="far fa-heart text-primary" aria-hidden="true"></i>
                      <span>8 k</span>
                    </button>
                  </div>
                </div>
                <span class="d-block mb-4">{{ brewery.address }}</span>
                <p class="mb-4">Features: {{ brewery.description }}</p>
                <div>
                  <router-link class="btn btn-primary" v-bind:to="`./breweries/${brewery.id}`">
                    More Info...
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <section class="my-5"></section>
        </div>

        <div class="col-lg-4 pl-xl-6">
          <div class="mb-6">
            <label class="mb-4 h5 font-weight-normal text-dark" for="enter-keyowrd">What are you looking for?</label>
            <input
              type="text"
              class="form-control"
              v-model="searchValue"
              id="search-input"
              placeholder="outdoor, food, etc."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      breweries: [],
      searchValue: "",
    };
  },
  created: function () {
    this.indexBreweries();
  },
  methods: {
    indexBreweries: function () {
      axios.get("/api/breweries").then((response) => {
        this.breweries = response.data;
        console.log("All breweries:", this.breweries);
      });
    },
  },
  computed: {
    filteredBreweries() {
      let tempReviews = this.breweries;

      // Process search input
      if (this.searchValue != "" && this.searchValue) {
        tempReviews = tempReviews.filter((item) => {
          return (
            item.description.toUpperCase().includes(this.searchValue.toUpperCase()) ||
            item.address.toUpperCase().includes(this.searchValue.toUpperCase())
          );
        });
      }
      return tempReviews;
    },
  },
};
</script>
