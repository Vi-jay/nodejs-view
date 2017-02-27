<template>
    <div id="app">
        <div>hello</div>
        <router-view ref="compoents" class="viewItem"></router-view><!--在此显示路由后显示的内容-->
    </div>
</template>
<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" rel="stylesheet/less">
    @import "../static/commonLess/chartCommon";

    div {
        color: @nice-blue+ #111;
    }
</style>