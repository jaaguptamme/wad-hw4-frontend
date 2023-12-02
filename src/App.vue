<template>
  <nav class="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <router-view/>
  <div class="footer"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2e7d5a;
}

.footer, .header, .sideBox, .about, .content{
  background-color: #39A7FF;
  border-radius: 1em 1em;
  margin: 0.5em;
  padding: 1em;
}
p, a, button{
  font-size: 1.5em;
}
</style>
