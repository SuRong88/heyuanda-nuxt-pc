<template>
    <div class="solution-page solution-page05">
        <v-nav :show="show"></v-nav>
        <div class="solution-banner solution-banner01 flex flex-ver">
            <h2 class="banner-title">{{ bannerTitle }}</h2>
        </div>
        <div class="content">
            <nuxt-link to="/solutions" tag="button" class="btn-back-list flex flex-ver flex-align-center">
                <img class="icon-img" src="@/assets/images/back-icon.png" alt="" />
                返回列表
            </nuxt-link>
            <h2 class="title">方案概述</h2>
            <div class="desc common-desc">基于和元达大数据分析平台，通过建立信息化、标准化、智能化的决策支持应用系统，方便医疗管理机构及医疗服务机构进行卫生管理和决策指导。</div>
            <img class="content-img" src="@/assets/images/solution/medical/t-img.png" alt="" />
            <div class="common-box01">
                <h2 class="box01-tit">方案内容</h2>
                <div class="desc common-desc" style="word-break: break-all; letter-spacing: -0.2px;">
                    针对医疗行业大数据应用特点，采用多项创新的结构化与非结构化数据一体化处理、并行处理、SQL/MapReduce统一执行引擎、分布式容错及自动故障处理、复杂数据类型关联分析、多IP通路负载均衡、处理任务断点执行、动态扩展等技术，从服务器、网络、操作系统到软件层逐层优化，搭建高性能、高可靠、易扩展、易使用的统一管理系统。通过医疗收入、患者负担、工作负荷、工作效率、疾病监控等多个主题模块，有效的反映医疗管理机构或服务机构的整体运营、管理等情况，强化医卫管理，优化资源配置、控制不合理因素。
                </div>
            </div>
            <div class="bigdata-box">
                <h2 class="box-tit">大数据支撑平台</h2>
                <p class="box-desc">大数据支撑平台包括基础设施层、数据存储层、数据处理层、应用层以及管理层。</p>
                <ul class="box-nav flex">
                    <li @click="screenSwitch(index)" v-for="(item, index) in navList" class="box-nav-item flex-1" :class="{ active: index == navIndex }">{{ item }}</li>
                </ul>
                <div class="screen flex flex-jcsb">
                    <div class="screen-l">
                        <h4 class="screen-tit">{{ screenList[screenIndex].title }}</h4>
                        <p class="screen-txt">{{ screenList[screenIndex].desc }}</p>
                    </div>
                    <div class="screen-r"><img class="screen-icon" :src="screenList[screenIndex].icon_path" alt="" /></div>
                </div>
            </div>
            <div class="common-box02">
                <h2 class="box02-tit">方案优势</h2>
                <ul class="box02-ul flex flex-wrap" style="padding-bottom: 10px;">
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/medical/icon01.png" alt="" />
                        <p class="li-txt">完善的大数据支撑平台，高效整合繁杂数据源。</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/medical/icon02.png" alt="" />
                        <p class="li-txt">开放式医疗数据访问接口，实现数据共享。</p>
                    </li>
                    <li class="box02-li">
                        <img class="li-icon" src="@/assets/images/solution/medical/icon03.png" alt="" />
                        <p class="li-txt">丰富的主题应用模块，满足各种需求。</p>
                    </li>
                </ul>
            </div>
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
            bannerTitle: '医疗',
            // 大数据平台
            // ->导航
            navIndex: 0,
            navList: ['基础设施层', '数据存储层', '数据处理层', '数据应用层'],
            // ->内容区
            screenIndex: 0, //同navIndex
            screenList: [
                {
                    title: '基础设施层',
                    desc:
                        '基础设施层由专为大数据定制的服务器及网络构成的集群组成，是构建大数据应用的硬件平台。数据源所涉及的对象包括医疗机构、社康、门诊，以及区公卫机构，医疗机构的HIS、LIS、PACS、CIS；社康HIS、CIS、CHSS以及公卫疾控系统、传染病上传系统等数据构成总体架构最基本数据源，数据源通过医疗机构、社康、公卫等的前置机进行采集，再通过前置机内置路由网关传输到数据平台，数据源层完成了各个分散系统的数据采集及传输。',
                    icon_path: require('@/assets/images/solution/medical/img01.png')
                },
                {
                    title: '数据存储层',
                    desc: '数据存储层则基于并行数据库系统以及Hadoop发行版及标准数据库实现。用来存储从每个医疗数据源收集来的海量结构化和非结构化数据。',
                    icon_path: require('@/assets/images/solution/medical/img02.png')
                },
                {
                    title: '数据处理层',
                    desc:
                        '数据处理层对数据进行处理，其处理内容包含：数据清洗、数据校验、数据转换。处理对象包含标准数据及非标准数据，处理的数据结构包括非结构化数据、半结构化数据及结构化数据（如非结构化数据的简单分析--过滤和统计、基于计算模型进行结构化数据和非结构化数据的统一关联和统计处理、复杂的分析和挖掘以及复杂问题的近似模糊求解等操作）。被处理的数据最终转化成符合医疗卫生信息化标准的卫生综合数据，标准数经过ETL后存入医疗中心数据仓库，为大数据应用做数据准备。',
                    icon_path: require('@/assets/images/solution/medical/img03.png')
                },
                {
                    title: '数据应用层',
                    desc:
                        '数据应用层为大数据应用平台提供类型丰富的访问接口，包括Search API、Pig、Hive QL以及专为用户设计的SJDBC（类JDBC）和UDF（用户自定义函数）接口，方便用户的使用。',
                    icon_path: require('@/assets/images/solution/medical/img04.png')
                }
            ]
        };
    },
    methods: {
        screenSwitch(index) {
            this.navIndex = index;
            this.screenIndex = index;
        }
    }
};
</script>

<style></style>
