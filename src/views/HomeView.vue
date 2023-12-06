<template>
  <div id="content">
    <div class="sideBox"></div>
    <div id="Posts">
      <button v-if = "authResult" @click="Logout">Logout</button>
      <div @click='this.$router.push("/post/"+post.id)' class="PostText" v-for="post in posts" :key="post.id">
        <div class="topRow">
        <p>{{ post.date }}</p>
        </div>
        <p class="text">{{post.body}}</p>
        <div class="bottomRow">
        </div>
      </div>
      <div id="botButtons">
        <button @click='this.$router.push("/addpost/")'>Add Post</button>
        <button>Delete All</button>
      </div>
    </div>
    <div class="sideBox"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import auth from '../auth';
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data: function() {
    return{
      posts:[ ],
      authResult: auth.authenticated()
    }
  }, methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  },
  mounted(){
    fetch('http://localhost:3000/posts')
    .then((response)=>response.json())
    .then(data=> this.posts=data.posts)
    .catch(err=>console.log(err.message))
  }
  
}
</script>
<style scoped>
#content{
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    text-align: center;
  }

@media(max-width: 800px) {
    .sideBox{
        display: none;
    }
    #content{
        grid-template-columns: 1fr;
    }
}
#Posts{
        margin-left: 2em;
        margin-right: 2em;
    }
    .PostText{
        text-align: left;
    }
    #botButtons{
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .PostText{
        background-color: #87C4FF;
        border-radius: 1em 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        padding: 1em;
    }
     .topRow{
       text-align: right;
    }
</style>
