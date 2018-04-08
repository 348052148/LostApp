<template>
    <div>
    <div  class="home">
        <div class="swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="swipe in model.swipe"  >
                    <img :src="swipe.pic" />
                </mt-swipe-item>
            
            </mt-swipe>
        </div>

        <mt-navbar  v-model="selected">
            <mt-tab-item id="1">寻物启事</mt-tab-item>
            <mt-tab-item id="2">招领启事</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container  v-model="selected"   >
        
        <mt-tab-container-item id="1"  >
            
            <div class="pingli" v-for="block in LF"  >
            <router-link :to="'/detail/'+block.id"   >
                <div class ="header"> 
                    <img style="border-radius:20px;" src="../../assets/avater.jpg" width="40" height="40" />

                    <div class='account' >
                        <span class="name" >{{block.publish.nickname}}</span><span class="time" >{{block.publish_time}}</span>
                    </div>

                    <div class="type">
                        <mt-badge size="small" color="#888" >{{block.type}}</mt-badge>
                    </div>
                </div>

                <div class="content"> {{block.content}} </div>
                <div class="images" > 
                    <img width="80" v-for="attachment in block.attachment" height="80" :src="attachment">
                </div>

                <div class='meta'><img height="14" src="../../assets/icon-map1.png" />{{block.address}} <span>浏览{{block.looks}}次</span></div>
            </router-link>
            </div>
            <infinite-loading @infinite="loadLFMore"></infinite-loading>
            
           
        </mt-tab-container-item>
        <mt-tab-container-item id="2"  >
           
           <div class="pingli" v-for="block in LT"  >
                <router-link :to="'/detail/'+block.id"   >
                <div class ="header"> 
                    <img style="border-radius:20px;" src="../../assets/avater.jpg" width="40" height="40" />

                    <div class='account' >
                        <span class="name" >{{block.publish.nickname}}</span><span class="time" >{{block.publish_time}}</span>
                    </div>

                    <div class="type">
                        <mt-badge size="small" color="#888" >{{block.type}}</mt-badge>
                    </div>
                </div>

                <div class="content"> {{block.content}} </div>
                <div class="images" > 
                    <img width="80" v-for="attachment in block.attachment" height="80" :src="attachment">
                </div>

                <div class='meta'><img height="14" src="../../assets/icon-map1.png" />{{block.address}} <span>浏览{{block.looks}}次</span></div>
                </router-link>
            </div>
            <infinite-loading @infinite="loadLTMore"></infinite-loading>
        </mt-tab-container-item>
        </mt-tab-container>
    </div>

    <bBannar selected='tab1' />
    
    </div>
</template>

<script>
    import bBannar  from '../common/bBannar.vue';
    import Api from '../../src/api.js'
    import InfiniteLoading from 'vue-infinite-loading';
    import { Indicator } from 'mint-ui';

    export default {
        components:{
            bBannar,
            InfiniteLoading
        },
        name: 'home',
        data:function(){
          return {
              searchVal:'123',
              selected: '1',
              loadingLF:true,
              loadingLT:true,
              list:[1,2,3,4],
              model:[],
              LF:[],
              LT:[],
              LTpage:1,
              LFpage:1,
              allLoaded:false
          };
        },
        created(){
                Api.request({api:'index',data:{}},(res)=>{
                    this.model = res.data;
                    this.loadLTMore();
                });
                

                Api.request({api:'navs',data:{}},(res)=>{
                    
                });

                // 处理 滚动事件
                var $ = require('jQuery');

                $(window).scroll(function(e) {
                   if($(window).scrollTop() >= 200){
                       $('.mint-navbar').addClass('is-fixed');
                       $('.home .mint-tab-container').css({marginTop:'49px'});
                   }else{
                       $('.mint-navbar').removeClass('is-fixed');
                       $('.home .mint-tab-container').css({marginTop:'0px'});
                   }
                });
        },
        methods:{
            loadLFMore($state) {
                if($state)
                        $state.loaded();
                Api.request({api:'posts',data:{publish_type:2,page:this.LFpage}},(res)=>{
                    if(res.code == 0){
                        for(var i=0;i<res.data.length;i++){
                            this.LF.push(res.data[i]);
                        }
                        this.LFpage++;
                    }else{
                        $state.complete();
                    }
                    
                });
                
            },
            loadLTMore($state){
                if($state)
                        $state.loaded();
                Api.request({api:'posts',data:{publish_type:1,page:this.LTpage}},(res)=>{
                    if(res.code == 0){
                        for(var i=0;i<res.data.length;i++){
                            this.LT.push(res.data[i]);
                        }
                        this.LTpage++;
                    }else{
                        $state.complete();
                    }
                    
                });
            }
        }
    }

</script>

<style>
    *{padding:0;margin:0;}
    a{
        text-decoration:none;
    }
    .home{
        background:#EEE;
        margin-bottom:5rem;
    }
   
    .swipe {
        height:12.5rem;
    
    }
    .mint-tab-container {

    }
    .mint-tab-container-wrap {
        margin-top:0.18rem;
    }
    .pingli {
        display:inline-block;
        height:auto;
        width:100%;
        background-color:#FFF;
        margin-bottom:0.18rem;
        padding:0.3125rem;
    }
    .pingli img{
        display:inline-block;
    }

    .pingli .header{
        width:100%;
        height:0.16rem;
        display:inline-block;
    }
    .pingli .header .account{
        width:100px;
        height:40px;
        display:inline-block;
    }
    .pingli .header .account .name{
        color:black;
        width:6.25rem;
        height:1.25rem;
        font-size:1rem;
        display:inline-block;
    }
    .pingli .header .account .time{
        width:6.25rem;
        height:1.25rem;
        font-size:0.8rem;
        color:#ccc;
        display:inline-block;
    }

    .pingli .header .type{
        width:4.375rem;
        height:2.5rem;
        display:inline-block;
        float:right;
    }

    .pingli .content{
        padding-top:1rem;
        padding-left:0.3rem;
        width:95%;
         font-size:0.8rem;
         color:black;
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
         
    }

    .pingli .images{
        display:inline-block;
        padding: 0.4rem 0.32rem;
        width:100%;
    }
    .pingli .images img{
        padding:0.2rem;
    }

    .pingli .meta{
        display:inline-block;
        width:100%;
        height:1.25rem;
        font-size:0.8375rem;
        margin-bottom:0.5rem;
        color:#ccc;
    }
    .pingli .meta img{
         display:inline-block;
         margin-right:0.15rem;
        vertical-align: middle;
        border:0;
    }
    .pingli .meta span {
        display:inline-block;
        float:right;
        margin-right:1rem;
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3px solid #43c3f2;
        color: #43c3f2;
        margin-bottom: -3px;
    }
</style>