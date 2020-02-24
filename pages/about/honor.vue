<template>
    <div class="about-page about-honor">
        <v-nav :show="show"></v-nav>
        <div class="about-banner about-banner01 flex flex-center">
            <div class="banner-title-box">
                <h2 class="banner-title-cn">{{ bannerTitleCn }}</h2>
                <h2 class="banner-title-en">{{ bannerTitleEn }}</h2>
            </div>
            <v-about :index="index"></v-about>
        </div>
        <div class="content">
            <div class="about-title-box">
                <h2 class="about-title-cn">{{ titleCn }}</h2>
                <h2 class="about-title-en">{{ titleEn }}</h2>
            </div>
            <div class="honor-box-outer flex flex-align-center">
                <div class="honor-box flex flex-col flex-ver">
                    <div class="honor-middle"></div>
                    <div class="honor-item first-item flex flex-ver">
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic01.png" alt="" /></div>
                        <p class="honor-txt">大数据协会会员证书</p>
                        <div class="honor-book text-c">
                            <div class="book-tit">大数据协会会员证书</div>
                            <img class="book-img" src="@/assets/images/about/pic01_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <p class="honor-txt">高新技术企业证书</p>
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic02.png" alt="" /></div>

                        <div class="honor-book text-c">
                            <div class="book-tit">高新技术企业证书</div>
                            <img class="book-img" src="@/assets/images/about/pic02_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic03.png" alt="" /></div>
                        <p class="honor-txt">企业信用AAA级证书</p>
                        <div class="honor-book text-c">
                            <div class="book-tit">企业信用AAA级证书</div>
                            <img class="book-img" src="@/assets/images/about/pic03_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <p class="honor-txt">软件产品证书</p>
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic04.png" alt="" /></div>
                        <div class="honor-book text-c">
                            <div class="book-tit">软件产品证书</div>
                            <img class="book-img" src="@/assets/images/about/pic04_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic05.png" alt="" /></div>
                        <p class="honor-txt">软件企业认定证书</p>
                        <div class="honor-book text-c">
                            <div class="book-tit">软件企业认定证书</div>
                            <img class="book-img" src="@/assets/images/about/pic05_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <p class="honor-txt">信息系统集成及服务资质证书</p>
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic06.png" alt="" /></div>
                        <div class="honor-book text-c">
                            <div class="book-tit">信息系统集成及服务资质证书</div>
                            <img class="book-img" src="@/assets/images/about/pic06_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic07.png" alt="" /></div>
                        <p class="honor-txt">中国通信企业协会会员证书</p>
                        <div class="honor-book text-c">
                            <div class="book-tit">中国通信企业协会会员证书</div>
                            <img class="book-img" src="@/assets/images/about/pic07_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <p class="honor-txt">营业执照</p>
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic08.png" alt="" /></div>
                        <div class="honor-book text-c">
                            <div class="book-tit">营业执照</div>
                            <img class="book-img" src="@/assets/images/about/pic08_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic09.png" alt="" /></div>
                        <p class="honor-txt">CMMI-3认证证书</p>
                        <div class="honor-book text-c">
                            <div class="book-tit">CMMI-3认证证书</div>
                            <img class="book-img" src="@/assets/images/about/pic09_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <p class="honor-txt">ISO9001认证证书</p>
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic10.png" alt="" /></div>
                        <div class="honor-book text-c">
                            <div class="book-tit">ISO9001认证证书</div>
                            <img class="book-img" src="@/assets/images/about/pic10_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic11.png" alt="" /></div>
                        <p class="honor-txt">ISO14001认证证书</p>
                        <div class="honor-book text-c">
                            <div class="book-tit">ISO14001认证证书</div>
                            <img class="book-img" src="@/assets/images/about/pic11_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <p class="honor-txt">ISO20000认证证书</p>
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic12.png" alt="" /></div>
                        <div class="honor-book text-c">
                            <div class="book-tit">ISO20000认证证书</div>
                            <img class="book-img" src="@/assets/images/about/pic12_img.jpg" alt="" />
                        </div>
                    </div>
                    <div class="honor-item flex flex-ver">
                        <div class="item-icon-box"><img class="item-icon" src="@/assets/images/about/pic13.png" alt="" /></div>
                        <p class="honor-txt">ISO27001认证证书</p>
                        <div class="honor-book text-c">
                            <div class="book-tit">ISO27001认证证书</div>
                            <img class="book-img" src="@/assets/images/about/pic13_img.jpg" alt="" />
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
            index: 'honor',
            // 展示导航栏背景颜色
            show: false,
            // banner标题
            bannerTitleCn: '精准，轻松致胜',
            bannerTitleEn: 'Accuracy, Easy Business.',
            // 正文标题
            titleCn: '公司荣誉',
            titleEn: 'Company honor'
        };
    }
};
</script>

<style></style>
