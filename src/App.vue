<style src="./sass/main.scss" lang="scss"></style>

<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="grid__row grid--center">
          <div class="grid__col">
            <div class="logo">
              <router-link to="/" exact>
                <h3>DeveloperNews.io</h3>
              </router-link>
            </div>
          </div>
          <div class="grid__col">
            <nav class="main-menu">
              <router-link to="/frontend-news">Front End News</router-link>
            </nav>
          </div>
          <div class="grid__col">
            <div class="live-videos">
              <p>Live Videos</p>
            </div>
          </div>
          <div class="grid__col">
            <div class="devnews-actions">
              <p>Actions</p>
            </div>
          </div>
        </div>

      </div>
    </header>

    <side-menu></side-menu>

    <router-view></router-view>
  </div>
</template>

<script>

import SideMenu from './components/Sidemenu.vue'

export default {
  name: 'app',
  components: {SideMenu}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
