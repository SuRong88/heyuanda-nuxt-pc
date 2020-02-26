<template>
    <div class="case-page case-page06">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner06">
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
                    广告主通过自媒体KOL进行广告投放、市场营销。随着流量越来越贵，广告主投入成本越来越高；此外，刷流量造假风盛，僵尸粉和真实粉丝情况难以辨别，广告曝光无法量化，粉丝画像无法获知，导致投放产品存在较大的盲目性。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc desc-center">“避免无效广告投放，节省广告成本，提高转化收益。”</p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc desc-center">基于运营商大数据，对粉丝真实活跃情况进行监测，还原真实粉丝数量，并对粉丝群体进行画像。</p>
                <img class="img" src="@/assets/images/case/img13.png" alt="" />
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <div class="sec04-main flex flex-jcsb">
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img14.jpg" alt="" />
                        <p class="item-txt">通过粉丝画像，定位具体适合投放的产品；</p>
                    </div>
                    <div class="sec04-item">
                        <img class="item-img" src="@/assets/images/case/img15.jpg" alt="" />
                        <p class="item-txt">找出真实粉丝数量，结合精准投放，避免无效广告投放，节省广告成本，提高转化收益。</p>
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
            bannerTitle: '自媒体KOL监测'
        };
    },
    methods: {}
};
</script>

<style></style>
