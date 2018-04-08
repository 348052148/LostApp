<template>

    <div class="indicator"  >
        <div class="indicator-wrapper">
            <div class="indicator-spin">
                <div class="spinner-snake" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;"></div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'app',
        data:function(){
          return {

          };
        }
    }

</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    .indicator{
        -webkit-transition: opacity .2s linear;
        transition: opacity .2s linear;
    }
    .indicator .indicator-wrapper {
        top: 50%;
        left: 50%;
        position: fixed;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        box-sizing: border-box;
        text-align: center;
    }
    .indicator .indicator-wrapper .indicator-spin {
    display: inline-block;
    text-align: center;
    }
    .indicator .indicator-wrapper .indicator-spin .spinner-snake {
        -webkit-animation: mint-spinner-rotate 0.8s infinite linear;
        animation: mint-spinner-rotate 0.8s infinite linear;
        border: 4px solid transparent;
        border-radius: 50%;
    }
    .indicator .indicator-mask{
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: transparent;
    }
</style>