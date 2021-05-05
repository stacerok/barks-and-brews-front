<template>
  <div class="main-wrapper">
    <section
      class="banner"
      style="background-image: url('https://media-cdn.tripadvisor.com/media/photo-s/1c/af/fa/19/dogs-playing.jpg')"
    >
      <div class="container">
        <div class="row text-center align-items-center justify-content-center" style="height: 100px">
          <div class="col-12">
            <!-- Banner Info -->
            <div class="banner-info">
              <h1 class="text-uppercase text-white mb-4">barks and brews</h1>
              <p class="lead text-white">Search for dog friendly breweries and restaurants in Maryland</p>
            </div>

            <!-- Search Box -->
            <div class="search-box-2">
              <form class="form-row justify-content-center" method="GET" action="listings-half-screen-map-list.html">
                <div class="form-group col-md-5 col-lg-4">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Find</div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="beer garden, outdoor, food..."
                      v-model="searchValue"
                      id="search-input"
                    />
                  </div>
                </div>
                <!-- <div class="form-group col-md-3 col-lg-2">
                  <button type="submit" class="btn btn-block btn-primary">
                    Search
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </button>
                </div> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light py-7 pt-md-10 pb-md-9">
      <div class="container">
        <div class="card card-list" v-for="brewery in filteredBreweries" v-bind:key="brewery.id">
          <div class="row">
            <div class="col-md-4 col-xl-3">
              <div class="card-list-img">
                <img v-bind:src="brewery.image" v-bind:alt="brewery.name" />
              </div>
            </div>

            <div class="col-md-8 col-xl-9">
              <div class="card-body p-0">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <h3 class="card-title mb-0">{{ brewery.name }}</h3>
                  <!-- <button
                      class="btn-like px-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Favourite this listing"
                    >
                      <i class="far fa-heart text-primary" aria-hidden="true"></i>
                      <span>8 k</span>
                    </button> -->
                </div>
              </div>
              <span class="d-block mb-4">{{ brewery.address }}</span>
              <span class="d-block mb-4">Feature: {{ brewery.description }}</span>
              <div>
                <router-link class="btn btn-primary" v-bind:to="`./breweries/${brewery.id}`">More Info...</router-link>
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
          return item.description.toUpperCase().includes(this.searchValue.toUpperCase());
        });
      }
      return tempReviews;
    },
  },
};
</script>
