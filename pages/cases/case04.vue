<template>
    <div class="case-page case-page04">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner04">
            <h2 class="banner-title">{{ bannerTitle }}</h2>
        </div>
        <div class="content wrapper">
            <nuxt-link to="/cases" tag="button" class="btn-back-list flex flex-ver flex-align-center">
                <img class="icon-img" src="@/assets/images/back-icon.png" alt="" />
                返回列表
            </nuxt-link>
            <!-- 案例描述 -->
            <section class="sec sec01">
                <h3 class="common-tit">案例描述</h3>
                <p class="common-desc desc-center">某广告监测平台，过往通过虚拟机或SDK获得广告素材，存在素材收集不全，广告曝光、点击、转化数据皆依赖抽样，无法准确量化等问题。</p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc desc-center">“全面收集广告素材，对营销漏斗各个环节进行量化。”</p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc desc-center">基于运营商大数据，对广告素材进行监测：</p>
                <img class="img" src="@/assets/images/case/img06.png" alt="" />
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <div class="sec04-main flex flex-jcsb">
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img07.jpg" alt="" />
                        <p class="item-txt">获得广告素材、落地页、转化下载页，并对营销漏斗的各个环节进行量化。便于广告监测平台对全局广告的投放情况进行把控。</p>
                    </div>
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img08.jpg" alt="" />
                        <p class="item-txt">不需要通过SDK监测便获得全局数据。</p>
                    </div>
                </div>
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
    mounted() {
        // 导航栏显示背景颜色,fixed
        this.$fixHeader(this, 370);
    },
    data() {
        return {
            SEOInfo: {},
            // 导航栏是否显示背景颜色
            show: false,
            bannerTitle: '广告素材及营销漏斗监测'
        };
    },
    methods: {}
};
</script>

<style></style>
