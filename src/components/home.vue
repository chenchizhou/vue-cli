<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../images/menu1.png" alt />
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../images/menu2.png" alt />
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../images/menu4.png" alt />
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../images/menu4.png" alt />
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../images/menu5.png" alt />
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../images/menu6.png" alt />
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          console.log(result);
          if (result.data.status === 0) {
            this.lunboList = result.data.message;
          }
        });
    }
  }
};
</script>

<style lang='less' scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}

.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border:none;
  li{
      background-color: #fff;
      border:none;  
    img{
          width: 60px;
          height: 60px;
        }
  }
}
</style>
