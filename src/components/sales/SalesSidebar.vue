<template>
  <div class="sidebar-wrapper">
    <!-- 選單按鈕：僅手機顯示 -->
    <button class="menu-toggle d-md-none" @click="toggleMenu">
      ☰ 選單
    </button>

    <!-- 卡片列表 -->
    <div class="card-carousel-wrapper" v-if="!isMobile || showMenu">
      <router-link
        :to="item.path"
        v-for="item in items"
        :key="item.title"
        class="card-link"
        @click="onSelect"
      >
        <div
          class="card"
          :class="{ active: isActive(item.path) }"
          :style="getCardStyle(item.path)"
        >
          <div class="card-content">
            <div class="card-icon">
              <i class="bi" :class="item.icon"></i>
            </div>
            <div class="card-item">
              <div class="card-title"><h3>{{ $t(item.titleKey) }}</h3></div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesSidebar',
  data() {
    return {
      items: [
            {
                titleKey: 'sidebar_sales.home',
                path: '/sales/home',
                icon: 'bi-shop-window',
                color: '#FF5733'
            },
            {
                titleKey: 'sidebar_sales.analysis',
                path: '/sales/analysis',
                icon: 'bi-bar-chart-line-fill',
                color: '#4E9E47'
            },
            {
                titleKey: 'sidebar_sales.cost',
                path: '/sales/cost',
                icon: 'bi-cash-stack',
                color: '#FDC607'
            },
            {
                titleKey: 'sidebar_sales.hcm',
                path: '/sales/hcm',
                icon: 'bi-people-fill',
                color: '#2894FF'
            },
            {
                titleKey: 'sidebar_sales.tax',
                path: '/sales/tax',
                icon: 'bi-receipt-cutoff',
                color: '#FA5015'
            }
            ],
      isMobile: false,
      showMenu: false
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
    getCardStyle(path) {
      const activeItem = this.items.find(item => item.path === path)
      if (this.isActive(path) && activeItem) {
        return {
          backgroundColor: activeItem.color,
          color: 'white'
        }
      }
      return {}
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    onSelect() {
      if (this.isMobile) this.showMenu = false
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
      if (!this.isMobile) {
        this.showMenu = false
      }
    }
  }
}
</script>

<style scoped>
/* 與原本 SepSidebar 相同，省略已重複樣式 */
.card-carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  display: flex;
  width: 12.5rem;
  height: 8.125rem;
  margin: 1.25rem;
  border: none;
  border-radius: 1.25rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
}
.card-content {
  display: flex;
  width: 100%;
  justify-content: center;
}
.card-icon {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-title h3 {
  font-size: 1.25rem;
  font-weight: bold;
}
a {
  text-decoration: none;
}
.card-icon i {
  font-size: 60px;
}
@media (max-width: 768px) {
  .card {
    width: 10rem;
    height: 6.5rem;
    margin: 0.75rem;
  }
  .card-title h3 {
    font-size: 1rem;
  }
  .card-icon i {
    font-size: 40px;
  }
}
.sidebar-wrapper {
  width: 100%;
}
.menu-toggle {
  background-color: #fa5015;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: none;
}
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
}
</style>
