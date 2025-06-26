<template>
  <div class="homepage">
    <!-- 語言切換按鈕 -->
    <div class="lang-toggle">
      <button @click="switchLang('zh')">中文</button>
      <button @click="switchLang('en')">EN</button>
    </div>

    <h1>{{ $t('controller.title') }}</h1>
    <p>{{ $t('controller.subtitle') }}</p>

    <!-- 國際生留台追蹤管理平台按鈕 -->
    <router-link to="/partAll" class="enter-button">
      {{ $t('controller.enter') }}
    </router-link>

    <!-- 薪資概算平台按鈕 -->
    <router-link to="/sep/home" class="enter-button">
      {{ $t('controller.salaryPlatform') }}
    </router-link>

    <!-- 店家 -->
    <router-link to="/store/home" class="enter-button">
      {{ $t('navbar_store.storeTitle') }}
    </router-link>

    <!-- 好思通國際股份有限公司 -->
    <router-link to="/synet/home" class="enter-button">
      {{ $t('navbar_synet.synetTitle') }}
    </router-link>

    <!-- 業務部門 -->
    <router-link to="/sales/home" class="enter-button">
      {{ $t('navbar_sales.salesTitle') }}
    </router-link>

    <!-- R&D部門 -->
    <router-link to="/rd/home" class="enter-button">
      {{ $t('navbar_rd.rdTitle') }}
    </router-link>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function switchLang(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
}

.lang-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
}

.lang-toggle button {
  background-color: white;
  border: 1px solid #ccc;
  padding: 0.4rem 0.8rem;
  margin-left: 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lang-toggle button:hover {
  background-color: #eee;
}

.enter-button {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background-color: #FA5015;
  color: white;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 260px; /* 統一按鈕寬度 */
  text-align: center;
}

.enter-button:hover {
  background-color: #d8440f;
}
</style>
