<template>
<header>
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav5">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxtLink to="/" class="nav-link">Home </nuxtLink>
          </li>
        </ul>


        <ul class="navbar-nav justify-content-end ml-auto" v-if="!$auth.loggedIn">
          <li class="nav-item">
            <nuxtLink to="/authentication/login" class="nav-link">Log In</nuxtLink>
          </li>
        </ul>

        <nuxt-link class="btn btn-primary ml-md-3" to="/authentication/register" v-if="!$auth.loggedIn">Register</nuxt-link>
        <nuxt-link class="btn btn-primary ml-md-3" to="/authentication/dashboard" v-if="$auth.loggedIn">Dashboard</nuxt-link>
        <button type="button" @click="$auth.logout()" class="btn ml-md-3" v-if="$auth.loggedIn">Logout</button>
      </div>
    </nav>
  </div>
</header>
</template>

<style lang="scss" scoped src="./index.scss" />


.header {
    position: fixed;
    top: 0;
    background: red;
    width: 100%;
    height: 40px;
}
