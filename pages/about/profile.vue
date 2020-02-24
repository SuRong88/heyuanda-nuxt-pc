<template>
    <div class="about-page about-profile">
        <v-nav :show="show"></v-nav>
        <div class="about-banner about-banner01 flex flex-center">
            <div class="banner-title-box">
                <h2 class="banner-title-cn">{{ bannerTitleCn }}</h2>
                <h2 class="banner-title-en">{{ bannerTitleEn }}</h2>
            </div>
            <v-about :index="index"></v-about>
        </div>
        <div class="content">
            <div class="profile">
                <div class="wrapper">
                    <div class="title-box">
                        <h3 class="title-cn">公司简介</h3>
                        <h3 class="title-en">Company Profile</h3>
                    </div>
                    <div class="profile-txt-box">
                        <div class="profile-txt">和元达信息科技有限公司（简称“和元达科技”）成立于2012年4月，于2014年5月入驻中大科技园，注册资金5000万。</div>
                        <div class="profile-txt">
                            和元达科技是一家以“大数据和互联网+”为发展方向，通过技术创新持续为客户创造价值的高新企业。公司业务涉及多个领域和行业板块，
                            目前主要聚焦在电信、金融、医疗、环保、电商、交通等行业，业务以大数据分析处理、人工智能、大数据价值变现、精准营销为主。
                        </div>
                        <div class="profile-txt">
                            公司已取得了高新技术企业、双软企业、CMMI3、信息系统集成及服务4级服务资格、ISCCC信息安全服务二级认证、
                            ISO9001、ISO27001、ISO14001、企业信用AAA等级、广州工商局重信用企业等资质或认证。
                        </div>
                        <div class="profile-txt">公司以大数据价值变现和人工智能作为战略发展方向，我们期待通过精确的大数据能力快速推动社会进步。</div>
                    </div>
                </div>
            </div>
            <div class="development">
                <div class="title-box">
                    <h3 class="title-cn">发展历程</h3>
                    <h3 class="title-en">History of Development</h3>
                </div>
                <div class="main-con flex flex-align-center">
                    <div class="main-l">
                        <div class="l-item l-item01">
                            <div class="l-item-hd flex flex-jcsb flex-end">
                                <span class="year">2016</span>
                                <div class="hd-border"></div>
                            </div>
                            <ul class="l-item-bd">
                                <li>
                                    <span class="label">3月</span>
                                    <span class="txt">取得信息系统集成服务四级认证</span>
                                </li>
                                <li>
                                    <span class="label">12月</span>
                                    <span class="txt">加入广东省大数据协会</span>
                                </li>
                            </ul>
                        </div>
                        <div class="l-item l-item02">
                            <div class="l-item-hd flex flex-jcsb flex-end">
                                <span class="year">2014</span>
                                <div class="hd-border"></div>
                            </div>
                            <ul class="l-item-bd">
                                <li>
                                    <span class="label">7月</span>
                                    <span class="txt">公司规模扩大并搬迁到中山大学科技园</span>
                                </li>
                                <li>
                                    <span class="label">8月</span>
                                    <span class="txt">获取“双软”认证</span>
                                </li>
                            </ul>
                        </div>
                        <div class="l-item l-item03">
                            <div class="l-item-hd flex flex-jcsb flex-end">
                                <span class="year">2012</span>
                                <div class="hd-border"></div>
                            </div>
                            <ul class="l-item-bd">
                                <li>
                                    <span class="label">4月</span>
                                    <span class="txt">“广州和元达信息科技有限公司”成立</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="main-m">
                        <img class="main-icon main-icon01" src="@/assets/images/about/icon01.png" alt="" />
                        <img class="main-icon main-icon02" src="@/assets/images/about/icon02.png" alt="" />
                        <img class="main-icon main-icon03" src="@/assets/images/about/icon03.png" alt="" />
                        <img class="main-icon main-icon04" src="@/assets/images/about/icon04.png" alt="" />
                        <img class="main-icon main-icon05" src="@/assets/images/about/icon05.png" alt="" />
                        <img class="main-icon main-icon06" src="@/assets/images/about/icon06.png" alt="" />
                    </div>
                    <div class="main-r">
                        <div class="r-item r-item01">
                            <div class="r-item-hd flex flex-jcsb flex-end">
                                <div class="hd-border"></div>
                                <span class="year">2017</span>
                            </div>
                            <ul class="r-item-bd">
                                <li>
                                    <span class="label">1月</span>
                                    <span class="txt">注册资金增加至5000万</span>
                                </li>
                                <li>
                                    <span class="label">5月</span>
                                    <span class="txt">公司更名为“和元达信息科技有限公司”</span>
                                </li>
                            </ul>
                        </div>
                        <div class="r-item r-item02">
                            <div class="r-item-hd flex flex-jcsb flex-end">
                                <div class="hd-border"></div>
                                <span class="year">2015</span>
                            </div>
                            <ul class="r-item-bd">
                                <li>
                                    <span class="label">1月</span>
                                    <span class="txt">通过ISO27001信息安全管理体系认证</span>
                                </li>
                                <li>
                                    <span class="label">4月</span>
                                    <span class="txt">通过CMMI3认证</span>
                                </li>
                                <li>
                                    <span class="label">4月</span>
                                    <span class="txt">通过高新技术企业认证</span>
                                </li>
                            </ul>
                        </div>
                        <div class="r-item r-item03">
                            <div class="r-item-hd flex flex-jcsb flex-end">
                                <div class="hd-border"></div>
                                <span class="year">2013</span>
                            </div>
                            <ul class="r-item-bd">
                                <li>
                                    <span class="label">1月</span>
                                    <span class="txt">通过ISO9001质量管理体系认证</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import axios from '~/plugins/axios';
import URL from '~/plugins/url';
import vNav from '@/components/vNav.vue';
import vAbout from '@/components/aboutNav.vue';
import vFooter from '@/components/vFooter.vue';
export default {
    components: {
        vNav,
        vAbout,
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
            // banner导航下标
            index: 'profile',
            // 展示导航栏背景颜色
            show: false,
            // banner标题
            bannerTitleCn: '精准，轻松致胜',
            bannerTitleEn: 'Accuracy, Easy Business.'
        };
    }
};
</script>

<style></style>
