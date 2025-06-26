<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import SepLayout from '@/layouts/SepLayout.vue' 
import StoreLayout from '@/layouts/StoreLayout.vue'
import SynetLayout from '@/layouts/SynetLayout.vue'
import SalesLayout from '@/layouts/SalesLayout.vue'
import RdLayout from '@/layouts/RdLayout.vue'


export default {
  computed: {
    layout() {
      const type = this.$route.meta.layout
      if (type === 'none') return EmptyLayout
      if (type === 'sep') return SepLayout
      if (type === 'store') return StoreLayout       
      if (type === 'synet') return SynetLayout       
      if (type === 'sales') return SalesLayout       
      if (type === 'rd') return RdLayout       
      return DefaultLayout
    }
  }
}
</script>
