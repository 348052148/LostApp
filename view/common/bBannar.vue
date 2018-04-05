<template>

    <div class="main" >

    <mt-tabbar v-model="selectetab">
        
            <mt-tab-item  id="tab1">
                <img slot="icon" src="../../assets/nav-icon-index.png">
                首页
            </mt-tab-item>
        
        
            <mt-tab-item id="tab2">
                <img slot="icon" src="../../assets/nav-icon-cat.png">
                分类
            </mt-tab-item>

           <mt-tab-item id="tab+">
                <img slot="icon" src="../../assets/nav-icon-cat.png">发布
            </mt-tab-item>
       
            <mt-tab-item id="tab3">
                <img slot="icon" src="../../assets/nav-icon-msg.png">
                消息
            </mt-tab-item>
       
        
            <mt-tab-item id="tab4">
                <img slot="icon" src="../../assets/nav-icon-user.png">
                个人中心
            </mt-tab-item>
        
    </mt-tabbar>

    </div>

</template>

<script>

    export default {
        name: 'bBannar',
        props:[
            'selected'
        ],
        data(){
            return {
              selectetab: 'tab1'
          };
        },
        created(){
          this.selectetab = this.selected;
        },
        watch: {
            selectetab: function (val, oldVal) {
                // 这里就可以通过 val 的值变更来确定
                if(val == 'tab1'){
                    this.$router.push({ path: '/' })
                }
                if(val == 'tab2'){
                    this.$router.push({ path: '/cat' })
                }
                if(val == 'tab3'){
                    this.$router.push({ path: '/msg' })
                }
                if(val == 'tab4'){
                    this.$router.push({ path: '/user' })
                }
                if(val == 'tab+'){
                    this.$router.push({ path: '/new' })
                }
            }
        }
    }

</script>

<style>
    .mint-tabbar{
        position:fixed;
    }
    .mint-tabbar > .mint-tab-item.is-selected {
        color: #43c3f2;
    }
</style>