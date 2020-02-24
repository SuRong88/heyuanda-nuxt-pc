<template>
    <div class="solution-page solution-page02">
        <v-nav :show="show"></v-nav>
        <div class="solution-banner solution-banner02 flex flex-ver">
            <h2 class="banner-title">{{ bannerTitle }}</h2>
        </div>
        <div class="content">
            <section class="sec-box01">
                <h2 class="title">方案概述</h2>
                <div class="desc desc-center">针对大数据平台提供高效、稳定、快速的备份恢复解决方案</div>
                <ul class="box01-ul flex">
                    <li class="box01-li flex-1">
                        <img class="box-icon" src="@/assets/images/solution/icon01.png" alt="" />
                        <p class="box-tit">Hbase列存储</p>
                        <p class="box-desc">数据文件入列存储，最后落盘HDFS文件系统</p>
                    </li>
                    <li class="box01-li flex-1">
                        <img class="box-icon" src="@/assets/images/solution/icon01.png" alt="" />
                        <p class="box-tit">HIVE数据仓库</p>
                        <p class="box-desc">包含表结构与数据文件， 最终落盘HDFS文件系统</p>
                    </li>
                    <li class="box01-li flex-1">
                        <img class="box-icon" src="@/assets/images/solution/icon01.png" alt="" />
                        <p class="box-tit">HDFS文件系统</p>
                        <p class="box-desc">Hbase、HIVEs 及其它大数据平台的数据最终落盘的位置</p>
                    </li>
                </ul>
            </section>
            <section class="sec-box02">
                <h2 class="title">方案内容</h2>
                <div class="desc">
                    和元达大数据平台数据保护解决方案能够有效的针对对大数据平台上PB级的数据进行稳定的数据备份及快速的数据恢复，有效解决传统备份对大数据恢复的速度瓶颈。
                </div>
                <img class="box-img" src="@/assets/images/solution/img03.png" alt="" />
            </section>
            <section class="sec-box03">
                <h2 class="title">方案优势</h2>
                <ul class="box03-ul flex">
                    <li class="box03-li flex-1">
                        <img class="box-icon" src="@/assets/images/solution/icon04.png" alt="" />
                        <p class="box-tit">数据快速恢复</p>
                        <p class="box-desc">通过CDM技术对PB级数据进行源格式备份，数据恢复仅需分钟级别。</p>
                    </li>
                    <li class="box03-li flex-1">
                        <img class="box-icon" src="@/assets/images/solution/icon05.png" alt="" />
                        <p class="box-tit">投资灵活性</p>
                        <p class="box-desc">灵活的运用X86结构下的Ceph或VSAN等分布式存储，当数据量达到PB级别时，极大地减少了备份存储的投资</p>
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
            bannerTitle: '大数据平台数据保护解决方案'
        };
    }
};
</script>

<style></style>
