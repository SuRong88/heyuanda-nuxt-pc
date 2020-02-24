<template>
    <section class="v-nav" :class="{ withBgc: show }">
        <h1 class="logo-box">
            <nuxt-link :style="'background-image: url(' + webInfo.website_logo_top + ');'" to="/" class="logo">{{ webInfo.website_name }}</nuxt-link>
        </h1>
        <ul class="list">
            <li v-for="(item, index) in navList" :key="index">
                <a v-if="item.type == 4" :target="item.open == 0 ? '_blank' : ''" :href="item.value">{{ item.name }}</a>
                <nuxt-link v-else :target="item.open == 0 ? '_blank' : ''" :to="item.value">{{ item.name }}</nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
import axios from '~/plugins/axios';
import URL from '~/plugins/url';
export default {
    props: {
        show: Boolean
    },
    created() {
        let that = this;
        axios.get(URL.getNavList, { client: 1 }).then(res=>{
            this.navList = res.data.data.header;
        });
    },
    computed: {
        webInfo() {
            return this.$store.state.webInfo;
        }
    },
    data() {
        return {
            navList: []
        };
    }
};
</script>

<style></style>
