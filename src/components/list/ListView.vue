<template>
    <div>
        <mt-header :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        
        <ul>
            <li v-for="(item,index) in arr">
                <router-link :to="{ 
                    path: '/article',
                    query:{
                        names:id,
                        idx:index
                    }
                }" tag="div">
                <img :src="require('../../assets/img/tu/'+item.img)" alt="">
                {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import '../../mock/mock'
export default{
    data(){
        return {
            id:'',
            arr:[],
            title:'',
            oimg:''
        }
    },
    mounted(){
        
        this.$http({
            url:'/list',
            methods:'get'
        }).then(res=>{
            this.id = this.$route.params.id
            this.arr = res.data[this.id]['fenlei']
            this.title=res.data[this.id].home_title
            
            
        })
    }
}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
    margin-bottom: 48px;
}
ul li{
    height: 5rem;
    line-height: 5rem;
    background: pink;
    font-size: 1rem;
    border-bottom: 1px dashed #000;
}
ul li div img{
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
}
ul li div{
    width: 100%;
    display: flex; 
    /* justify-content: space-around; */
    text-decoration: none;
    color: #000;
}
</style>
