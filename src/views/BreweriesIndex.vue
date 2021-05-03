<template>
  <div class="main-wrapper">
    <section class="bg-light py-7 pt-md-10 pb-md-9">
      <div class="container">
        <div class="search-result-bar mb-0">
          <p>
            We found
            <span>8</span>
            results for
            <span>Restaurents</span>
            near
            <span>Shinn Street, NY</span>
          </p>
          <div class="ml-md-auto d-flex align-items-center justify-content-between">
            <div class="select-bg-transparent select-border">
              <select class="select-location">
                <option>Popular</option>
                <option>Nearest</option>
                <option>Recent</option>
              </select>
            </div>
            <div class="icons">
              <a class="mr-2" href="listing-grid-fullwidth-without-map.html">
                <i class="fa fa-th" aria-hidden="true"></i>
              </a>
              <a class="active" href="listing-list-fullwidth-without-map.html">
                <i class="fa fa-th-list" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="card card-list" v-for="brewery in breweries" v-bind:key="brewery.id">
          <div class="row">
            <div class="col-md-4 col-xl-3">
              <div class="card-list-img">
                <img v-bind:src="brewery.image" v-bind:alt="brewery.name" />
                <!-- <span class="badge badge-primary">Verified</span> -->
              </div>
            </div>

            <div class="col-md-8 col-xl-9">
              <div class="card-body p-0">
                <!-- <ul class="list-inline list-inline-rating">
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
                  </ul> -->

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
              <!-- <p class="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore et
                  dolore magna aliqua. Consectetur adipisicing elit, sed eiusmod tempor incididunt labore et dolore
                  magna aliqua.
                </p> -->
              <div>
                <router-link class="btn btn-primary" v-bind:to="`./breweries/${brewery.id}`">More Info...</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="card" v-for="brewery in breweries" v-bind:key="brewery.id">
          <div class="card-body">
            <h5 class="card-title">{{ brewery.name }}</h5>
            <p class="card-text">{{ brewery.address }}</p>
            <img v-bind:src="brewery.image" v-bind:alt="brewery.name" />
            <router-link class="btn btn-primary" v-bind:to="`./breweries/${brewery.id}`">More Info...</router-link>
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
};
</script>
