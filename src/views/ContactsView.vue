<template>
<div id="content">
    <div class="sideBox"></div>
  <div class="contacts">
    <h1>Contact us using these media types:</h1>
    <hr>
    <p><strong>Email</strong>: example@example.com</p>
    <p><strong>Phone</strong>: +372 55555555</p>
    <p><strong>Fax</strong>: +372 66666666</p>
  </div>
   <div class="sideBox"></div>
</div>
</template>

<style scoped>

.contacts{
  text-align: left;
  margin-left: 2em;
  margin-right: 2em;
  background-color: #87C4FF;
  border-radius: 1em 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 1em;
}
#content {
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  text-align: center;
}

</style>
