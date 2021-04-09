<template>
  <div class="breweries-show">
    <div class="container">
      <!-- <div v-for="post in posts" v-bind:key="post.id"> -->
      <h3>{{ brewery.name }}</h3>
      <p>{{ brewery.address }}</p>
      <p>{{ brewery.phone }}</p>
      <p>{{ brewery.email }}</p>
      <p>
        {{ brewery.website }}
      </p>
      <p>{{ brewery.description }}</p>
      <br />
      <!-- <router-link v-bind:to="`/breweries/${brewery.id}/edit`">More info...</router-link> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      brewery: {},
    };
  },
  created: function () {
    this.showBreweries();
  },
  methods: {
    showBreweries: function () {
      axios.get("/api/breweries/" + this.$route.params.id).then((response) => {
        this.brewery = response.data;
        console.log("All Breweries:", this.brewery);
      });
    },
  },
};
</script>
