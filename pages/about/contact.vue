<template>
    <div class="about-page about-contact">
        <v-nav :show="show"></v-nav>
        <div class="about-banner about-banner01 flex flex-center">
            <div class="banner-title-box">
                <h2 class="banner-title-cn">{{ bannerTitleCn }}</h2>
                <h2 class="banner-title-en">{{ bannerTitleEn }}</h2>
            </div>
            <v-about :index="index"></v-about>
        </div>
        <div class="content wrapper">
            <!-- <div class="about-title-box">
                <h2 class="about-title-cn">{{ titleCn }}</h2>
                <h2 class="about-title-en">{{ titleEn }}</h2>
            </div> -->
            <div class="contact-tit">
                <h2 class="contact-tit-cn">和元达信息科技有限公司</h2>
                <h2 class="contact-tit-en">TechViewInfo Co.,Ltd（TVI）</h2>
            </div>
            <!-- 联系信息 -->
            <ul class="contact-box clear">
                <li class="contact-item fl">
                    <img class="contact-icon" src="@/assets/images/about/contact-icon01.png" alt="" />
                    <p class="contact-con">
                        <span class="strong">{{ webInfo.kefu_phone }}</span>
                    </p>
                    <p class="contact-txt">服务热线</p>
                </li>
                <li class="contact-item fl">
                    <img class="contact-icon" src="@/assets/images/about/contact-icon02.png" alt="" />
                    <p class="contact-con">
                        <span class="strong">{{ webInfo.kefu_fax }}</span>
                    </p>
                    <p class="contact-txt">公司传真</p>
                </li>
                <li class="contact-item fl">
                    <img class="contact-icon" src="@/assets/images/about/contact-icon03.png" alt="" />
                    <p class="contact-con">
                        <span class="strong">{{ webInfo.email }}</span>
                    </p>
                    <p class="contact-txt">电子邮箱</p>
                </li>
                <li class="contact-item fl">
                    <img class="contact-icon" src="@/assets/images/about/contact-icon04.png" alt="" />
                    <p class="contact-con">
                        {{ workDay }}
                        <span class="strong">{{ workTime }}</span>
                    </p>
                    <p class="contact-txt">工作时间</p>
                </li>
                <li class="contact-item fl">
                    <img class="contact-icon" src="@/assets/images/about/contact-icon05.png" alt="" />
                    <p style="padding: 0 80px;" class="contact-address">{{ webInfo.address }}</p>
                </li>
                <li class="contact-item fl">
                    <img class="contact-qrcode" :src="webInfo.website_qrcode" alt="" />
                    <p class="contact-txt">微信公众号</p>
                </li>
            </ul>
            <div class="map" id="map"></div>
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
    computed: {
        webInfo() {
            return this.$store.state.webInfo;
        }
    },
    watch: {
        webInfo: function() {
            this.workDay = this.webInfo.work_time.split('|')[0];
            this.workTime = this.webInfo.work_time.split('|')[1];
        }
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
    created() {
        if (this.$store.state.webInfo.work_time) {
            this.workDay = this.webInfo.work_time.split('|')[0];
            this.workTime = this.webInfo.work_time.split('|')[1];
        }
    },
    mounted() {
        // 导航栏显示背景颜色,fixed
        this.$fixHeader(this, 370);
        // 渲染地图
        this.renderMap(23.0992390000,113.2974700000);
    },

    data() {
        return {
            SEOInfo: {},
            workDay: '',
            workTime: '',
            // banner导航下标
            index: 'contact',
            // 展示导航栏背景颜色
            show: false,
            // banner标题
            bannerTitleCn: '精准，轻松致胜',
            bannerTitleEn: 'Accuracy, Easy Business.',
            // 正文标题
            titleCn: '联系我们',
            titleEn: 'Contact Us'
        };
    },
    methods: {
        // 地图渲染
        renderMap: function(lat, lng) {
            // 创建Map实例
            var map = new BMap.Map('map');
            var position;
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(lng, lat), 15);
            //添加地图类型控件
            map.addControl(
                new BMap.MapTypeControl({
                    mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
                })
            );
            //开启鼠标滚轮缩放
            map.enableScrollWheelZoom(true);
            var marker = new BMap.Marker(new BMap.Point(lng, lat));
            map.addOverlay(marker);
            map.panBy(80, -80, true);
            // map.setMapStyle({ style: 'grayscale' });
        }
    }
};
</script>

<style></style>
