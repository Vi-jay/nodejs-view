<template>
    <div>
        <transition name="fade" v-for="i,index in list">
        <div class="item" :class="i"  ref="items"></div>
        </transition>
        <button class="button" v-on:click.stop="change">button</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                flag: true,
                list: ['item1', 'item2', 'item3', 'item4', 'item5']
            }
        },
        created(){

        },
        methods: {
            change(ele){
                let items=this.$refs.items;
                items[4].style.width='0px';
                items[1].style.opacity=1;
//                if (this.flag)
//                    this.$refs.index.setAttribute('class', 'fadeOut');
//                this.$refs.body.setAttribute('class', 'fadeIn');
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../static/commonLess/chartCommon";

    @leftPosition: 40%;
    @background-image-size: 200px, 200px;
    @image-names: "item1.png", "item2.png", "item3.png", "item4.png", "item5.png";
    .item {
        position: fixed;
        opacity: 0;
        top: 0;
        left: @leftPosition;
        width: extract(@background-image-size, 1);
        height: extract(@background-image-size, 2);
        background: wheat;
        transition: all 1s;
        &.item1 {
            background: data-uri(extract(@image-names, 1));
            z-index: 1;
            &.fade-enter, &.fade-leave-active,&.fade-leave {
            }
        }
        &.item2 {
            background: data-uri(extract(@image-names, 2));
            z-index: 2;
        }
        &.item3 {
            background: data-uri(extract(@image-names, 3));
            z-index: 3;
        }
        &.item4 {
            background: data-uri(extract(@image-names, 4));
            z-index: 4;
        }
        &.item5 {
            opacity: 1;
            background: data-uri(extract(@image-names, 5));
            z-index: 5;
            background-size: extract(@background-image-size, 1);
        }

    }


</style>
