<template>
  <div class="solution-page solution-page12">
    <v-nav :show="show"></v-nav>
    <div class="solution-banner solution-banner01 flex flex-ver">
      <h2 class="banner-title">{{ bannerTitle }}</h2>
    </div>
    <div class="content">
      <h2 class="title">方案概述</h2>
      <div class="desc common-desc">
        基于机器学习的异常发现、关联定位和分析处理，针对业务系统所有层级的日志数据，提供数据搜索、报表和可视化展现等功能。通过智能运维平台可以快速构建分布式应用程序。
      </div>
      <!--  -->
      <!-- <h1 style="color: red;">缺少图片</h1> -->
      <img class="content-img" src="@/assets/images/solution/operation/t-img.png" alt="" />
      <div class="common-box01">
        <h2 class="box01-tit">应用场景</h2>
        <ul class="img-box flex flex-jcsb">
          <li class="box-item">
            <img class="item-img" src="@/assets/images/solution/operation/img04.jpg" alt="" />
            <div class="item-inner">
              <img class="item-icon" src="@/assets/images/solution/operation/icon04.png" alt="" />
              <p class="item-txt">事件搜索</p>
            </div>
          </li>
          <li class="box-item">
            <img class="item-img" src="@/assets/images/solution/operation/img05.jpg" alt="" />
            <div class="item-inner">
              <img class="item-icon" src="@/assets/images/solution/operation/icon05.png" alt="" />
              <p class="item-txt">智能运维</p>
            </div>
          </li>
          <li class="box-item">
            <img class="item-img" src="@/assets/images/solution/operation/img06.jpg" alt="" />
            <div class="item-inner">
              <img class="item-icon" src="@/assets/images/solution/operation/icon06.png" alt="" />
              <p class="item-txt">安全分析</p>
            </div>
          </li>
          <li class="box-item">
            <img class="item-img" src="@/assets/images/solution/operation/img07.jpg" alt="" />
            <div class="item-inner">
              <img class="item-icon" src="@/assets/images/solution/operation/icon07.png" alt="" />
              <p class="item-txt">关联分析</p>
            </div>
          </li>
          <li class="box-item">
            <img class="item-img" src="@/assets/images/solution/operation/img08.jpg" alt="" />
            <div class="item-inner">
              <img class="item-icon" src="@/assets/images/solution/operation/icon08.png" alt="" />
              <p class="item-txt">运营分析</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="common-box02">
        <h2 class="box02-tit">方案优势</h2>
        <ul class="box02-ul flex flex-wrap">
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/operation/t-icon01.png" alt="" />
            <p class="li-txt">
              实时可用性
            </p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/operation/t-icon02.png" alt="" />
            <p class="li-txt">
              强大的搜索
            </p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/operation/t-icon03.png" alt="" />
            <p class="li-txt">
              灵活的数据模型
            </p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/operation/t-icon04.png" alt="" />
            <p class="li-txt">
              灵活定制仪表盘
            </p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/operation/t-icon05.png" alt="" />
            <p class="li-txt">
              支持复杂多样化的日志格式
            </p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/operation/t-icon06.png" alt="" />
            <p class="li-txt">
              开放的，可扩展的平台
            </p>
          </li>
        </ul>
      </div>
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
          name: seoKey
          // name: 'solutions3',
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
        bannerTitle: '智能运维解决方案'
      };
    }
  };
</script>

<style></style>
