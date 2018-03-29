class Api {

    constructor(){

    }

    request(obj,callback){
        var $ = require('jQuery');
        $.ajax({
            url:"http://sys.ismbao.com.cn/"+obj.api,
            data:obj.data,
            timeout:1000,
            type:'GET',
            async:false,
            dataType:'json',
            success:function(res){
                callback(res);
            },
            error:function(res){
                callback(res);
            }
        })
    }
}

export default Api;