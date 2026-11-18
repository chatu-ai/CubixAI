import { addCollection, type IconifyJSON } from '@iconify/vue'
import collections from './iconify-subset.json'

// 网站用到的图标随网站一起打包（由 npm run icons:generate 生成），
// 注册后 <Icon> 直接从本地渲染，不会再去 api.iconify.design 下载（访客 IP 不会发给第三方）
for (const collection of collections as unknown as IconifyJSON[]) {
  addCollection(collection)
}
