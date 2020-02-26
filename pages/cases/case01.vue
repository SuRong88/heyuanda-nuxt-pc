<template>
    <div class="case-page case-page01">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner01">
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
                    该市场调研公司，过往依赖线下招募志愿者填写问卷的方式进行市场调研。传统调研方式成本较高、覆盖范围小、回复率低，部分调研涉及的人群过于小众，很难通过线下募集。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc desc-center">“降低调研成本，提高调研覆盖范围和精准度，以及提高转化率。”</p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc desc-center">通过聚客易产品的精准短信，实现以下目标：</p>
                <ul class="sec03-main">
                    <li class="sec03-item flex flex-start">
                        <span class="label">1</span>
                        <p class="txt">通过运营商大数据，基于客户个人属性（性别、年龄段、职业等），结合客户上网行为（安装和使用app、登陆官网等行为），精准定义人群。</p>
                    </li>
                    <li class="sec03-item flex flex-start">
                        <span class="label">2</span>
                        <p class="txt">通过运营商通道发送短信，精准触达人群。</p>
                    </li>
                    <li class="sec03-item flex flex-start">
                        <span class="label">3</span>
                        <p class="txt">数据脱敏加密，保护客户个人隐私。</p>
                    </li>
                </ul>
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <div class="sec04-main flex flex-jcsb">
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img01.jpg" alt="" />
                        <p class="item-txt">短信点击率14%，成功转化率1.1%。</p>
                    </div>
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img02.jpg" alt="" />
                        <p class="item-txt">单个成功样本消耗的成本，低于传统调研。</p>
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
            bannerTitle: '市场精准调研'
        };
    },
    methods: {}
};
</script>

<style></style>
