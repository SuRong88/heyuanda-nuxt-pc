<template>
  <ul class="sidebar">
    <!-- 一级 -->
    <li @click="sideHandle(index)" v-if="sideList.length" v-for="(item, index) in sideList" :key="index" class="side-item"
      :class="{ active: item.show }">
      <div class="side-item-hd flex flex-ver flex-jcsb">
        <span class="item-title">{{ item.title }}</span>
        <img class="item-icon" src="@/assets/images/product/arrow.png" alt="" />
      </div>
      <!-- 二级 -->
      <ol v-show="item.show" v-if="item.subList.length" class="sub-menu">
        <template v-if="index == 0">
          <li :class="{ 'is-active': currentIndex == index && currentSubIndex == 0 }" class="sub-item" @click.stop="sideSubHandle(0, 0)">
            {{ item.subList[0].subTitle }}
          </li>
          <li class="min-title">
            {{ item.subList[1].subTitle }}
            <dl>
              <dd @click.stop="sideSubHandle(0, minIndex + 1)" class="min-sub-item" :class="{ 'is-active': currentIndex == 0 && currentSubIndex == minIndex + 1 }"
                v-if="item.subList[1].minList && item.subList[1].minList.length" v-for="(minItem, minIndex) in item.subList[1].minList">
                {{ minItem.minTitle }}
              </dd>
            </dl>
          </li>
        </template>
        <li v-else @click.stop="sideSubHandle(index, subIndex)" v-for="(subItem, subIndex) in item.subList" :key="subIndex"
          class="sub-item" :class="{ 'is-active': currentIndex == index && currentSubIndex == subIndex }">
          {{ subItem.subTitle }}
        </li>
      </ol>
    </li>
  </ul>
</template>

<script>
  export default {
    created() {},
    props: ['currentIndex', 'currentSubIndex'],
    data() {
      return {
        sideList: [{
            title: '聚客易 G-EASY',
            min: true,
            subList: [{
                subTitle: '互联网基础数据平台',
                subLink: '1-1'
              },
              {
                subTitle: '大数据应用',
                // 三级
                minList: [{
                    minTitle: '大数据智慧交通',
                    minLink: '3-1'
                  },
                  {
                    minTitle: '大数据位置商业应用',
                    minLink: '3-2'
                  },
                  {
                    minTitle: '食品安全追溯系统(区块链)',
                    minLink: '3-3'
                  }
                ]
              }
            ],
            show: true
          },
          {
            title: '大数据引擎',
            subList: [{
                subTitle: '和元达大数据分析平台',
                subLink: '2-1'
              },
              {
                subTitle: '和元达数据生产管理平台',
                subLink: '2-2'
              },
              {
                subTitle: '智慧容量专家',
                subLink: '2-3'
              },
              {
                subTitle: 'DMP平台',
                subLink: '2-4'
              }
            ],
            show: false
          },
          {
            title: '数据安全',
            subList: [{
                subTitle: '和元达数据管理一体机TDM',
                subLink: '3-1'
              },
              {
                subTitle: '机房统一监控管理系统TUMS',
                subLink: '3-2'
              }
            ],
            show: false
          }
        ]
      };
    },
    watch: {
      currentIndex() {
        this.sideList.forEach(i => {
          i.show = false;
        });
        this.sideList[this.currentIndex].show = true;
      }
    },
    methods: {
      // 一级
      sideHandle(currentIndex) {
        this.sideList.forEach(i => {
          i.show = false;
        });
        this.sideList[currentIndex].show = true;
      },
      sideSubHandle(index, subIndex) {
        console.log(index, subIndex);
        this.$emit('sideSwitch', {
          index,
          subIndex
        });
      }
    }
  };
</script>

<style lang="less">
  .min-title {
    line-height: 45px;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .min-sub-item {
    font-weight: 400;
    line-height: 40px;
    cursor: pointer;
    font-size: 15px;
    line-height: 40px;
    color: rgba(255, 255, 255, 0.5);

    &.is-active {
      color: rgba(255, 255, 255, 1);
    }
  }
</style>
