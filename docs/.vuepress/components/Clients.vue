<template>
    <div>
        <h2 style="text-align: center;">使用 Cardinal 的团队及组织</h2>
        <br/>
        <div id="client">
            <a v-for="(c, i) in clients" :key="i" :href="c.link" target="_blank">
                <img :src="`/brand/${c.image}`"/>
            </a>
        </div>
        <br/>
    </div>
</template>

<script>

export default {
    data() {
        return {
            clients: [
                {
                    name: '齐鲁师范学院网络安全社团',
                    image: 'QLNU.jpg',
                    link: '',
                },

                {
                    name: 'CNC',
                    image: 'CNC.png',
                    link: 'https://cnc.poliupg.ac.id/'
                }
            ] 
        }
    },

    mounted(){
        
    },

    methods: {
      
    },

    components: {
        
    }
}
</script>

<style>
    #client img{
        max-height: 65px;
        background: #FFF;
        padding: 10px;
        margin-right: 10px;
        border: 1px solid #CCC;
        border-radius: 5px;
    }

    #client a{
        background: 0 0;
        color: #4183c4;
        text-decoration: none;
    }
</style>