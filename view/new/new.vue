<template>

    <div  class='new' >
        <bHeader title="详细信息" />

        <div class="form">
            <mt-cell title="发布类型" @click.native="popup" is-link >
                <span >{{display_publish}}</span>
            </mt-cell>
            <bPopupSelect @change="getVal" @close="closeVal" :popupVisible="pvisible" :values="publish_type_arr" />

            <span class="DS"></span>

            <mt-cell title="物品类型" @click.native="popup1" is-link >
                <span >{{display_entity}}</span>
            </mt-cell>
            <bPopupSelect @change="getVal1"  @close="closeVal1" :popupVisible="pvisible1" :values="entity_class_arr" />

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

          
            <bUpload :fileFormData="fileData" />

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
    import bHeader  from '../common/bHeader.vue';
    import bPopupSelect  from '../common/bPopupSelect.vue';
    import bUpload  from '../common/bUpload.vue';
    import Api from '../../src/api.js';
    import { Toast,Indicator } from 'mint-ui';
    export default {
        components:{
            bPopupSelect,
            bHeader,
            bUpload
        },
        name: 'app',
        data:function(){
          return {
              files:[],
              formData:new FormData(),
              fileData:[],

              selected: 100,
              username:'',

              /** */
              pvisible:false,
              pvisible1:false,

              display_publish:'',
              display_entity:'',

              post:{amount:0.0},

              user:{},

              /**弹出选择 */
              publish_type:'',
              entity_class:'',
              /**发布类型 */
              publish_type_arr : [
              ],
              entity_class_arr: []
              /** */
              
          };
        },
        created(){
            this.user = Api.getStorage('user');
            if(!this.user){
                this.$router.push({ path: '/login' });
            }
            //初始化 分类
            Api.request({api:'categorys',data:this.post},(res)=>{
                if(res.code == 0){

                    this.entity_class_arr = res.data;
                        
                }
            });
            Api.request({api:'infos',data:this.post},(res)=>{
                if(res.code == 0){

                    this.publish_type_arr = res.data;
                        
                }
            });

        },
        methods: {
            submit(){

                for (const key in this.fileData) {
                    if (this.fileData.hasOwnProperty(key)) {
                       this.formData.append('file'+Math.ceil(Math.random()*100),this.fileData[key]);
                    }
                }

                for (const key in this.post) {
                    if (this.post.hasOwnProperty(key)) {

                         this.formData.append(key,this.post[key]);
                        
                    }
                }
                this.formData.append('puid',this.user.id);
                Api.uploadFile(this.formData,'/posts',(res)=>{
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
                
                this.post.publish_type = data.data.id;
                this.display_publish = data.data.name;
            },
            getVal1(data){
                this.pvisible1 = false;
                this.post.entity_class = data.data.id;
                this.display_entity = data.data.name;
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
         margin-bottom: 2rem;
        
    }
    .new .submit .sub{
        width:12rem;
        background:url('../../assets/title-bg.png');
        margin:0 auto;
        border-radius: 1.5rem;
    }


    .new .form .mint-cell {
        margin-top:2px;
     }

     .Label {
         margin-top:0;
         border: 1px solid #eee;
     }

    .new .form{
        margin-top: 2.88rem;
    }

     .new .form  .mint-cell:last-child{
        background:none;
     }

     .new .form  .mint-cell .mint-cell-wrapper{
         background:none;
         font-size:14px;
     }

     .Label .mint-field-core{
            border:1px solid #eee;
     }
    /* 上传图片样式*/
     .new .form .upload {
         display: inline-block;
         width: 100%;
         margin-top: 10px;
         margin-bottom: 10px;
         overflow: hidden;
     }
     .new .form .upload .upload_pic{
         display: inline-block;
         position: relative;
         height:70px;
         width: 70px;
         margin-left: 0.6rem;
         border: 1px solid #eee;
     }
     .new .form .upload .upload_pic img{
         width: 70px;
         height: 70px;
         position: absolute;
     }
     .new .form .upload .upload_pic .delete img{
          width: 10px;
         height: 10px;
         z-index: 10000;
        position: absolute;
        top:2px;
        left: 58px;
     }
</style>