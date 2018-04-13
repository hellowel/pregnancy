<template>
    <div>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="首页">
                <router-link to="/home">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="收藏">
                <router-link to="/fav">收藏</router-link>
            </mt-tab-item>
            <mt-tab-item id="历史记录">
                <router-link to="/history">历史记录</router-link>
            </mt-tab-item>
            <mt-tab-item id="设置">
                <router-link to="/config">设置</router-link>
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>
<script>
import { Tabbar, TabItem } from 'mint-ui';

export default{
    data(){
        return{
            selected:''
        }
    }
}



</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
html{
    background: #fff;
    font-size: 62.5%;
}
ul{
    list-style: none;
}
.mint-tabbar{
    /* height: 3rem; */
    background: #000;
}
.mint-tab-item{
    padding: 18px 0;
}
.mint-tab-item-label{
    font-size: 1rem;
}
.mint-tab-item-label a{
    text-decoration: none;
    color: #fff;
}
.mint-tabbar > .mint-tab-item.is-selected{
    background-color:rgba(255, 255, 255, .1);
    transition: all 0.4s;
    transform: translate3d(0px, 0px, 0px);
}

</style>
