<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="card" v-for="brewery in breweries" v-bind:key="brewery.id">
          <div class="card-body">
            <h5 class="card-title">{{ brewery.name }}</h5>
            <p class="card-text">{{ brewery.address }}</p>
            <router-link class="btn btn-primary" v-bind:to="`./breweries/${brewery.id}`">More Info...</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>

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
