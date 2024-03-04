<template>
  <div class="fixed h-full z-30 inset-0"  v-if="show">
    <div class="fixed inset-0 h-full bg-black bg-opacity-70 z-20" @click.stop="show=false" v-if="show"></div>
    <div class="bg-white w-[80%] max-w-[260px] absolute right-0 h-full p-4 z-30 slide-left">
      <div class="flex flex-col">
        <button class="h-12 flex items-center gap-2">
          <Icon name="material-symbols:home-outline-rounded"></Icon>
          <span>메인으로</span>
        </button>
        <button class="h-12 flex items-center gap-3">
          <Icon name="ep:house"></Icon>
          <span>키오스크</span>
        </button>
        <button class="h-12 flex items-center gap-3">
          <Icon name="ep:monitor"></Icon>
          <span>관리자웹</span>
        </button>
        <button class="h-12 flex items-center gap-3">
          <Icon name="ant-design:qrcode-outlined"></Icon>
          <span>스마트페이</span>
        </button>
        <button class="h-12 flex items-center gap-3">
          <Icon name="ant-design:customer-service-outlined"></Icon>
          <span>고객지원</span>
        </button>
      </div>
      <div class="h-px bg-neutral-300 my-5"></div>
      <div class="flex flex-col gap-3">
        <button class="flex items-center h-10 bg-[#fde047] px-4 rounded-full gap-2">
          <Icon name="ri:kakao-talk-fill"></Icon>
          <span class="text-sm">카카오톡 문의</span>
        </button>
        <button class="flex items-center h-10 bg-neutral-100 px-4 rounded-full gap-2"
          @click="move('maps')"
        >
          <Icon name="ic:outline-map"></Icon>
          <span class="text-sm">매장찾기</span>
        </button>
        <button class="flex items-center h-10 bg-neutral-100 px-4 rounded-full gap-2">
          <Icon name="ic:round-insert-chart-outlined"></Icon>
          <span class="text-sm">매장 관리시스템</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void,
  (e: 'selectorSeed', state: boolean):void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})

const move = (key:string)=>{
  show.value = false
  router.push(key)
}

</script>

<style lang="scss" scoped>
.slide-left{
  animation: slide-left 0.3s forwards;
}

@keyframes slide-left {
  0%{
    transform: translateX(100%);  }
  100%{
    transform: translateX(0px);
  }
}
</style>