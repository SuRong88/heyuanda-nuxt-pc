<template>
    <div class="case-page case-page15">
        <v-nav :show="show"></v-nav>
        <div class="case-banner case-banner15">
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
                    通过对食品安全溯源的应用，建立一个农产品安全生产可追溯的信息系统。提取农产品的生产、加工、流通、消费等供应链环节消费者关心的公共追溯要素，建立食品安全信息数据链，一旦发现问题，能够根据溯源进行有效的控制和召回，从源头上保障消费者的合法权益。
                </p>
            </section>
            <!-- 客户需求 -->
            <section class="sec sec02">
                <h3 class="common-tit">客户需求</h3>
                <ul class="common-list">
                    <li class="list-item">
                        <span class="label">1</span>
                        <p class="txt">对消费者、供应商、物流商、零售商、监管部门提供针对食品供应链全流程的透明度</p>
                    </li>
                    <li class="list-item">
                        <span class="label">2</span>
                        <p class="txt">•结合物联网技术，将农产品生长周期、物流运输温度、轨迹等关键数据采集并记录在区块链平台</p>
                    </li>
                    <li class="list-item">
                        <span class="label">3</span>
                        <p class="txt">基于区块链技术，提供全流程的数据追溯，保证数据的不可篡改，提高客户信任度。交易数据加密，隐私保护，有效解决交易的安全性。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">4</span>
                        <p class="txt">交易可审计，可验证，提升对供应链参与者的监管能力</p>
                    </li>
                    <li class="list-item">
                        <span class="label">5</span>
                        <p class="txt">可动态增加节点，平台可根据业务需求动态扩展</p>
                    </li>
                </ul>
                <img class="img" src="@/assets/images/case/img28.jpg" alt="" />
            </section>
            <!-- 实施目标 -->
            <section class="sec sec03">
                <h3 class="common-tit">实施目标</h3>
                <ul class="common-list">
                    <li class="list-item">
                        <span class="label">1</span>
                        <p class="txt">物联网：通过NB-IoT等物联技术对种养殖过程进行精准监控和可视化、科学化管理，实现农产品信息自动可取。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">2</span>
                        <p class="txt">区块链：特有的分布式账本和防篡改功能，实现农产品信息“从地到桌”全过程的透明可溯及真实可信。</p>
                    </li>
                    <li class="list-item">
                        <span class="label">3</span>
                        <p class="txt">
                            生态圈：通过岭南优品电商平台迅速直达消费者，建立起覆盖养殖，加工，运输，监管，销售全流程的食品安全信任链，不仅拓展了农户的致富渠道，还解除了食品安全的信任危机，让消费者吃到放心肉菜。
                        </p>
                    </li>
                </ul>
                <img class="img" src="@/assets/images/case/img29.png" alt="" />
            </section>
            <!-- 实施成效 -->
            <section class="sec sec04">
                <h3 class="common-tit">实施成效</h3>
                <p class="effect-desc">
                    通过物联网+区块链+电商平台在农业的首次结合，打造农产品安全信任链。通过实现农场档案管理、农场品检测报告、生产日志、加工包装日志、配送日志、二维码标签和电子围栏等功能，从而为生产管理和农产品溯源提供数据的支持。
                </p>
                <img class="img" src="@/assets/images/case/img30.png" alt="" />
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
            bannerTitle: '广东移动区块链项目'
        };
    },
    methods: {}
};
</script>

<style></style>
