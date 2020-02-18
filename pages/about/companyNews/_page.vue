<template>
  <div class="about-page about-company">
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
      <div class="news-box wrapper">
        <nuxt-link target='_blank' :to="{
                        name: 'detail-type',
                        params: {
                            type: 'company-' + item.id
                        }
                    }"
          v-if="list.length>0" v-for="(item, index) in list" class="news-item flex" :class="{ latest: index == 0 }">
          <div class="item-l">
            <div class="date">
              {{ item.create_time | formatDate('MM-dd') }}
            </div>
            <div class="year">
              {{ item.create_time | formatDate('yyyy') }}
            </div>
          </div>
          <div class="item-m">
            <div class="item-m-tit">
              {{item.name}}
            </div>
            <div class="item-m-txt">
              {{item.body}}
            </div>
          </div>
          <div class="item-r">
            <img class="item-img" :src="item.cover" alt="" /></div>
        </nuxt-link>
      </div>
      <!-- 分页器 -->
      <div class="flex flex-center">
        <el-pagination @current-change="handleCurrentChange" class="pagination" background layout="prev, pager, next"
          :page-size="limit" :current-page="current_page" :total="total_page"></el-pagination>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
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
    validate({
      params
    }) {
      // Must be a number
      return /^\d+$/.test(params.page)
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
          // name: 'about4',
          name: seoKey
        })
      ], [
        (res) => {
          console.log('seo');
          console.log(res.data);
          this.SEOInfo = res.data
        }
      ])
      this.current_page = this.$route.params.page * 1 || 1;
      this.$admin_base([
        this.$get(URL.getArticleList, {
          type: 1,
          page: this.current_page,
          rownum: this.limit
        })
      ], [
        (res) => {
          console.log('公司动态');
          console.log(res.data);
          this.list = res.data.list || []
          let pagination = res.data.pagination
          this.limit = pagination.rownum * 1
          this.current_page = pagination.current * 1
          this.total_page = pagination.total_page * 1
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
        list: [],
        limit: 8,
        current_page: 1,
        total_page: 1,
        // banner导航下标
        index: 'company',
        // 展示导航栏背景颜色
        show: false,
        // banner标题
        bannerTitleCn: '精准，轻松致胜',
        bannerTitleEn: 'Accuracy, Easy Business.',
        // 正文标题
        titleCn: '公司动态',
        titleEn: 'Company news'
      };
    },
    methods: {
      handleCurrentChange(page) {
        let params = JSON.parse(JSON.stringify(this.$route.params));
        params.page = page;
        this.$router.push({
          params: params
        });
      }
    }
  };
</script>

<style></style>
