<template>
      <div class="form">
        <h3>A Post</h3>
        <label for="postbody">Body</label>
        <input type="postbody" name="postbody" required v-model="post.body">
        <div class="container">
          <button @click="UpdatePost" class="UpdatePost center">Update</button>
          <button @click="DeletePost" class="DeletePost center">Delete</button>
        </div>
    </div>
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
      fetch(`http://localhost:3000/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    UpdatePost(){
      var data = {
                body: this.post.body,
            };
            // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
            fetch(`http://localhost:3000/posts/${this.post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    console.log(response.data);
                    // redirect to main page view
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });
    },
    DeletePost(){
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            console.log(response.data);
            // redirect to main page view
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });  
    }
  },
  mounted(){
    this.fetchAPost(this.$route.params.id);
  }
};
</script>

<style scoped>

h3 {
    text-align: center;
    color: rgb(8, 110, 110);
}

label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}
</style>