<template>
    <div class="case-page case-page03">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner03">
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
                <p class="common-desc">
                    该互联网应用监测公司，通过SDK或深入调研的模式采集样本，进行互联网应用（小程序、app等）活跃度监测。通过SDK采集客户个体数据，需要客户授权，否则风险很大。同时，采集的数据受到操作系统版本等多种因素的限制，导致样本数据偏差性很大。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc desc-center">“降低数据采集风险，减少样本偏差，能及时地获取到稳定、准确的基础数据。”</p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <!-- <p class="tar-desc">通过聚客易产品的精准广告投放，实现以下目标：</p> -->
                <ul class="sec03-main">
                    <li class="sec03-item flex flex-start">
                        <span class="label">1</span>
                        <p class="txt">基于运营商大数据，通过DPI等技术实现业务行为的识别，包括APP和小程序的识别、监测，为该公司提供基础数据服务。</p>
                    </li>
                    <li class="sec03-item flex flex-start">
                        <span class="label">2</span>
                        <p class="txt">该公司负责提供解析规则，并隐藏业务目标。</p>
                    </li>
                    <li class="sec03-item flex flex-start">
                        <span class="label">3</span>
                        <p class="txt">我司负责DPI数据的解析，保障基础数据的准确性和稳定性。</p>
                    </li>
                </ul>
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <p class="effect-desc desc-center">该公司及时获得了稳定、准确的业务监测所需基础数据。</p>
                <img class="img" src="@/assets/images/case/img05.png" alt="" />
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
            bannerTitle: 'APP/小程序监测'
        };
    },
    methods: {}
};
</script>

<style></style>
