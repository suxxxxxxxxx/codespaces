<template>
    <div>
        <div class="flex item-center justify-between drag h-14">
            <div class="flex items-center p1-5">
                <IconPark icon="Left" sizi="iconSize" 
                stroke-width="2" class="icon-button"/>
                <IconPark icon="Right" sizi="iconSize"
                stroke-width="2" class="icon-button"/>
                <div class="search no-drag ml-2">
                    <SearchPop/>
                </div>
            </div>
            <div class="flex items-center mr-5">
                <IconPark icon="Mail" sizi="iconSize"
                stroke-width="2" class="icon-button"/>
                <IconPark icon="Platte" sizi="iconSize"
                stroke-width="2" class="icon-button"/>
                <IconPark icon="HamburgerButton" sizi="iconSize"
                stroke-width="2" class="icon-button"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import SearchPop from '@/components/layout/header/SearchPop.vue'
import IconPark from '@/components/common/iconPark.vue'
import {Left ,Right,Mail,Platte,HamburgerButton} from '@icon-park/vue-next'
const iconSize = 22
</script>

<style scoped>

</style>