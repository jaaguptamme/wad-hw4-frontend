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
.form{
 max-width: 420px;
  margin: 30px auto;
  background: #87C4FF;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

button {
    background: rgb(8, 110, 110);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    align-items: center;
    text-align: center;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: blue;
}

p, a, button{
  font-size: 1.5em;
}
</style>
