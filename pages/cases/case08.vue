<template>
    <div class="case-page case-page08">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner11">
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
                    我司为某省运营商电子渠道前端WEB应用提供了一套RAS动态应用防护系统，
                    以“动态令牌”、“动态封装”、“动态变幻”为技术核心，通过对服务器网页底层代码的持续动态变换，增加服务器行为的“不可预测性”；对企业内、外网的应用提供主动防护，有效防御传统攻击行为以及自动化攻击，以应对越来越严重的网络威胁。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <p class="demand-desc">
                    “该省运营商现网对于纯WEB应用安全防护能力有限，为应对WEB应用越来越严重的自动化工具攻击，过滤用户敏感信息，保护用户信息不被盗用，急需一套针对纯WEB应用业务的安全防护系统。”
                </p>
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <p class="tar-desc desc-center">为客户WEB应用提供如下安全防护能力:</p>
                <ul class="common-list">
                    <li class="list-item">
                        <span class="label">1</span>
                        <p class="txt">网站代码防护能力：采用URL动态封装技术，隐藏应用攻击入口，保护网站源码。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">2</span>
                        <p class="txt">自动化攻击防护能力：采用客户端动态验证技术，阻止自动化攻击。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">3</span>
                        <p class="txt">用户信息防护能力：采用客户端请求动态混淆技术，保护终端请求，过滤用户敏感信息。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">4</span>
                        <p class="txt">业务逻辑防护能力：访问请求动态令牌技术，保障请求访问的唯一性，保障业务逻辑。</p>
                    </li>
                </ul>
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <p class="effect-desc">
                    随着RAS动态应用防护系统的建成并投入使用，大大提高了该省运营商电子渠道WEB应用防护能力。有效阻断拦截了自动化工具攻击、安全渗透、撞库、薅羊毛等针对性外部攻击，达到了客户预期目标。
                </p>
                <img class="img" src="@/assets/images/case/img23.png" alt="" />
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
            bannerTitle: '动态应用防护项目'
        };
    },
    methods: {}
};
</script>

<style></style>
