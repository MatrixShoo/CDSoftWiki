---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "软件指南Wiki"
  text: "Software Wiki"
  tagline: 软件操作设置指南
  image:
    src: https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/logo.png.png
    alt: download
  actions:
    - theme: brand
      text: 营业前台
      link: /营业前台/桑拿水会/前台开牌
    - theme: alt
      text: 常见问题
      link: /常见问题/手牌占用问题
    - theme: brand
      text: 后台管理
      link: /系统设置/商品管理/项目类别管理
    - theme: alt
      text: 库房管理
      link: /库房管理/库存管理/库存操作
    - theme: brand
      text: 线上平台
      link: /线上平台/微信平台/商城售票

features:
  - icon: 
      src: https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/202502261524582.svg
    title: OTA票务
    details: 集成主流票务平台的核销接口，旨在提供便捷的验票和核销服务。服务覆盖了包括美团、抖音、口碑、票付通、乐活游等在内的众多渠道。
  - icon:
      src: https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/202502261507937.svg
    title: 微信平台
    details: 提供全面的微信平台解决方案，包括但不限于微信商城搭建、电子票券系统、电子会员卡服务、自助点单与结账系统、各类商城营销活动、满减促销活动以及针对性的票务推广服务。
  - icon:
      src: https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/202502261509348.svg
    title: 通用接口
    details: 软件支持多种硬件设备接口。包括但不限于台式电脑、触摸一体机、自助结账机、打印机、各式读卡器、报钟器、闸机以及先进的生物识别技术如人脸识别和指纹识别等。
  - icon:
      src: https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/202502261511053.svg
    title: 库房管理
    details: 系统具备完善的库房管理流程，精准的吧台递减，帮助您优化库存和成本的管理管控！
  
---
<script setup>
import { onMounted } from 'vue'

const downloadFile = () => {
  const timestamp = new Date().getTime() // 防止缓存
  const link = document.createElement('a')
  link.href = `https://files.oo0oo.tech:5245/d/SAAS%E8%BD%AF%E4%BB%B6/%E7%A8%8B%E5%BA%8F%E6%9C%8D%E5%8A%A1/%E6%88%90%E5%A4%A7%E8%BD%AF%E4%BB%B6/%E6%88%90%E5%A4%A7%E8%BD%AF%E4%BB%B6-PC%E5%AE%A2%E6%88%B7%E7%AB%AF.exe`
  link.download = '成大软件-PC客户端.exe'
  link.style.display = 'none'
  document.body.appendChild(link)
  
  try {
    link.click()
  } catch (e) {
    alert('下载失败，请检查浏览器设置或联系管理员')
  } finally {
    document.body.removeChild(link)
  }
}

onMounted(() => {
  const img = document.querySelector('.VPImage.image-src')
  img?.addEventListener('click', downloadFile)
  img?.setAttribute('title', '点击下载客户端')
})
</script>

<style>
:root {
  --vp-home-hero-image-filter: blur(0px); /* 解除图片滤镜影响事件 */
}
</style>