<template>
    <div class="case-page case-page13">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner13">
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
                <p class="common-desc" style="text-align: justify;">
                    该项目是响应国家为深化“放管服”改革，落实个人所得税大病医疗专项附加扣除相关工作，防范虚假医疗收费票据，根据《财政部关于全面推开财政电子票据管理改革的通知》(财综〔2018〕62号)、《财政部关于统一全国财政电子票据式样和财政机打票据式样的通知》(财综〔2018〕72号)，决定全面推行医疗收费电子票据管理改革，进行电子票据开发以及启用。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc">
                    “系统需要实现HIS电子票据接口与财政接口对接，包括医疗电子票据开具(门诊、住院、挂号、体检4个接口)、批量医疗电子票据开具、电子票据冲红、医疗电子票据欠费补交反馈接口、获取电子票据明细等功能。HIS系统改造;
                    包括开具电子票据改造、打印纸质票据（包含补打、重打等）、退号开具冲红票据、挂号日结、门诊日结、住院日结、打印（补打）纸质票据功能等。”
                </p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc"></p>
                <ul class="common-list">
                    <li class="list-item">
                        <span class="label">1</span>
                        <p class="txt">符合统一全国医疗收费票据式样</p>
                    </li>
                    <li class="list-item">
                        <span class="label">2</span>
                        <p class="txt">在2020年底前各地区原有票据式样和全国统一的票据式样并行。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">3</span>
                        <p class="txt">符合规定医疗收费电子票据应用工作</p>
                    </li>
                    <li class="list-item">
                        <span class="label">4</span>
                        <p class="txt">符合医疗收费电子票据报销入账及归档规范</p>
                    </li>
                    <li class="list-item">
                        <span class="label">5</span>
                        <p class="txt">符合医疗门诊收费票据填列</p>
                    </li>
                    <li class="list-item">
                        <span class="label">6</span>
                        <p class="txt">符合医疗住院收费票据填列</p>
                    </li>
                    <li class="list-item">
                        <span class="label">7</span>
                        <p class="txt">实现与财政、卫生健康、医保部门系统对接，按规定启用全国统一的医疗收费票据</p>
                    </li>
                </ul>
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <img class="img" src="@/assets/images/case/img26.jpg" alt="" />
                <ul class="effect-box flex flex-wrap">
                    <li class="effect-item">
                        <span class="label">01</span>
                        完成门诊收费票据、住院收费票据、门诊收费票据(机打)式样和住院收费票据(机打)式样，其编码按照财综〔2018〕72号规定的编码规则编制。同时，启用全国统一的医疗收费明细(电子)式样，配合电子票据使用。
                    </li>
                    <li class="effect-item">
                        <span class="label">02</span>
                        已满足财综〔2018〕72号规定，《会计档案管理办法》第八条、第九条所列条件，将医疗收费电子票据数据文件为依据进行会计处理，并按照电子档案管理要求进行归档保管。
                    </li>
                    <li class="effect-item">
                        <span class="label">03</span>
                        实现与财政部门信息互联互通，及时将医疗收费电子票据入账报销等信息反馈财政部门，并利用医保网络通道实现信息传输
                    </li>
                    <li class="effect-item">
                        <span class="label">04</span>
                        已实现与财政、卫生健康、医保部门系统对接，可以按规定启用全国统一的医疗收费票据。
                    </li>
                    <li class="effect-item">
                        <span class="label">05</span>
                        各地区原有票据式样和全国统一的票据式样并行
                    </li>
                </ul>
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
            bannerTitle: '医疗机构电子票据系统'
        };
    },
    methods: {}
};
</script>

<style></style>
