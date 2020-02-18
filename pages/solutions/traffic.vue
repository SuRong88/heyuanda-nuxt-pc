<template>
  <div class="solution-page solution-page09">
    <v-nav :show="show"></v-nav>
    <div class="solution-banner solution-banner01 flex flex-ver">
      <h2 class="banner-title">{{ bannerTitle }}</h2>
    </div>
    <div class="content">
      <h2 class="title">方案概述</h2>
      <div class="desc common-desc">
        基于用户在运营商侧的高质、实时行为与业务数据，运用和元达大数据分析平台，充分糅合用户通信、行为数据与用户位置数据，无论是在用户出行变化、交通工具使用习惯、人口密度变化、交通疏导数据支撑等都可以实现实时精准的全方面数据支撑，为政府、企业实现资源优化配置打造坚实的数据基石。
      </div>
      <img class="content-img" src="@/assets/images/solution/traffic/t-img.png" alt="" />
      <div class="common-box01">
        <h2 class="box01-tit">应用场景</h2>
        <ul class="box01-ul flex flex-jcsb">
          <li class="box01-li">
            <div class="li-t">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/traffic/t-icon01.png" alt="" /></div>
              <p class="li-tit">汽车租赁</p>
            </div>
            <div class="li-b">
              基于用户的网络搜索、APP使用、信令位置、交往圈情况，精准识别出用户的用车需求，可为汽车租凭公司提供有效实时的需求数据支撑，为汽车租凭公司在店铺选择、资源配置上提供坚实的数据支撑。
            </div>
          </li>
          <li class="box01-li">
            <div class="li-t">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/traffic/t-icon02.png" alt="" /></div>
              <p class="li-tit">公共资源调配</p>
            </div>
            <div class="li-b">
              基于用户的信令位置数据，通过大数据的持续性监测，运用和元达大数据分析平台，可精准的了解到人口密度的变化情况，可为政府部门在公共交通、道路疏通等方面提供真实、实时有效的数据支撑，有利于提升公共资源的合理调配。
            </div>
          </li>
          <li class="box01-li">
            <div class="li-t">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/solution/traffic/t-icon03.png" alt="" /></div>
              <p class="li-tit">房产销售</p>
            </div>
            <div class="li-b">
              基于用户的基础信息数据、信令位置数据、APP使用数据、网络搜索数据等实时大数据，运用和元达大数据分析平台，通过智能规则识别引擎，精准识别出有房产购买、租凭需求的用户及其画像，有助于分析顾客的消费行为和价值趣向，便于更好地为消费者服务和发展忠诚顾客。
            </div>
          </li>
        </ul>
      </div>
      <div class="common-box02">
        <h2 class="box02-tit">方案优势</h2>
        <ul class="box02-ul flex flex-wrap">
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/traffic/t-icon04.png" alt="" />
            <p class="li-txt">
              数据精准、全面
            </p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/traffic/t-icon05.png" alt="" />
            <p class="li-txt">数据连贯，利于分析趋势，回溯效果</p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/traffic/t-icon06.png" alt="" />
            <p class="li-txt">可视化操作，简单快捷</p>
          </li>
          <li class="box02-li">
            <img class="li-icon" src="@/assets/images/solution/traffic/t-icon07.png" alt="" />
            <p class="li-txt">低成本、高收益</p>
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
          // name: 'solutions9',
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
        bannerTitle: '交通出行解决方案'
      };
    }
  };
</script>

<style></style>
