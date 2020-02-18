<template>
  <div class="solution-page solution-page07">
    <v-nav :show="show"></v-nav>
    <div class="solution-banner solution-banner07 flex flex-ver">
      <h2 class="banner-title">{{ bannerTitle }}</h2>
    </div>
    <div class="content wrapper">
      <section class="sec-box01">
        <h2 class="title">方案概述</h2>
        <div class="desc">
          通过统一的数据标准制定和发布，结合制度约束、系统控制等手段实现企业级大数据平台数据的完整性、有效性、一致性、规范性、开放性和共享性管理，提高企业的数据治理水平。
        </div>
        <img class="box-img" src="@/assets/images/solution/img01.png" alt="" />
      </section>
      <section class="sec-box02">
        <h2 class="title">方案内容</h2>
        <div class="sec-box02-con">
          <h3 class="sub-tit flex-1">数据治理原则</h3>
          <div class="box02-main flex">
            <ul class="box02-main-l">
              <li class="box02-l-item">
                <p class="l-item-tit">开放性</p>
                <p class="l-item-txt">标准制定人人参与</p>
              </li>
              <li class="box02-l-item">
                <p class="l-item-tit">共享性</p>
                <p class="l-item-txt">数据标准化信息在大数据生态圈共享使用</p>
              </li>
              <li class="box02-l-item">
                <p class="l-item-tit">规范性</p>
                <p class="l-item-txt">制度规范、流程控制、系统管理等</p>
              </li>
              <li class="box02-l-item">
                <p class="l-item-tit">有效性</p>
                <p class="l-item-txt">信息准确度高，理解上不存在歧义</p>
              </li>
              <li class="box02-l-item">
                <p class="l-item-tit">一致性</p>
                <p class="l-item-txt">做到“五统一”，定义统一、口径统一、名称统一、来源统一、参照统一</p>
              </li>
              <li class="box02-l-item">
                <p class="l-item-tit">完整性</p>
                <p class="l-item-txt">涵盖客户、产品、服务、帐务、资源、网络等全部重要数据信息</p>
              </li>
            </ul>
            <div class="box02-main-r flex flex-ver"><img class="box-img" src="@/assets/images/solution/img02.png" alt="" /></div>
          </div>
        </div>
      </section>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
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
        meta: [{
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
      }
    },
    created() {
      let seoKey = this.$route.path;
      this.$admin_base([
        this.$get(URL.getSEOInfo, {
          // name: 'solutions2',
          name: seoKey
        })
      ], [
        (res) => {
          console.log('seo');
          console.log(res.data);
          this.SEOInfo = res.data
        }
      ])
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
        bannerTitle: '数据治理解决方案'
      };
    }
  };
</script>

<style></style>
