import { Indicator } from 'mint-ui';
var $ = require('jQuery');
class Api {

    constructor(){

    }


    static uploadFile(formData,api,callback){
        $.ajax({
            url:"http://sys.ismbao.com.cn/"+api.replace('.','/'),
            data:formData,
            timeout:1000,
            type:'POST',
            async:false,
            processData : false,
            contentType : false,
            dataType:'json',
            success:function(res){
                callback(res);
                console.log('REQUEST_END');
                
            },
            error:function(res){
                callback(res);
            }
        });
    }

    static request(obj,callback){
        obj.data.sid = this.getSid();
        let type = 'GET';
        if(obj.data.m == 'POST'){
            type = 'POST';
        }else{
            type = 'GET';
        }
        $.ajax({
            url:"http://sys.ismbao.com.cn/"+obj.api.replace('.','/'),
            data:obj.data,
            timeout:1000,
            type:type,
            async:false,
            dataType:'json',
            success:function(res){
                callback(res);
                console.log('REQUEST_END');
            },
            error:function(res){
                callback(res);
            }
        });
        
    }

    static setStorage(key,val){
        localStorage.setItem(key,JSON.stringify(val));
    }

    static getStorage(key){
        return JSON.parse(localStorage.getItem(key));
    }

    static clearStorage(){
        localStorage.clear();
    }

    static getSid(){
        return localStorage.getItem('sid');
    }
    
    static setSid(){
        this.request({api:'sids',data:{}},(res)=>{
            localStorage.setItem('sid',res.data.sid);
        });
    }

}

export default Api;