<template>
  {{$route.params}}
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "PostView",
  components: {
  },
   data: function() {
    return {
    post:[ ],
    authResult: auth.authenticated()
    }
  },
};
</script>

<style scoped>

</style>