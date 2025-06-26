<template>
  <div class="synet-layout">
    <!-- 頂部導覽列 -->
    <SynetHeader />

    <!-- 主體區塊：側邊欄 + 內容 -->
    <div class="main-body">
      <div class="sidebar">
        <SynetSidebar />
      </div>
      <div class="content">
        <slot />
      </div>
    </div>

    <!-- Footer -->
    <CFooter />
  </div>
</template>

<script>
import SynetHeader from '@/components/synet/SynetHeader.vue'
import SynetSidebar from '@/components/synet/SynetSidebar.vue'
import CFooter from '@/components/isp/CFooter.vue'

export default {
  name: 'SynetLayout',
  components: {
    SynetHeader,
    SynetSidebar,
    CFooter
  }
}
</script>

<style scoped>
.synet-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-body {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: calc(100vh - 60px);
  overflow: hidden;
}

.sidebar {
  width: 220px;
  flex-shrink: 0;
  background-color: #f5f5f5;
  padding: 1rem;
  overflow-y: auto;
}

/* 手機版側邊欄全寬 */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}

.content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  min-height: 0;
}

@media (max-width: 768px) {
  .main-body {
    flex-direction: column;
  }

  .content {
    padding: 1rem;
    min-height: auto;
    flex: none;
  }
}
</style>
