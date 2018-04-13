<template>
    <div>
        <div class="main">
            <mt-header fixed :title="title">
                <mt-button icon="back" slot="left" @click="fn">返回</mt-button>
                <img src="../../assets/img/scc.png" slot="right" @click="fav">
            </mt-header>

            {{content}}
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return {
            content:'',
            title:'',
            idx:'',
        }
    },
    methods:{
        fn(){
            this.$router.history.go(-1)
        },
        fav(){
            let path = this.$route.path
            let names = this.$route.query.names;
            let idx = this.$route.query.idx;
            let str="";
            let loca = "http://localhost:8080/#";
            str+=`${path}?names=${names}&idx=${idx}`
            var ls = localStorage;
            // ls.clear()
            
            
            var brr = JSON.parse(ls.getItem('f'))
            let shuju = {
                    path:str,
                    title:this.title
                }
            brr.push(shuju)
            console.log(brr)
            
            localStorage.setItem("f",JSON.stringify(brr))
            
            // if(brr.length != 0){

            //     brr.forEach(item=>{
            //         if((item.title)==(shuju.title)){
            //             alert("已经收藏过了")
            //         }else{
            //             brr.push(shuju)  
            //             localStorage.setItem("f",JSON.stringify(brr))
            //             alert("收藏成功")
            //         }

            //     })
            // }else{
            //     brr.push(shuju)
            //     localStorage.setItem("f",JSON.stringify(brr))
            // }
            

            
  
           
        }
    },
    mounted(){
        console.log(this.$route)
        var ls = localStorage;
        if(!ls.getItem("f")){
                var arr = ls.setItem('f','[ ]')
            }

        var names = this.$route.query.names
        var idx = this.$route.query.idx
        this.$http({
            url:'/list',
            methods:'get'
        }).then(res=>{
            this.content = res.data[names]['fenlei'][idx].content
            this.title = res.data[names]['fenlei'][idx].title
        })

    }
}






</script>
<style scoped>
.mint-header{
    background:  #900;
}
.main{
    margin-top: 40px;
}

</style>

