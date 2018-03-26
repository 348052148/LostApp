<template>

    <div class="main" >

    <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
            <img slot="icon" src="../../assets/nav-icon-index.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" src="../../assets/nav-icon-index.png">
            分类
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" src="../../assets/nav-icon-index.png">
            消息
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" src="../../assets/nav-icon-index.png">
            个人中心
        </mt-tab-item>
    </mt-tabbar>

    </div>

</template>

<script>

    export default {
        name: 'bBannar',
        data:function(){
          return {
              selected: 100
          };
        }
    }

</script>

<style>
    .mint-tabbar{
        position:fixed;
    }
</style>