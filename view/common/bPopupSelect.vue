<template>

    <div  >
        <mt-popup
                 class="popup-picker" 
                v-model="popupVisible"
                position="bottom">
                <div class="status">
                    <mt-button class="cancel" size="small" @click.native="popupClose" type="danger">取消</mt-button>
                    <mt-button class="sure" size="small" @click.native="popupSure"  type="primary">确认</mt-button>
                </div>
                <mt-picker :slots="classSlots" @change="onValuesChange"></mt-picker>
        </mt-popup>
    </div>

</template>

<script>

    export default {
        name: 'app',
        props:[
            'popupVisible',
            'classSlots'
        ],
        data:function(){
          return {
              popupCurrentVal:'123',
          };
        },
        methods:{
            popupClose(){
                this.$emit("close",{data:''});
            },
            popupSure(){
                this.displayVal = this.popupCurrentVal;
                this.$emit("change",{data:this.popupCurrentVal});
            },
            onValuesChange(picker, values) {
                    picker.setSlotValue(1, values[0]);
                    this.popupCurrentVal = values[0];
            }
        }
    }

</script>

<style>
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
</style>