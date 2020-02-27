<template>
    <div class="index-page">
        <v-nav></v-nav>
        <no-ssr>
            <swiper class="index_swiper" :options="swiperOption" ref="boxSwiper">
                <!-- 第一屏 -->
                <swiper-slide class="index_swiper_fir">
                    <div class="index_swiper_firbox" :class="frontend.firOn">
                        <img src="@/assets/images/index_1_img03.png" alt="" class="img1" />
                        <img src="@/assets/images/index_1_img02.png" alt="" class="img2" />
                    </div>
                    <div :class="{ on: frontend.firOn == 'on2' }">
                        <swiper class="index_swiper_banner" :options="bannerOption" ref="bannerSwiper">
                            <swiper-slide v-for="(item, index) in 1" :key="'swiper' + index"><img src="@/assets/images/index_1_img01.png" alt="" /></swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                </swiper-slide>

                <!-- 第二屏 -->
                <swiper-slide class="index_swiper_sec" :class="{ on: frontend.secOn }">
                    <p class="tit">互联网基础数据平台</p>
                    <p class="stit center">基于运营商大数据，提供准确、稳定、及时的基础数据服务</p>

                    <ul class="index_swiper_secList">
                        <nuxt-link to="/products" tag="li" v-for="item in interface.sec"><img :src="item.img_url" alt="" /></nuxt-link>
                    </ul>
                </swiper-slide>

                <!-- 第三屏 -->
                <swiper-slide class="index_swiper_thi" :class="{ on: frontend.thirdOn }">
                    <p class="tit">DMP平台</p>
                    <p class="stit">
                        基于精准客户画像获取目标客户、最佳接触时间、最佳接触渠道等信息，运用AI及Look-alike技术进行用户量级拓展，并通过外呼、短信、线上广告投放等多种渠道，为客户实现精准营销或者市场调研等
                    </p>

                    <div class="index_swiper_thiImg">
                        <img src="@/assets/images/index_3_img01.png" alt="" class="img1" />
                        <img src="@/assets/images/index_3_img02.png" alt="" class="img2" />
                    </div>
                </swiper-slide>

                <!-- 第四屏 -->
                <swiper-slide class="index_swiper_four" :class="{ on: frontend.fourOn }">
                    <p class="tit">大数据分析平台</p>
                    <p class="stit center">基于低成本、低门槛实现信息化，聚焦应用开发、提高效率</p>

                    <div class="list">
                        <div class="border" :style="{ left: frontend.fourListStyle + 'px' }"></div>
                        <div class="li" v-for="(item, index) in frontend.fourList" :class="{ on: frontend.fourListIndex == index }" @click="changeFourList(index)">{{ item }}</div>
                    </div>

                    <div class="index_swiper_four_con con" :class="frontend.fourOn2">
                        <img src="@/assets/images/index_4_img01.png" alt="" class="bg" />

                        <img src="@/assets/images/index_4_l.png" alt="" class="left" @click="fourPrev" />
                        <img src="@/assets/images/index_4_r.png" alt="" class="right" @click="fourNext" />
                        <swiper :options="fourOption" ref="fourSwiper">
                            <swiper-slide v-for="(item, index) in interface.four[frontend.fourListIndex]">
                                <nuxt-link v-if="item.link" :to="item.link" class="box pointer">
                                    <img :src="item.img_url" alt="" />
                                    <p>{{ item.text }}</p>
                                </nuxt-link>
                                <div v-else class="box">
                                    <img :src="item.img_url" alt="" />
                                    <p>{{ item.text }}</p>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                </swiper-slide>

                <!-- 第五屏 -->
                <swiper-slide class="index_swiper_five" :class="{ on: frontend.fiveOn }">
                    <div class="head">
                        <p class="tit">多行业解决方案</p>
                        <p class="stit">聚焦在电信、金融、医疗、环保、电商、交通等行业，业务以大数据分析处理、人工智能、大数据价值变现、精准营销为主</p>
                    </div>

                    <div class="con">
                        <ul class="index_swiper_five_list">
                            <nuxt-link tag="li" :to="item.link" v-for="item in frontend.fiveList">
                                <div class="box">
                                    <div class="img">
                                        <img :src="item.img1" alt="" class="img1" />
                                        <img :src="item.img2" alt="" class="img2" />
                                    </div>

                                    <p class="text">{{ item.text }}</p>

                                    <div class="line"></div>

                                    <img src="@/assets/images/index_5_img01.jpg" alt="" class="bg" />
                                </div>
                            </nuxt-link>
                        </ul>
                    </div>
                    <v-footer></v-footer>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </no-ssr>
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
        console.log('index-ssr');
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
    created() {},
    data() {
        let that = this;
        return {
            SEOInfo: {},
            interface: {
                sec: [
                    {
                        img_url: require('@/assets/images/index_2_img01.jpg')
                    },
                    {
                        img_url: require('@/assets/images/index_2_img02.jpg')
                    },
                    {
                        img_url: require('@/assets/images/index_2_img03.jpg')
                    },
                    {
                        img_url: require('@/assets/images/index_2_img04.jpg')
                    },
                    {
                        img_url: require('@/assets/images/index_2_img05.jpg')
                    },
                    {
                        img_url: require('@/assets/images/index_2_img06.jpg')
                    }
                ],

                four: [
                    [
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon01-1.png'),
                            text: '大数据智慧交通应用',
                            link: '/products?index=1'
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon01-2.png'),
                            text: '大数据旅游分析应用',
                            link: ''
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon01-3.png'),
                            text: '大数据交通分析应用',
                            link: ''
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon01-4.png'),
                            text: '大数据人口分析应用',
                            link: ''
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon01-5.png'),
                            text: '大数据商圈分析应用',
                            link: '/products?index=2'
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon01-6.png'),
                            text: '大数据地址分析应用',
                            link: ''
                        }
                    ],
                    [
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon02-1.png'),
                            text: 'DMP平台',
                            link: '/products?index=7'
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon02-2.png'),
                            text: '智慧容量专家',
                            link: '/products?index=6'
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon02-3.png'),
                            text: '大数据生产管理平台',
                            link: '/products?index=5'
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon02-4.png'),
                            text: '食品安全追溯系统（区块链）',
                            link: '/products?index=3'
                        }
                    ],
                    [
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon03-1.png'),
                            text: '和元达数据管理一体机',
                            link: '/products?index=8'
                        },
                        {
                            img_url: require('@/assets/images/index/icon/index_4_icon03-2.png'),
                            text: '机房统一监控系统TUMS',
                            link: '/products?index=9'
                        }
                    ]
                ]
            },
            frontend: {
                fourList: ['SaaS', 'PaaS', 'IaaS'],
                fourListIndex: 0,
                fourListStyle: 0,
                fiveList: [
                    {
                        img1: require('@/assets/images/index_5_icon01.png'),
                        img2: require('@/assets/images/index_5_icon01_sel.png'),
                        text: '电信行业解决方案',
                        link: '/solutions'
                    },
                    {
                        img1: require('@/assets/images/index_5_icon02.png'),
                        img2: require('@/assets/images/index_5_icon02_sel.png'),
                        text: '金融',
                        link: '/solutions'
                    },
                    {
                        img1: require('@/assets/images/index_5_icon03.png'),
                        img2: require('@/assets/images/index_5_icon03_sel.png'),
                        text: '医疗',
                        link: '/solutions'
                    },
                    {
                        img1: require('@/assets/images/index_5_icon04.png'),
                        img2: require('@/assets/images/index_5_icon04_sel.png'),
                        text: '环保',
                        link: '/solutions'
                    },
                    {
                        img1: require('@/assets/images/index_5_icon05.png'),
                        img2: require('@/assets/images/index_5_icon05_sel.png'),
                        text: '电商',
                        link: '/solutions'
                    },
                    {
                        img1: require('@/assets/images/index_5_icon06.png'),
                        img2: require('@/assets/images/index_5_icon06_sel.png'),
                        text: '交通',
                        link: '/solutions'
                    }
                ],

                firOn: '', // 第一屏的动画类名
                secOn: false, // 第二屏是否执行动画
                thirdOn: false, // 第三屏是否执行动画
                fourOn: false, // 第四屏是否执行动画
                fourOn2: '', // 第四屏圆圈动画
                fiveOn: false // 第五屏是否执行动画
            },

            swiperOption: {
                speed: 600,
                direction: 'vertical',
                mousewheelControl: true,
                simulateTouch: false,
                pagination: '.index_swiper > .swiper-pagination',
                paginationClickable: true,
                onInit: function(swiper) {
                    that.frontend.firOn = 'on1';
                    setTimeout(() => {
                        that.frontend.firOn = 'on2';
                    }, 2000);
                },
                onTransitionEnd: function(swiper) {
                    switch (swiper.realIndex) {
                        case 1:
                            that.frontend.secOn = true;
                            break;
                        case 2:
                            that.frontend.thirdOn = true;
                            break;
                        case 3:
                            if (!that.frontend.fourOn) {
                                that.frontend.fourOn2 = 'on1';
                                setTimeout(() => {
                                    that.frontend.fourOn2 = 'on2';
                                }, 2000);
                            }
                            that.frontend.fourOn = true;
                            break;
                        case 4:
                            that.frontend.fiveOn = true;
                            break;
                    }
                }
            },

            bannerOption: {
                simulateTouch: false,
                autoplayDisableOnInteraction: false
            },

            fourOption: {
                simulateTouch: false,
                slidesPerView: 3,
                centeredSlides: true,
                speed: 1000,
                loop: true
            }
        };
    },
    computed: {
        fourSwiper() {
            return this.$refs.fourSwiper.swiper;
        }
    },
    watch: {},
    methods: {
        // 第四块，切换导航栏
        changeFourList(index) {
            // 切换的时候，色块移动
            this.frontend.fourListIndex = index;
            this.frontend.fourListStyle = ((410 - 54) / 2) * index;
            this.fourSwiper.update();
            this.fourSwiper.slideTo(1);
            this.fourSwiper.reLoop;
        },

        // 第四块，swiper上一个
        fourPrev() {
            this.fourSwiper.slidePrev();
        },

        // 第四块，swiper下一个
        fourNext() {
            this.fourSwiper.slideNext();
        }
    }
};
</script>

<style lang="less">
.index-page {
    .v-nav {
        background: rgba(0, 22, 48, 0.8);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
}
</style>
