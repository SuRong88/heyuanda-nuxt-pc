<template>
  <div class="v-footer">
    <div class="con">
      <div class="fl">
        <a  href="http://www.beian.miit.gov.cn" target="_blank">
          <img :src="webInfo.website_logo_bottom" alt="" class="logo" />
          <p class="text">{{webInfo.website_copyright}}{{webInfo.website_icp_numb}}</p>
        </a>
      </div>
      <div class="fr">
        <div class="msg">
          <div class="box">
            <p class="tel">
              {{webInfo.kefu_phone}}
            </p>
            <div class="sbox">
              <img src="@/assets/images/footer_icon01.png" alt="" />
              <p>服务热线</p>
            </div>
          </div>
          <div class="box">
            <p class="tel">
              {{webInfo.kefu_fax}}
            </p>
            <div class="sbox">
              <img src="@/assets/images/footer_icon02.png" alt="" />
              <p>公司传真</p>
            </div>
          </div>
        </div>

        <div class="qr">
          <img :src="webInfo.website_qrcode" alt="" />
          <!-- <img src="@/assets/images/footer_qr.jpg" alt="" /> -->
          <p>扫一扫 微信二维码</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      webInfo() {
        return this.$store.state.webInfo
      }
    },
  }
</script>

<style></style>
