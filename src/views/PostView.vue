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
  methods: {
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted(){
    this.fetchAPost(this.$route.params.id);
  }
};
</script>

<style scoped>

</style>