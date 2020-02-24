<template>
    <div class="case-page case-page11">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner08">
            <h2 class="banner-title">{{ bannerTitle }}</h2>
        </div>
        <div class="content wrapper">
            <!-- 案例描述 -->
            <section class="sec sec01">
                <h3 class="common-tit">案例描述</h3>
                <p class="common-desc">
                    省排管系统是由广东省移动公司立项建设的一套全新排队管理解决方案，旨在对全省21个地市约1000间营业厅的排队机进行联网集中管理，并为客户提供全新的排队服务体验。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc desc-center">“目前广东移动各营业厅都有独立的排队机系统，无法统一调度和监控，主要存在以下问题：”</p>
                <ul class="common-list">
                    <li class="list-item">
                        <span class="label">1</span>
                        <p class="txt">排队流程单一，用户耗时长服务体验差</p>
                    </li>
                    <li class="list-item">
                        <span class="label">2</span>
                        <p class="txt">系统线下独立运行，无法与业务系统的整合</p>
                    </li>
                    <li class="list-item">
                        <span class="label">3</span>
                        <p class="txt">系统功能单一，不具备扩展能力差，模式陈旧</p>
                    </li>
                    <li class="list-item">
                        <span class="label">4</span>
                        <p class="txt">排队信息数据无法提取，无法进行统计分析以支持营业厅的运营</p>
                    </li>
                    <li class="list-item">
                        <span class="label">5</span>
                        <p class="txt">系统为封闭设计，营业人员无法进行功能调整，可维护性差</p>
                    </li>
                </ul>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc desc-center">实现排队的信息化、智能化，全面提升运营人员的工作效率。主要目标如下：</p>
                <ul class="common-list">
                    <li class="list-item">
                        <span class="label">1</span>
                        <p class="txt">实现线上排队服务，在空间和时间上延伸，增加用户粘度</p>
                    </li>
                    <li class="list-item">
                        <span class="label">2</span>
                        <p class="txt">实现灵活多变的排队方式，提高用户体验效果</p>
                    </li>
                    <li class="list-item">
                        <span class="label">3</span>
                        <p class="txt">简化和完善排队流程，操作简单易用</p>
                    </li>
                    <li class="list-item">
                        <span class="label">4</span>
                        <p class="txt">实时监控全省营业厅排队设备运行情况</p>
                    </li>
                    <li class="list-item">
                        <span class="label">5</span>
                        <p class="txt">统一排队信息管理，并对信息数据进行深度综合分析</p>
                    </li>
                    <li class="list-item">
                        <span class="label">6</span>
                        <p class="txt">支持一整套广告发布及营销支持方案</p>
                    </li>
                    <li class="list-item">
                        <span class="label">7</span>
                        <p class="txt">系统设备及业务系统的接口标准化</p>
                    </li>
                </ul>
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <p class="effect-desc">
                    目前系统的智能排队、运营监控、数据统计、广告发布、主动营销、线上预约等功能已得到充分的发挥，大大提升了营业人员的工作效率及客户的排队服务体验。
                </p>
                <img class="img" src="@/assets/images/case/img18.png" alt="" />
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
            bannerTitle: '营业厅排队管理系统'
        };
    },
    methods: {}
};
</script>

<style></style>
