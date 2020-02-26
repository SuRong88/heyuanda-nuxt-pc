<template>
    <div class="solution-page solution-page06">
        <v-nav :show="show"></v-nav>
        <div class="solution-banner solution-banner06 flex flex-ver">
            <h2 class="banner-title">{{ bannerTitle }}</h2>
        </div>
        <div class="content wrapper">
            <nuxt-link to="/solutions" tag="button" class="btn-back-list flex flex-ver flex-align-center">
                <img class="icon-img" src="@/assets/images/back-icon.png" alt="" />
                返回列表
            </nuxt-link>
            <section class="sec-box01">
                <h2 class="title">方案概述</h2>
                <div class="desc desc-center">通过集群应用、集中管理、多租户、资源按需动态分配等方式提供安 全可靠的云备份服务</div>
                <img class="box-img" src="@/assets/images/solution/fuwuq @4x.png" alt="" />
            </section>
            <section class="sec-box02">
                <h2 class="title">方案内容</h2>
                <div class="desc">
                    通过集群应用、网络技术和分布式文件系统等功能， 将大量各种不同类型的存储设备通过TVI备份一体机整合起来，共同对外提供数据 存储备份和备份数据快速访问的功能服务。
                </div>
                <img class="box-img" src="@/assets/images/solution/fuwuq.jpg" alt="" />
                <div class="desc desc-center mt40">集中管理模块(Global Manager),可以实现统一的, 跨数据中心，跨地域，跨云的集中管理。</div>
                <img class="box-img" src="@/assets/images/solution/fuwuq.jpg" alt="" />
            </section>
            <section class="sec-box03">
                <h2 class="title">多租户模式</h2>
                <ul class="box03-ul flex flex-jcsb">
                    <li class="box03-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon10.png" alt="" />
                        <p class="box-desc">多租户模式是物理集中、逻辑区分</p>
                    </li>
                    <li class="box03-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon11.png" alt="" />
                        <p class="box-desc">多租户以组织为单位，将存储资源、被保护应用、虚拟磁盘、用户等以组织逬 行逻辑划分</p>
                    </li>
                    <li class="box03-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon12.png" alt="" />
                        <p class="box-desc">Role Based Access Control (RBAC)机制提供用户权限管理</p>
                    </li>
                    <li class="box03-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon13.png" alt="" />
                        <p class="box-desc">可对租户的传输带宽进行控制</p>
                    </li>
                </ul>
            </section>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import axios from '~/plugins/axios';
import URL from '~/plugins/url';
import vNav from '@/components/vNav.vue';
import vFooter from '@/components/vFooter.vue';
export default {
    components: {
        vNav,
        vFooter
    },
    layout: function(context) {
        return 'default02';
    },
    head() {
        return {
            title: this.SEOInfo.seo_title,
            meta: [
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.SEOInfo.seo_keyword
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.SEOInfo.seo_desc
                }
            ]
        };
    },
    async asyncData({ route, app }) {
        let seoKey = route.path;
        let [Res] = await Promise.all([
            axios.get(URL.getSEOInfo, {
                params: {
                    name: seoKey
                }
            })
        ]).catch(err => {
            console.log(err);
        });
        return {
            SEOInfo: Res.data.data
        };
    },
    mounted() {
        // 导航栏显示背景颜色,fixed
        this.$fixHeader(this, 370);
    },
    data() {
        return {
            SEOInfo: {},
            // 导航栏是否显示背景颜色
            show: false,
            bannerTitle: '云备份解决方案'
        };
    }
};
</script>

<style></style>
