<template>
    <a-table :columns="columns" :data="data">
      <template #salary="{ rowIndex }">
        <!-- <a-input v-model="data[rowIndex].salary" /> -->
         <img :src="data[rowIndex].salary" class="slt" alt="" srcset="">
         <div slot="salary" slot-scope="text"><img :src="cdn + text" alt=""></div>
      </template>
    </a-table>
  </template>
  
  <script setup>
  
  import { reactive } from 'vue';
  import appleUrl from '@/assets/logo.png';
  
  const options = {
        Beijing: ['Haidian', 'Chaoyang', 'Changping'],
        Sichuan: ['Chengdu', 'Mianyang', 'Aba'],
        Guangdong: ['Guangzhou', 'Shenzhen', 'Shantou']
      }
      const columns = [{
        title: '名称',
        dataIndex: 'name',
      }, {
        title: '缩略图',
        dataIndex: 'salary',
        slotName: 'salary',
        scopedSlots:{customRender:'salary'}
      }, {
        title: '作者',
        dataIndex: 'zz',
      }, {
        title: '下载时间',
        dataIndex: 'time',
      }];
  
      const data = reactive([{
        key: '1',
        name: 'Jane Doe',
        salary:appleUrl,
        zz: '32 Park Road, London',
        time: '2024-05-06',
      }, {
        key: '2',
        name: 'Alisa Ross',
        salary: '@/../public/logo.svg',
        zz: '32 Park Road, London',
        time: '2024-05-06',
      }, {
        key: '3',
        name: 'Kevin Sandra',
        salary:"@/assets/logo.png",
        zz: '32 Park Road, London',
        time: '2024-05-06',
      }, {
        key: '4',
        name: 'Ed Hellen',
        salary: '../../assets/logo.png',
        zz: '32 Park Road, London',
        time: '2024-05-06',
      }, {
        key: '5',
        name: 'William Smith',
        salary: '../../assets/logo.png',
        zz: '32 Park Road, London',
        time: '2024-05-06',
      }]
    )
  
  </script>

  <style>
  .slt{
    width:10rem;
  }
</style>