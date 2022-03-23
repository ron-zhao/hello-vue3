<template>
    <div class="index-content">
        <div class="title-group">
            <div v-for="(item, index) in smartTitle" :key="index" 
            :class="['title-group-item', {'slelect-item': selectTab === index}, {'active-item': activeTab === index}]" 
            @mouseenter="handEnterTitle(index)" @mouseleave="handLeaveTitle">
                {{item}}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,reactive, ref   } from 'vue'

export default defineComponent({
    setup() {
        const smartTitle = reactive([
            '5GToB',
            '专线',
            '企宽'
        ]);
        let activeTab = ref(-1);
        let selectTab = ref(0);
        let handEnterTitle = (index:number)=> {
            activeTab.value = index;
        }
        let handLeaveTitle = ()=> {
            activeTab.value = -1;
        }

        return {
            smartTitle,
            activeTab,
            selectTab,
            handLeaveTitle,
            handEnterTitle
        }
    },
})
</script>
<style lang="less" scoped>
.index-content {

    .title-group {
        width: 270px;
        margin: 20px auto 0;
        display: flex;
        align-items: center;
        .title-group-item {
            padding: 10px 20px;
            display: inline-block;
            cursor: pointer;
        }
        .active-item {
            border-bottom: 1px solid #000;
        }
        .slelect-item {
           border-bottom: 1px solid #000; 
        }
    }
}
</style>

