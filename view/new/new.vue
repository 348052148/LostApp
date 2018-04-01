<template>

    <div  class='new' >
        <mt-header title="详细信息">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>

        <div class="form">
            <mt-cell title="发布类型" @click.native="popup" is-link >
                <span >{{publish_type}}</span>
            </mt-cell>
            <bPopupSelect @change="getVal" @close="closeVal" :popupVisible="pvisible" :classSlots="publish_type_arr" />


            <mt-field label="丢失时间" type="date" placeholder="" v-model="username"></mt-field>
            <mt-cell title="物品类型" @click.native="popup1" is-link >
                <span >{{entity_class}}</span>
            </mt-cell>
            <bPopupSelect @change="getVal1"  @close="closeVal1" :popupVisible="pvisible1" :classSlots="entity_class_arr" />
      

            <mt-field label="选择地点" placeholder="" v-model="username"></mt-field>
            <mt-field label="详细地址" placeholder="" v-model="username"></mt-field>
            <mt-cell  title="物品描述" >
            </mt-cell>
            <mt-field type="textarea" rows="5" placeholder="" v-model="username"></mt-field>
            
            <mt-field label="丢失时间" placeholder="" v-model="username"></mt-field>

            <mt-field label="赏金" placeholder="" v-model="username"></mt-field>

        </div>

        <div class="submit">
            <mt-button class="sub" type="primary">确定发布</mt-button>
        </div>
    </div>

</template>

<script>
    import bPopupSelect  from '../common/bPopupSelect.vue';
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
        methods: {
            /**组件 */
            closeVal(){
                 this.pvisible = false;
            },
            closeVal1(){
                 this.pvisible1 = false;
            },
            getVal(data){
                this.pvisible = false;
                this.publish_type = data.data;
            },
            getVal1(data){
                this.pvisible1 = false;
                this.entity_class = data.data;
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
    .mint-popup{
        width:100%;
        background:#FFF;
    }
    .mint-header{
        height:2.875rem;
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
</style>