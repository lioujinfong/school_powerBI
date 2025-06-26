import { createRouter, createWebHistory } from 'vue-router'

// 控制首頁類
import HomePage from '@/views/HomePage.vue'
import StudentStay from '@/views/StudentStay.vue'

// Part 模組
import PartAll from '../views/isp/PartAll.vue'
import PartHome from '../views/isp/PartHome.vue'
import PartOne from '../views/isp/PartOne.vue'
import PartTwo from '../views/isp/PartTwo.vue'
import PartThree from '@/views/isp/PartThree.vue'
import PartFour from '../views/isp/PartFour.vue'

// Work 模組
import WorkOne from '../views/isp/WorkOne.vue'
import WorkTwo from '../views/isp/WorkTwo.vue'

//sep 模組
import SepHome from '../views/sep/SepHome.vue'
import SepHcm from '../views/sep/SepHcm.vue'
import SepCost from '../views/sep/SepCost.vue'
import SepAnalysis from '../views/sep/SepAnalysis.vue'
import SepTax from '../views/sep/SepTax.vue'

// store 模組
import StoreHome from '@/views/store/StoreHome.vue'
import StoreAnalysis from '@/views/store/StoreAnalysis.vue'
import StoreCost from '@/views/store/StoreCost.vue'
import StoreHcm from '@/views/store/StoreHcm.vue'
import StoreTax from '@/views/store/StoreTax.vue'

//好思通模組
import SynetHome from '@/views/synet/SynetHome.vue'
import SynetAnalysis from '@/views/synet/SynetAnalysis.vue'
import SynetCost from '@/views/synet/SynetCost.vue'
import SynetHcm from '@/views/synet/SynetHcm.vue'
import SynetTax from '@/views/synet/SynetTax.vue'

//業務模組
import SalesHome from '@/views/sales/SalesHome.vue'
import SalesAnalysis from '@/views/sales/SalesAnalysis.vue'
import SalesCost from '@/views/sales/SalesCost.vue'
import SalesHcm from '@/views/sales/SalesHcm.vue'
import SalesTax from '@/views/sales/SalesTax.vue'


//RD模組
import RdHome from '@/views/rd/RdHome.vue'
import RdAnalysis from '@/views/rd/RdAnalysis.vue'
import RdCost from '@/views/rd/RdCost.vue'
import RdHcm from '@/views/rd/RdHcm.vue'
import RdTax from '@/views/rd/RdTax.vue'

//控制頁
const controlRoutes = [
  {
    path: '/',
    component: HomePage,
    meta: { layout: 'none' }
  },
  {
    path: '/student-stay',
    component: StudentStay,
    meta: { layout: 'default' }
  }
]

//國際生留台追蹤平台
const partRoutes = [
  {
    path: '/partAll',
    name: 'partAll',
    component: PartAll
  },
  {
    path: '/parthome',
    name: 'PartHome',
    component: PartHome
  },
  {
    path: '/partone',
    name: 'PartOne',
    component: PartOne
  },
  {
    path: '/parttwo',
    name: 'PartTwo',
    component: PartTwo
  },
  {
    path: '/partthree',
    name: 'PartThree',
    component: PartThree
  },
  {
    path: '/partfour',
    name: 'PartFour',
    component: PartFour
  }
]
//國際生留台追蹤平台
const workRoutes = [
  {
    path: '/workone',
    name: 'WorkOne',
    component: WorkOne
  },
  {
    path: '/worktwo',
    name: 'WorkTwo',
    component: WorkTwo
  }
]

//薪資平台
const salaryRoutes = [
  {
    path: '/sep/home',
    name: 'SepHome',
    component: SepHome,
    meta: { layout: 'sep' } 
  },
  {
    path: '/sep/hcm',
    name: 'SepHcm',
    component: SepHcm,
    meta: { layout: 'sep' }
  },
  {
    path: '/sep/cost',
    name: 'SepCost',
    component: SepCost,
    meta: { layout: 'sep' }
  },
  {
    path: '/sep/analysis',
    name: 'SepAnalysis',
    component: SepAnalysis,
    meta: { layout: 'sep' }
  },
  {
    path: '/sep/tax',
    name: 'SepTax',
    component: SepTax,
    meta: { layout: 'sep' }
  }

]
//店家
const storeRoutes = [
  {
    path: '/store/home',
    name: 'StoreHome',
    component: StoreHome,
    meta: { layout: 'store' }
  },
  {
    path: '/store/analysis',
    name: 'StoreAnalysis',
    component: StoreAnalysis,
    meta: { layout: 'store' }
  },
  {
    path: '/store/cost',
    name: 'StoreCost',
    component: StoreCost,
    meta: { layout: 'store' }
  },
  {
    path: '/store/hcm',
    name: 'StoreHcm',
    component: StoreHcm,
    meta: { layout: 'store' }
  },
  {
    path: '/store/tax',
    name: 'StoreTax',
    component: StoreTax,
    meta: { layout: 'store' }
  }
]

//好思通國際股份有限公司
const synet = [
  {
    path: '/synet/home',
    name: 'SynetHome',
    component: SynetHome,
    meta: { layout: 'synet' }
  },
  {
    path: '/synet/analysis',
    name: 'SynetAnalysis',
    component: SynetAnalysis,
    meta: { layout: 'synet' }
  },
  {
    path: '/synet/cost',
    name: 'SynetCost',
    component: SynetCost,
    meta: { layout: 'synet' }
  },
  {
    path: '/synet/hcm',
    name: 'SynetHcm',
    component: SynetHcm,
    meta: { layout: 'synet' }
  },
  {
    path: '/synet/tax',
    name: 'SynetTax',
    component: SynetTax,
    meta: { layout: 'synet' }
  }
]

//業務部門
const sales = [
  {
    path: '/sales/home',
    name: 'SalesHome',
    component:SalesHome,
    meta: { layout: 'sales' }
  },
  {
    path: '/sales/analysis',
    name: 'SalesAnalysis',
    component:SalesAnalysis,
    meta: { layout: 'sales' }
  },
  {
    path: '/sales/cost',
    name: 'SalesCost',
    component: SalesCost,
    meta: { layout: 'sales' }
  },
  {
    path: '/sales/hcm',
    name: 'SalesHcm',
    component: SalesHcm,
    meta: { layout: 'sales' }
  },
  {
    path: '/sales/tax',
    name: 'SalesTax',
    component: SalesTax,
    meta: { layout: 'sales' }
  }
]

//R&D部門
const rd = [
  {
    path: '/rd/home',
    name: 'RdHome',
    component: RdHome,
    meta: { layout: 'rd' }
  },
  {
    path: '/rd/analysis',
    name: 'RdAnalysis',
    component: RdAnalysis,
    meta: { layout: 'rd' }
  },
  {
    path: '/rd/cost',
    name: 'RdCost',
    component: RdCost,
    meta: { layout: 'rd' }
  },
  {
    path: '/rd/hcm',
    name: 'RdHcm',
    component: RdHcm,
    meta: { layout: 'rd' }
  },
  {
    path: '/rd/tax',
    name: 'RdTax',
    component: RdTax,
    meta: { layout: 'rd' }
  }
]



// 合併所有路由
const routes = [
  ...controlRoutes,
  ...partRoutes,
  ...workRoutes,
  ...salaryRoutes,
  ...storeRoutes,
  ...synet,
  ...sales,
  ...rd
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
