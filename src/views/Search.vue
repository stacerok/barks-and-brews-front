<template>
  <section
    class="banner"
    style="background-image: url('https://media-cdn.tripadvisor.com/media/photo-s/1c/af/fa/19/dogs-playing.jpg')"
  >
    <div class="container">
      <div class="row text-center align-items-center justify-content-center" style="height: 624px">
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
                    v-model="keyword"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                  />
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <button
                    @click.prevent="checkName"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Search
                  </button>
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
</template>
