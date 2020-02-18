<template>
  <div class="about-page about-detail">
    <v-nav :show="show"></v-nav>
    <div class="about-banner about-banner01 flex flex-center">
      <div class="banner-title-box">
        <h2 class="banner-title-cn">{{ bannerTitleCn }}</h2>
        <h2 class="banner-title-en">{{ bannerTitleEn }}</h2>
      </div>
    </div>
    <div class="content wrapper clear">
      <div class="con-l fl">
        <div class="l-head">
          <div class="date" v-if="detail.create_time">
            {{detail.create_time | formatDate('yyyy年MM月dd日')}}
          </div>
          <h2 class="tit">
            {{detail.name}}
          </h2>
        </div>
        <div class="content-main edit_textBox" v-html="detail.body">

        </div>
      </div>
      <div class="con-r fr">
        <div class="r-head">
          <h3 class="tit">文章推荐</h3>
        </div>
        <!-- 推荐 -->
        <ul class="recom-box" v-if="detail.recommend && detail.recommend.length>0">
          <nuxt-link tag="li" :to="{
                            name: 'detail-type',
                            params: {
                                type: `${type}-${item.id}`
                            }
                        }"
            v-for="(item, index) in detail.recommend" :key="index" class="recom-item">
            <p class="recom-date">
              {{item.create_time | formatDate('yyyy年MM月dd日')}}
            </p>
            <p class="recom-tit">
              {{item.name}}
            </p>
          </nuxt-link>
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
        title: this.detail.seo_title,
        meta: [{
            hid: 'keywords',
            name: 'keywords',
            content: this.detail.seo_keyword
          },
          {
            hid: 'description',
            name: 'description',
            content: this.detail.seo_desc
          }
        ]
      }
    },
    created() {
      if (!this.$route.params.type) {
        this.$errorToast('缺少必要参数');
        return setTimeout(() => {
          return this.$router.go(-1);
        }, 2000);
      }
      let type = this.$route.params.type.split('-')[0];
      let id = this.$route.params.type.split('-')[1];
      this.type = type;
      this.bannerTitleCn = type == 'company' ? '公司动态' : '行业动态';
      this.bannerTitleEn = type == 'company' ? 'Company news' : 'Industry news';
      this.$admin_base([
        this.$get(URL.getArticleDetail, {
          id: id,
        })
      ], [
        (res) => {
          this.detail = res.data
          console.log('文章详情');
          console.log(this.detail);
        }
      ])
    },
    mounted() {
      // 导航栏显示背景颜色,fixed
      this.$fixHeader(this, 280);
    },
    data() {
      return {
        // 文章详情
        detail: {
        },
        // 文章类型
        type: '',
        show: false,
        // banner标题
        bannerTitleCn: '标题',
        bannerTitleEn: 'Title'
        // 正文标题
        // titleCn: '',
        // titleEn: ''
      };
    },
    methods: {}
  };
</script>

<style></style>
