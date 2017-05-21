<template>
  <aside class="sidemenu">
    <nav class="sidemenu__nav">
        <a href="#" v-on:click="test"><i class="material-icons">whatshot</i></a>
        <a href="#"><i class="material-icons">bookmark_border</i></a>
        <a href="#"><i class="material-icons">notifications</i></a>
    </nav>
    <div class="sidemenu__content">
      <div class="sidemenu__hot">

      </div>
      <div class="sidemenu__notifications">

      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'side-menu',
    methods: {
      test () {
        console.log(this)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .sidemenu{
    display: flex;
    position: absolute;
    right: 10px;
    top: 30%;
    &__nav{
      display: flex;
      flex-direction: column;
    }
  }
</style>
