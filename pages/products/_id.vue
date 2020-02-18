<template>
    <div class="product-page">
        <v-nav></v-nav>
        <v-sidebar @sideSwitch="sideSwitchHandle"></v-sidebar>
        <no-ssr>
            <swiper class="index_swiper" :options="swiperOption" ref="Swiper">
                <!-- 每一屏 -->
                <swiper-slide v-for="(item, index) in list[currentIndex]" class="product-screen">
                    <div class="product-banner flex" :class="{ active: item.show }">
                        <div class="banner-img-box"><img :src="item.path" alt="" class="banner-img" /></div>
                        <div class="banner-txt-box">
                            <h2 class="banner-title">{{ item.title }}</h2>
                            <div class="banner-txt" v-html="item.txt"></div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </no-ssr>
        <p class="copyright">和元达信息科技有限公司 Copyright © 2006-2015.TechViewInfo Co., Ltd.All rights reserved.粤ICP备16003606号-2</p>
    </div>
</template>
<script>
import vNav from '@/components/vNav.vue';
import vSidebar from '@/components/vSidebar.vue';
export default {
    components: {
        vNav,
        vSidebar
    },
    created() {
        // this.currentIndex = this.$route.params.id * 1 - 1;
        // console.log(this.currentIndex);
    },
    data() {
        let that = this;
        return {
            swiperOption: {
                direction: 'vertical',
                mousewheelControl: true,
                simulateTouch: false,
                pagination: '.index_swiper > .swiper-pagination',
                paginationClickable: true,
                onInit: function(swiper) {
                    // that.frontend.firOn = 'on1';
                    setTimeout(() => {
                        // that.frontend.firOn = 'on2';
                        that.list[that.currentIndex][that.currentSubIndex].show = true;
                    }, 2000);
                },
                onTransitionEnd: function(swiper) {
                    switch (swiper.realIndex) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                        case 4:
                            break;
                    }
                }
            },
            currentIndex: 0,
            currentSubIndex: 0,
            list: [
                // 聚客易 G-EASY
                [
                    {
                        title: '基础数据服务平台',
                        txt: '暂无内容',
                        path: '',
                        show: false
                    },
                    // 大数据应用
                    {
                        title: '大数据智慧交通',
                        txt:
                            '大数据刻画城市交通情况，洞察工作人群的分布和出行规律大数据智慧交通，为缓解城市交通拥堵和城市建设选址规划，提供基于数据证据的综合决策，实现交通和生活的和谐，提高城市的宜居性。',
                        path: require('@/assets/images/product/img05.png'),
                        show: false
                    },
                    {
                        title: '大数据位置商业应用',
                        txt:
                            '为商业推广、目标客户筛选、市场运营等决策提供依据<br />大数据位置商业应用是基于用户准实时位置相关大数据基础上，结合实际的地理区域特性，为客户提供人流特征分析、商圈特征分析、选址综合分析以及交通规律分析；让客户从更综合、更具体、更实时的分析数据中更省时省力的做出最优选择。',
                        path: require('@/assets/images/product/img06.png')
                    },
                    {
                        title: '食品安全追溯系统(区块链)',
                        txt:
                            '区块链技术打造食品安全系统，通过构建养殖场、屠宰加工、物流商、零售商四个参与方的区块链商业网络平台，实现从原料加工再到运输销售各个环节之间的可追溯性。',
                        path: require('@/assets/images/product/img07.png')
                    }
                ],
                // 大数据引擎
                [
                    {
                        title: '和元达大数据分析平台',
                        txt:
                            '基于低成本、低门槛实现信息化，聚焦应用开发、提高效率和元达大数据分析平台分为SaaS层、PaaS层 和 IaaS层，适用于不同场景的大数据应用服务，同时可根据不同需求提供对应的大数据解决方案。',
                        path: require('@/assets/images/product/img02.png')
                    },
                    {
                        title: '和元达数据生产管理平台',
                        txt:
                            '强管控、全过程、可视化<br />和元达数据生产管理平台为企业构建知行合一的全过程业务化可视、可管、可控的指标系统，以良好的可管理性、可维护性、可扩展性的IT 管控系统来实现持续的生产数据管控。通过数据对象将元数据、数据质量和数据处理三者进行融合。',
                        path: require('@/assets/images/product/img03.png')
                    },
                    {
                        title: '智慧容量专家',
                        txt:
                            '精准、快速地为您提供系统容量解决方案<br>以实时大数据处理、AI技术为基础，由轻量化、低侵入、松耦合的IT主动监控、应用性能管理等模块为支撑，通过数据管理、性能管控和容量评估三大产品平台，从业务容量、服务容量和IT部件容量三个维度进行综合分析评估，通过构建性能容量模型，实现智能化运维以及对系统容量的有效预测、评估与跟踪，充分挖掘大数据的价值。',
                        path: require('@/assets/images/product/img04.png')
                    },
                    {
                        title: 'DMP平台',
                        txt:
                            'DMP平台基于精准客户画像获取目标客户、最佳接触时间、最佳接触渠道等信息，运用AI及Look-alike技术进行用户量级扩展，并通过外呼、短信、 线上广告投放等多种渠道，为客户实现精准营销或者市场调研等。',
                        path: require('@/assets/images/product/img01.png')
                    }
                ],
                // 数据安全
                [
                    {
                        title: '和元达数据管理一体机TDM',
                        txt:
                            '高效可靠的备份方式、分钟级别的数据恢复，和元达数据管理一体机（TDM）搭建了备份云体系，集合了数据备份、数据容灾、数据高可用等功能的企业级数据安全保护平台，支持多租户的共享使用，以及本地和云端数据的协同，保护企业的操作系统、数据库、应用、文件、虚拟机等数据，在遭遇数据灾难时，能完整、准确、快速地还原数据，最大化降低企业的经济损失。',
                        path: require('@/assets/images/product/img08.png')
                    },
                    {
                        title: '机房统一监控管理系统TUMS',
                        txt:
                            '和元达带外监控系统（TVI Unified Monitoring System） 可基于现有网管系统进行快速部署,提供详细的机房空间管理、能耗管理以及全自动真实物理设备的资产管理，使资产做到有据可查，有数可依。和元达带外监控系统能够监测用户机房设备的物理状态，解决人工巡检不及时问题；能够自动判断硬件故障的源头，缩短故障排除时间，提高故障处理效率。并且提供了全数字KVM解决方案，能够提供统一的远程控制管理，解决传统KVM产品不能解决的鼠标重影问题。',
                        path: require('@/assets/images/product/img09.png')
                    }
                ]
            ]
        };
    },
    methods: {
        // 侧边栏切换
        sideSwitchHandle(data) {
            console.log(data);
            this.currentIndex = data.index;
            this.currentSubIndex = data.subIndex;
            this.list[this.currentIndex][this.currentSubIndex].show = true;
        }
    },
    computed: {
        swiper() {
            return this.$refs.Swiper.swiper;
        }
    }
};
</script>

<style></style>
