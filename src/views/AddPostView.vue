<template>
    <div class="form">
        <h3>Add Post</h3>
        <label for="postbody">Body</label>
        <input type="postbody" name="postbody" required v-model="postbody">
        <button @click="AddPost" class="AddPost">Add</button>
    </div>
</template>
  
<script>
export default {
    name: "AddPost",

    data: function () {
        return {
            postbody: '',
        }
    },
    methods: {


        AddPost() {
            var data = {
                body: this.postbody,
            };
            // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
            fetch("http://localhost:3000/posts", {
                method: "POST",
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
    },
}
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



</style>