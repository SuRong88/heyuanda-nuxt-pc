<template>
    <div class="case-page case-page12">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner12">
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
                    中山大学肿瘤医院信息科管理系统是业务导向设计的管理系统，应用先进的信息技术将传统的浏览器应用系统与移动终端相融合，集网页、微信、手机短信为一体，消除时间和地域上的限制，用户随时随地管理各种业务，包括故障、任务、需求处理，假期管理、知识管理，接收系统推送的消息等，使业务处理更便捷，效率更高。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc">
                    “目前中山大学附属肿瘤医院信息科仍是采用传统的管理，不方便且效率低。因此，需要建设一个信息科管理系统，实现快速上报故障、更方便的接收用户建议，为用户提供更方便查阅的知识库和优化信息科内部的管理。”
                </p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc">中山大学肿瘤医院信息科管理系统的建设目的是提供一套成熟的信息管理系统，网页端协同微信端，方便客户随时处理工作事务。系统主要建设目标如下：</p>
                <ul class="common-list">
                    <li class="list-item">
                        <span class="label">1</span>
                        <p class="txt">故障管理，客户可以通过微信快速保障，同时在网页端批量处理故障。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">2</span>
                        <p class="txt">知识库，可方便积累和查询参见故障，业务流程，培训文档等企业内部知识。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">3</span>
                        <p class="txt">消息推送，可向企业员工推送各种微信消息。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">4</span>
                        <p class="txt">任务管理，可方便地进行任务分配和处理。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">5</span>
                        <p class="txt">任务管理，可方便地进行任务分配和处理。</p>
                    </li>
                </ul>
                <img class="img" src="@/assets/images/case/img24.png" alt="" />
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <img class="img" src="@/assets/images/case/img25.jpg" alt="" />
                <p class="sec04-txt">随着中山大学肿瘤医院信息科管理系统的建成并投入使用，中山大学附属肿瘤医院信息科摆脱了传统的管理方式，提高了工作效率。</p>
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
            bannerTitle: '中山大学附属肿瘤医院信息科管理系统'
        };
    },
    methods: {}
};
</script>

<style></style>
