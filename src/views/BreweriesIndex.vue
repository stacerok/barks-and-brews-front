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
                      v-model="search"
                    />
                  </div>
                </div>

                <!-- <div class="form-group prepend-append col-md-5 col-lg-4">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Near</div>
                  </div>
                  <input type="text" class="form-control" placeholder="Location" />
                  <div class="input-group-append">
                    <span class="input-group-text" data-toggle="tooltip" data-placement="left" title="Find my location">
                      <i class="icon-listy icon-target" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div> -->

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
        <!-- <div class="search-result-bar mb-0">
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
        </div> -->

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
              <span class="d-block mb-4">Feature: {{ brewery.description }}</span>
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
      search: "",
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
