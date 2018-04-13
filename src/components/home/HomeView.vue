<template>
    <div>
        <mt-header fixed title="孕育宝典"></mt-header>
        <div class="main">
            <ul>
                <router-link to="/list/yunqian" tag="li">
                    <img src="../../assets/img/pic1.png">
                </router-link>
                <router-link to="/list/yunzhong" tag="li">
                    <img src="../../assets/img/pic2.png">
                </router-link>
                <router-link to="/list/chanqian" tag="li">
                    <img src="../../assets/img/pic3.png">
                </router-link>
                <router-link to="/list/chanqian" tag="li">
                    <img src="../../assets/img/pic4.png">
                </router-link>
                <router-link to="/list/chanqian" tag="li">
                    <img src="../../assets/img/pic5.png">
                </router-link>
                <router-link to="/list/chanqian" tag="li">
                    <img src="../../assets/img/pic6.png">
                </router-link>
            </ul>
        </div>

    </div>
</template>
<script>
import { Header } from 'mint-ui';

</script>
<style scope>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
    margin-bottom: 50px;
}
.mint-header{
    background:  #900;
}
.main{
  margin-top: 40px;
  overflow: hidden;
}
ul li img{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 1rem;
}


</style>
