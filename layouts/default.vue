<template>
    <div><nuxt /></div>
</template>
<script>
import axios from '~/plugins/axios';
import URL from '~/plugins/url';
export default {
    components: {},

    head() {
        return {
            title: this.$store.state.webInfo.website_name,
            link: [
                {
                    rel: 'shortcut icon',
                    // type: 'image/x-icon',
                    href: this.$store.state.webInfo.website_icon
                }
            ]
        };
    },
    
    created() {
        // console.log('default');
        axios.get(URL.getWebInfo).then(res=>{
            // console.log('ssr')
            // console.log(res.data.data);
            this.$store.commit('SET_WEBINFO', res.data.data);
        })
    },

    computed: {},

    mounted() {}
};
</script>

<style></style>
