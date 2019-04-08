<template>
  <v-app class="primaryLight">
    <v-container>
      <v-toolbar
        flat
        class="transparent"
      >
        <!-- <div>
          <v-img
            :src="require('./assets/logo.svg')"
            contain
            height="60"
            width="60"
          ></v-img>
        </div> -->
        <p class="app-logo primary--text">movvz</p>
        <v-spacer></v-spacer>
        <router-link
          v-for="(item, index) in pages"
          v-bind:key="index"
          :to="{name: item.routeName}"
        >
          <p class="app-pages-title secondaryDark--text">{{ item.title }}</p>
        </router-link>
      </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      pages: [
        { title: 'Home', routeName: 'Home' },
        { title: 'Services', routeName: 'Services' },
        { title: 'About', routeName: 'About' },
        { title: 'Team', routeName: 'Team' }
      ]
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
.v-btn {
  text-transform: none;
}
.app-toolbar {
  padding: 0 100px;
  padding-top: 20px;
}
.app-logo {
  font-family: 'Itim', cursive;
  font-size: 40px;
  /* font-weight: 700; */
}
.app-pages-title {
  font-size: 20px;
  font-weight: 700;
  padding: 0 20px;
}
</style>
