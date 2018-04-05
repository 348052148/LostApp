import { Indicator } from 'mint-ui';
var $ = require('jQuery');
class Api {

    constructor(){

    }

    static request(obj,callback){
        
        
        obj.data.sid = this.getSid();
          
        $.ajax({
            url:"http://sys.ismbao.com.cn/"+obj.api.replace('.','/'),
            data:obj.data,
            timeout:1000,
            type:'GET',
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