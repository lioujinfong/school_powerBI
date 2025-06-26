<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <!-- 左側 logo 與標題 -->
      <div class="left-section">
        <div class="circle">
          <img src="@/assets/mcu_logo.png" alt="Logo" class="circle-img">
        </div>
        <a class="navbar-brand">{{ $t('navbar_store.storeTitle') }}</a>
      </div>

      <!-- 右側會員資訊 -->
      <div class="user-info">
        <img src="@/assets/user-icon.png" alt="User Icon" class="user-icon">
        <span class="user-name">{{ $t('navbar_store.user') }}</span>
      </div>

      <!-- 語言切換 -->
      <div class="lang-switch">
        <button class="lang-btn" @click="switchLang('zh')">中文</button>
        <button class="lang-btn" @click="switchLang('en')">EN</button>
      </div>
    </div>
  </nav>
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
.navbar {
  background: #FA5015 !important;
  box-shadow: 0rem 0.125rem 0.125rem rgb(230, 230, 230);
  display: flex;
  align-items: center;
}

.navbar > .container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section {
  display: flex;
  align-items: center;
}

.navbar-brand {
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
}

.navbar-brand:hover {
  color: white;
  text-decoration: none;
}

.circle {
  margin: 1.25rem;
  width: 4.6875rem;
  height: 4.6875rem;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-img {
  width: 3.4375rem;
  height: 3.4375rem;
  object-fit: cover;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.user-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  color: white;
  font-size: 1.125rem;
  font-weight: bold;
}

.lang-switch {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  background-color: white;
  border: none;
  color: #fa5015;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.lang-btn:hover {
  background-color: #ffd6c2;
}

/*RWD*/
@media (max-width: 768px) {
  .navbar > .container-fluid {
    flex-direction: column;
    align-items: flex-start;
  }

  .left-section {
    margin-bottom: 0.5rem;
  }

  .user-info,
  .lang-switch {
    margin-bottom: 0.5rem;
  }

  .navbar-brand {
    font-size: 1.5rem;
  }

  .circle {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem 0.75rem 0.5rem 0;
  }

  .circle-img {
    width: 2.25rem;
    height: 2.25rem;
  }

  .user-icon {
    width: 2rem;
    height: 2rem;
  }

  .user-name {
    font-size: 1rem;
  }

  .lang-btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
