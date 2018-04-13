<template>
    <div>
        <mt-header fixed title="孕育宝典">

            <mt-button icon="back" slot="left" @click="fn">返回</mt-button>
        </mt-header>
        

        <div class="main">
            <div v-for="item in data">

                <router-link :to="{
                    path:item.path
                }">

                    {{item.title}}
                </router-link>
            </div>
            
            
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            data:'',
            path:'',
            title:''
        }
    },
    methods:{
        fn(){
            this.$router.history.go(-1)
        }
    },
    mounted(){
     
        var ls = localStorage;
        let data = JSON.parse(ls.getItem("f"))
        this.data = data
        // this.data.forEach(item => {
        //     this.path = item.path
        //     this.title = item.title
        // });
        console.log(this.data)
      

    }
    
}

</script>
<style scope>
.mint-header{
    background:  #900;
}
.main{
    margin-top: 40px;
}
.red{
    color: red;
}

</style>