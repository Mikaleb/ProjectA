<template>

<template v-if="appStore.portfolios.length > 0">
  <v-select
  v-model="appStore.selectedPortfolio"
  item-title="name"
  item-value="id"
  :items="appStore.portfolios"
  label="Select"
  @update:model-value="appStore.getPortfolioFromApi"
></v-select>

<h1 v-if="appStore.portfolio.name">{{ appStore.portfolio.name }}</h1>

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>ISIN</th>
      <th>Parts</th>
      <th>Valeurs marché</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category in appStore.portfolio.categories" :key="category.name" @click="">
      <td>{{ category.name }}</td>
      <td>{{ category.displayOrder }}</td>
      <td>{{ category.marketValue }}</td>

      <template v-if="category.subcategories">
        <tr v-for="subcategory in category.subcategories" :key="subcategory.name">
          <td>{{ subcategory.name }}</td>
          <td>{{ subcategory.displayOrder }}</td>
          <td>{{ subcategory.marketValue }}</td>
        </tr>
      </template>

      <template v-if="category.products">
        <tr v-for="product in category.products" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.ISIN }}</td>
          <td>{{ product.marketValue }}</td>
        </tr>
      </template>

      </tr>
  </tbody>
</table>

</template>

</template>

<script lang="ts" setup>
  // import { ref } from 'vue'
  import { useAppStore } from '@/stores/app'

  // import { storeToRefs } from 'pinia'

  const appStore = useAppStore()
  appStore.getPortfoliosFromApi()

  // const { getPortfoliosFromApi } = storeToRefs(appStore)

</script>
