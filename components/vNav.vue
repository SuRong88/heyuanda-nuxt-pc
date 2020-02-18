<template>
    <section class="v-nav" :class="{ withBgc: show }">
        <h1 class="logo-box">
            <nuxt-link :style="'background-image: url(' + webInfo.website_logo_top + ');'" to="/" class="logo">{{ webInfo.website_name }}</nuxt-link>
        </h1>
        <ul class="list">
            <li v-for="item in navList">
                <a v-if="item.type == 4" :target="item.open == 0 ? '_blank' : ''" :href="item.value">{{ item.name }}</a>
                <nuxt-link v-else :target="item.open == 0 ? '_blank' : ''" :to="item.value">{{ item.name }}</nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
import URL from '~/plugins/url';
export default {
    props: {
        show: Boolean
    },
    created() {
        let that = this;
        this.$admin_base(
            [this.$get(URL.getNavList, { client: 1 })],
            [
                res => {
                    this.navList = res.data.header;
                    console.log(res.data);
                }
            ]
        );
    },
    computed: {
        webInfo() {
            return this.$store.state.webInfo;
        }
    },
    data() {
        return {
            navList: []
            // navList: [{
            //     link: '/',
            //     text: '首页'
            //   },
            //   {
            //     link: '/products',
            //     text: '公司产品'
            //   },
            //   {
            //     link: '/solutions',
            //     text: '解决方案'
            //   },
            //   {
            //     link: '/cases',
            //     text: '成功案例'
            //   },
            //   {
            //     link: '/about/profile',
            //     text: '关于我们'
            //   }
            // ]
        };
    }
};
</script>

<style></style>
