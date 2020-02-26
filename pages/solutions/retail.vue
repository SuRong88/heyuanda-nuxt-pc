<template>
    <div class="solution-page solution-page11">
        <v-nav :show="show"></v-nav>
        <div class="solution-banner solution-banner01 flex flex-ver">
            <h2 class="banner-title">{{ bannerTitle }}</h2>
        </div>
        <div class="content">
            <nuxt-link to="/solutions" tag="button" class="btn-back-list flex flex-ver flex-align-center">
                <img class="icon-img" src="@/assets/images/back-icon.png" alt="" />
                返回列表
            </nuxt-link>
            <h2 class="title">方案概述</h2>
            <div class="desc common-desc">
                基于和元达大数据分析平台，通过对业务数据进行统计分析以发掘数据内在价值，优化业务环节，提升客户体验和用户粘度。通过客户价值分析和用户画像，实现多渠道、精准化、深度服务体系。
            </div>
            <img class="content-img" src="@/assets/images/solution/retail/t-img.png" alt="" />
            <div class="common-box01">
                <h2 class="box01-tit">应用场景</h2>
                <ul class="box01-ul flex flex-jcsb">
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/retail/t-icon01.png" alt="" /></div>
                            <p class="li-tit">客户体验分析</p>
                        </div>
                        <div class="li-b">通过商品热度分析、访问时段分析、访问频次分析、访问偏好分析，还原客户体验状态，为优化业务环节，提升客户体验提供数据支撑。</div>
                    </li>
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/retail/t-icon02.png" alt="" /></div>
                            <p class="li-tit">客户价值分析（RFM模型）</p>
                        </div>
                        <div class="li-b">通过对客户最近一次的消费（Recency），消费频率（Frequency），消费金额（Monetary ）的分析建立RFM模型，为用户分群，实现精细化运营。</div>
                    </li>
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/retail/t-icon03.png" alt="" /></div>
                            <p class="li-tit">用户画像</p>
                        </div>
                        <div class="li-b">通过对客户进行多维度的分析，建设用户画像，全面了解客户的基本信息、行为习惯、消费偏好等，为精准营销，推荐系统做决策数据支撑。</div>
                    </li>
                </ul>
            </div>

            <div class="retail-con">
                <h2 class="con-title">应用价值</h2>
                <ul class="retail-val-box wrapper flex flex-jcsb">
                    <li class="val-item">
                        <img class="item-img" src="@/assets/images/solution/retail/img01.jpg" alt="" />
                        <div class="item-main">
                            <h3 class="item-tit">改进客户洞察</h3>
                            <p class="item-txt">
                                利用客户体验分析，能够直观呈现客户体验之旅，从而洞悉客户的整个购物流程并深入分析客户行为背后的原因，力求为客户提供流畅而愉悦的购物体验，打造更为顺畅的客户体验之旅。
                            </p>
                        </div>
                    </li>
                    <li class="val-item">
                        <img class="item-img" src="@/assets/images/solution/retail/img02.jpg" alt="" />
                        <div class="item-main">
                            <h3 class="item-tit">精准化营销</h3>
                            <p class="item-txt">通过对客户的全面了解，来进行精准营销活动，在合适的时间给客户推荐其有需求的商品，提升业务量。</p>
                        </div>
                    </li>
                    <li class="val-item">
                        <img class="item-img" src="@/assets/images/solution/retail/img03.jpg" alt="" />
                        <div class="item-main">
                            <h3 class="item-tit">个性化推荐</h3>
                            <p class="item-txt">实现客户在浏览、点击、购买等全流程中的个性化推荐。</p>
                        </div>
                    </li>
                </ul>
            </div>
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
            SEOInfo: {},
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
            bannerTitle: '新零售'
        };
    }
};
</script>

<style></style>
