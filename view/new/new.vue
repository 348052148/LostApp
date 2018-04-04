<template>

    <div  class='new' >
        <mt-header title="详细信息">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>

        <div class="form">
            <mt-cell title="发布类型" @click.native="popup" is-link >
                <span >{{post.publish_type}}</span>
            </mt-cell>
            <bPopupSelect @change="getVal" @close="closeVal" :popupVisible="pvisible" :classSlots="publish_type_arr" />

            <span class="DS"></span>

            <mt-cell title="物品类型" @click.native="popup1" is-link >
                <span >{{post.entity_class}}</span>
            </mt-cell>
            <bPopupSelect @change="getVal1"  @close="closeVal1" :popupVisible="pvisible1" :classSlots="entity_class_arr" />

            <span class="DS"></span>

            <mt-field label="丢失时间" type="date" placeholder="" v-model="post.date"></mt-field>
      
            <span class="DS"></span>

            <mt-field label="选择地点" placeholder="" v-model="post.address"></mt-field>

            <span class="DS"></span>

            <mt-field label="详细地址" placeholder="" v-model="post.addressDetail"></mt-field>
            <span class="DS"></span>

            <mt-cell  title="物品描述" >
            </mt-cell>
            <mt-field class="Label" type="textarea" rows="5" placeholder="" v-model="post.content"></mt-field>
            
            <span class="DS"></span>

            <mt-field label="赏金" placeholder="" v-model="post.amount"></mt-field>

            <span class="DS"></span>

        </div>

        <div class="submit">
            <mt-button @click="submit" class="sub" type="primary">确定发布</mt-button>
        </div>
    </div>

</template>

<script>
    import bPopupSelect  from '../common/bPopupSelect.vue';
    import Api from '../../src/api.js'
    import { Toast } from 'mint-ui';
    export default {
        components:{
            bPopupSelect  
        },
        name: 'app',
        data:function(){
          return {
              selected: 100,
              username:'',

              /** */
              pvisible:false,
              pvisible1:false,

              post:{},

              user:{},

              /**弹出选择 */
              publish_type:'',
              entity_class:'',
              /**发布类型 */
              publish_type_arr : [
                  {
                    flex: 1,
                    values: ['失物招领', '寻物启事'],
                    className: 'slot1',
                    textAlign: 'center'
                }
              ],
              entity_class_arr: [
                {
                flex: 1,
                values: ['钱包', '手机', '银行卡', '交通卡', '物体', '钱'],
                className: 'slot1',
                textAlign: 'center'
                }
              ]
              /** */
              
          };
        },
        created(){
            this.user = Api.getStorage('user');
            if(!this.user){
                this.$router.push({ path: '/login' });
            }
        },
        methods: {
            submit(){
                
                this.post.m = 'POST';
                this.post.puid = this.user.id;
                Api.request({api:'posts',data:this.post},(res)=>{
                    if(res.code == 0){
                        Toast({
                        message: res.message,
                        position: 'middle',
                        duration: 1000
                        });
                         this.$router.push({ path: '/detail/'+res.data.id });
                    }
                    if(res.code == -1){
                        Toast({
                        message: res.message,
                        position: 'middle',
                        duration: 1000
                        });
                    }
                });
            },
            /**组件 */
            closeVal(){
                 this.pvisible = false;
            },
            closeVal1(){
                 this.pvisible1 = false;
            },
            getVal(data){
                this.pvisible = false;
                this.post.publish_type = data.data;
            },
            getVal1(data){
                this.pvisible1 = false;
                this.post.entity_class = data.data;
            },
            popup(){
                this.pvisible = true;
                console.log(this.popupVisible);
            },
             popup1(){
                 this.pvisible1 = true;
             }
        },
    }

</script>

<style>
    *{padding:0;margin:0;}
    .DS{
        display:block;
        width:100%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .mint-popup{
        width:100%;
        background:#FFF;
    }
    .mint-header{
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }

    /**popup-picker */
    .popup-picker{

    }
    .popup-picker .status{
        display:inline-block;
        width:100%;
        height:2rem;
    }
    .popup-picker .status .cancel{
        float:left;
        margin-left:0.5rem;
         margin-top:0.5rem;
    }
    .popup-picker .status .sure{
        float:right;
         margin-right:0.5rem;
         margin-top:0.5rem;
    }

    /** */
    .new .submit {
        display:inline-block;
        width:100%;
        text-align:center;
        margin-top:2rem;
    }
    .new .submit .sub{
        width:12rem;
        margin:0 auto;
    }


    .new .form .mint-cell {
        margin-top:5px;
     }

     .Label {
         margin-top:0;
     }

     .new .form  .mint-cell:last-child{
        background:none;
     }

     .new .form  .mint-cell .mint-cell-wrapper{
         background:none;
         font-size:14px;
     }
</style>