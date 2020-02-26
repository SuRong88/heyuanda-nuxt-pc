<template>
    <div class="solution-page solution-page08">
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
                结合虚拟化及电子化交易将成为大数据时代金融行业发展的趋势特征，基于和元达大数据分析平台，充分整合用户行为数据与业务数据，通过对用户网站浏览行为、APP使用行为、小程序使用行为以及用户的基础通信行为进行综合分析，助力企业培育自身的交叉销售、投资管理市场份额及能力等信息核心竞争力。
            </div>
            <img class="content-img" src="@/assets/images/solution/finance/t-img.png" alt="" />
            <div class="common-box01">
                <h2 class="box01-tit">应用场景</h2>
                <ul class="box01-ul flex flex-jcsb">
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/finance/t-icon01.png" alt="" /></div>
                            <p class="li-tit">信用卡潜在用户识别</p>
                        </div>
                        <div class="li-b">
                            基于客户身份特征、消费行为、位置信息、社交活动等核心大数据，有针对的清晰描绘出客户全息精准画像，以此为基础识别出有信用卡需求、有还款能力的用户，实现精准营销，提升投产比。
                        </div>
                    </li>
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/finance/t-icon02.png" alt="" /></div>
                            <p class="li-tit">风险管控</p>
                        </div>
                        <div class="li-b">
                            通过整合持卡人基本信息、卡基本信息、交易历史、客户历史行为模式、正在发生行为模式(如转账)等，利用和远达智能规则识别进行实时的交易反欺诈分析，有效及时的识别出风险行为。
                        </div>
                    </li>
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/finance/t-icon03.png" alt="" /></div>
                            <p class="li-tit">市场和渠道分析优化</p>
                        </div>
                        <div class="li-b">
                            通过融合用户的基础信息数据与行为数据，使得银行可以监控不同市场推广渠道尤其是网络渠道推广的质量，从而进行合作渠道的调整和优化。同时，也可以分析哪些渠道更适合推广哪类银行产品或者服务，从而进行渠道推广策略的优化。
                        </div>
                    </li>
                </ul>
            </div>
            <div class="common-box02">
                <h2 class="box02-tit">方案优势</h2>
                <ul class="box02-ul flex flex-wrap">
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/finance/t-icon04.png" alt="" />
                        <p class="li-txt">深度融合多方数据，挖掘数据价值</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/finance/t-icon05.png" alt="" />
                        <p class="li-txt">客户画像，助力精准营销与运营</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/finance/t-icon06.png" alt="" />
                        <p class="li-txt">掌握行为数据，完善风险质量</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/finance/t-icon07.png" alt="" />
                        <p class="li-txt">精准全面分析，提升用户体检</p>
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
            bannerTitle: '金融行业解决方案'
        };
    }
};
</script>

<style></style>
