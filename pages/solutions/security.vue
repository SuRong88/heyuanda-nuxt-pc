<template>
    <div class="solution-page solution-page03">
        <v-nav :show="show"></v-nav>
        <div class="solution-banner solution-banner03 flex flex-ver">
            <h2 class="banner-title">{{ bannerTitle }}</h2>
        </div>
        <div class="content wrapper">
            <section class="sec-box01">
                <h2 class="title">方案概述</h2>
                <div class="desc">
                    通过动态变换、动态感知、动态响应和动态智能等创新技术实现了从
                    用户端到服务器端的全方位“主动防御”，为各类Web应用提供强大的安全保护，让攻击者无从下手，从而大幅提升了业务安全。
                </div>
                <img class="box-img" src="@/assets/images/solution/c@4x.png" alt="" />
            </section>
            <section class="sec-box02">
                <h2 class="title">方案内容</h2>
                <img class="box-img" src="@/assets/images/solution/img05.png" alt="" />
                <ul class="box02-ul flex flex-wrap">
                    <li class="box02-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon10.png" alt="" />
                        <p class="box-tit">动态变幻（Dynamic Morphism）</p>
                        <p class="box-desc">增加应用行为的“不可预测性”，隐藏安全漏洞</p>
                    </li>
                    <li class="box02-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon10.png" alt="" />
                        <p class="box-tit">动态感知（Dynamic Awareness）</p>
                        <p class="box-desc">动态感知应用业务逻辑与终端威胁态势，全程保护操作安全</p>
                    </li>
                    <li class="box02-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon10.png" alt="" />
                        <p class="box-tit">动态响应（Dynamic Respond）</p>
                        <p class="box-desc">根据攻击态势动态调整防御及响应手段，迷惑攻击者</p>
                    </li>
                    <li class="box02-li ">
                        <img class="box-icon" src="@/assets/images/solution/icon10.png" alt="" />
                        <p class="box-tit">动态智能（Dynamic Intelligence）</p>
                        <p class="box-desc">结合外部威胁情报行程动态安全智能，精准预测攻击者行为，形成多方联合防御体系</p>
                    </li>
                </ul>
                <h3 class="sub-title">RAS防御前后对比</h3>
                <img class="box-img" src="@/assets/images/solution/img.jpg" alt="" />
            </section>
            <section class="sec-box03">
                <h2 class="title">方案优势</h2>
                <ul class="box03-ul clear">
                    <li class="box03-li fl">
                        <dl>
                            <dt class="box-tit">从特征匹配到动态变幻，化被动为主动</dt>
                            <dd class="box-desc">抵御自动化威胁及未知漏洞攻击</dd>
                            <dd class="box-desc">防止业务逻辑攻击</dd>
                            <dd class="box-desc">阻止分布式的多来源攻击</dd>
                        </dl>
                    </li>
                    <li class="box03-li fl">
                        <dl>
                            <dt class="box-tit">从单点防御到全程动态威胁态势感知</dt>
                            <dd class="box-desc">终端威胁主动监控及可视化</dd>
                            <dd class="box-desc">威胁追踪与攻击预测</dd>
                            <dd class="box-desc">抵御业务应用层DDoS攻击</dd>
                        </dl>
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
            bannerTitle: '动态安全防御解决方案'
        };
    }
};
</script>

<style></style>
