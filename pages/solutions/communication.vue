<template>
    <div class="solution-page solution-page10">
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
                基于和元达大数据分析平台，打破运营商数据孤岛，贯通通信业务数据与行为业务数据，运用网站统计分析、APP数据分析、小程序数据分析等领域的数据分析方法，进行深入的用户行为分析,挖掘新的增长点。
            </div>
            <img class="content-img" src="@/assets/images/solution/communication/t-img.png" alt="" />
            <div class="common-box01">
                <h2 class="box01-tit">应用场景</h2>
                <ul class="box01-ul flex flex-jcsb">
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/communication/t-icon01.png" alt="" /></div>
                            <p class="li-tit">存量客户价值流失预警分析</p>
                        </div>
                        <div class="li-b">
                            针对运营商存量用户离网流失问题，通过对用户的基本信息、通信信息、账户信息、交往圈信息、客户异常行为等综合分析，运用回归分析模型，对潜在用户进行识别预判，及时有效识别存量客户的流失倾向以及流失原因，进行对应的挽留与保有工作，降低存量客户流失率。
                        </div>
                    </li>
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/communication/t-icon02.png" alt="" /></div>
                            <p class="li-tit">万能副卡潜在用户识别分析</p>
                        </div>
                        <div class="li-b">
                            经过数据探索以及模型优化调整，充分融合用户的基本信息数据、交往圈关系数据、通信信息数据以及用户家庭关系数据，采用决策树分析模型，识别出具有号码分类使用的需求或承担家庭通信费用的需求但仍未办理万能副卡的客户作为主要的潜在用户，以供业务部门提前介入，提升业务营销转化率。
                        </div>
                    </li>
                    <li class="box01-li">
                        <div class="li-t">
                            <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/communication/t-icon03.png" alt="" /></div>
                            <p class="li-tit">家宽潜在用户识别分析</p>
                        </div>
                        <div class="li-b">
                            基于网络搜索、位置信令、社交关系圈等互联网大数据，构建“区域-社区-家庭-个人”多层次市场划分分析模型，清晰展示多层级区域网格的市场竞争情况；通过位置轨迹、通信社交、网络偏好分析透析用户间具有家庭特性的相似特征，搭建用户家庭关系识别模型，有效发展家庭宽带业务，找到关键客户营销，减少资源浪费，提高效率。
                        </div>
                    </li>
                </ul>
            </div>
            <div class="common-box02">
                <h2 class="box02-tit">方案优势</h2>
                <ul class="box02-ul flex flex-wrap">
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/communication/t-icon04.png" alt="" />
                        <p class="li-txt">整合数据，打破数据孤岛</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/communication/t-icon05.png" alt="" />
                        <p class="li-txt">客户画像，精准销营</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/communication/t-icon06.png" alt="" />
                        <p class="li-txt">提高留存和复购率</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/communication/t-icon07.png" alt="" />
                        <p class="li-txt">精细化运营，提高运营效率</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/communication/t-icon08.png" alt="" />
                        <p class="li-txt">可视化分析，分析具象化</p>
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
            bannerTitle: '通信行业解决方案'
        };
    }
};
</script>

<style></style>
