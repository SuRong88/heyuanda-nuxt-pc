<template>
    <div class="case-page case-page02">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner02">
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
                    该广告公司，过往使用流量平台自身标签库进行人群筛选，同行业基于同一套规则争抢客户，导致获客成本高或曝光不足。品牌主不愿提供过往正样本，无法做人群扩展。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc desc-center">“跨平台多维度获取客户信息，降低获客成本。”</p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc desc-center">通过聚客易产品的精准广告投放，实现以下目标：</p>
                <ul class="sec03-main">
                    <li class="sec03-item flex flex-start">
                        <span class="label">1</span>
                        <p class="txt">基于运营商大数据，从多个维度进行人群筛选。从多个维度获取客户，包括竞品维度、价值维度（付费行为）、平台相似度等等。</p>
                    </li>
                    <li class="sec03-item flex flex-start">
                        <span class="label">2</span>
                        <p class="txt">对品牌主过往投放广告的正样本进行监测，获取正样本后，上传至流量平台进行人群扩展。</p>
                    </li>
                </ul>
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <div class="sec04-main flex flex-jcsb">
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img03.jpg" alt="" />
                        <p class="item-txt">曝光量提升。</p>
                    </div>
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img04.jpg" alt="" />
                        <p class="item-txt">经过不断调优，获客成本不断降低。</p>
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
            bannerTitle: '广告精准投放'
        };
    },
    methods: {}
};
</script>

<style></style>
