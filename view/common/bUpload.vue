<template>

    <div class="upload" >
            <input type="file" @change="addImage(this)" id="upimg" style="display:none;" name="123" >
                <div class="upload_pic" @click="chooseFile">
                    <img width="70" height="70" src="../../assets/nav-icon-msg.png" />
                </div>

                <div v-for="(file,index) in files" class="upload_pic">
                    <img width="70" height="70" :src="file" />
                    <div  class="delete"><img @click="removeImage(index)" width="20" height="20" src="../../assets/close.png" ></div>
                </div>
    </div>

</template>

<script>
    export default {
        props:[
            'fileFormData'
        ],
        name: 'app',
        data:function(){
          return {
              files:[]
          };
        },
        methods:{
            removeImage(index){
                this.files.splice(index,1);
                this.fileFormData.splice(index,1);
            },
            chooseFile(){
                upimg.click();
            },
            dataURLtoFile(dataurl, filename) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new File([u8arr], filename, {type:mime});
            },
            dataURLtoBlob(dataurl) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], {type:mime});
            },
            addImage(source){
                // console.log($('#upimg').prop('files'));
                for (var i = 0;i < upimg.files.length;i++){
                    var file = upimg.files[0]
                    console.log(file);
                    var reader = new FileReader();//新建一个FileReader
                    //reader.readAsText(file, "UTF-8");//读取文件
                    reader.readAsDataURL(file);
                    reader.onloadend = (evt) => { //读取完文件之后会回来这里
                        var fileString = evt.target.result;
                        //post方式上传图片到控制器
                        this.files.push(fileString);
                        this.fileFormData.push(this.dataURLtoFile(fileString,file.name));
                        //this.formData.append('files'+Math.ceil(Math.random()*100),this.dataURLtoFile(fileString,file.name));
                    

                    }
                }
                
            }
        }
    }

</script>

<style>
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