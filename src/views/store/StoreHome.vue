<template>
  <div class="page-container">
    <!-- 店家平台 Power BI iframe 區塊 -->
    <div class="iframe-container">
      <iframe
        :key="$route.fullPath"
        title="Store Power BI Report"
        src="https://app.powerbi.com/view?r=eyJrIjoiYmI5YjdmY2UtYWIyMC00OTliLTgyMzMtZDQyYmU3ZjcxMmM1IiwidCI6IjFlZjg1NDQ4LTIwYzItNDQwYS04NzFkLTRmM2RlZjExMDQyZiIsImMiOjEwfQ%3D%3D"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreHome'
}
</script>

<style scoped>
.page-container {
  padding: 1.5rem;
  min-height: 100%;
}

/* iframe 容器 */
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  min-height: 300px;
  margin-bottom: 2rem;
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* 手機用固定高度 */
@media (max-width: 768px) {
  .iframe-container {
    padding-bottom: 0 !important;
    height: 400px;
  }

  .iframe-container iframe {
    position: relative;
    height: 100%;
  }
}
</style>
