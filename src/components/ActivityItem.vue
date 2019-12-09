<template>
  <div>
    <ActivityItemUpdate v-if="isUpdateActive"
                        :activity="activity"
                        :categories="categories"
                        @toggleUpdate="changeUpdateState" />
    <ActivityItemDetail v-else
                        :activity="activity"
                        :categories="categories"
                        @toggleUpdate="changeUpdateState" />
  </div>
</template>


<script>
  import textUtility from '@/mixins/textUtility';
  import ActivityItemDetail from './ActivityItemDetail'
  import ActivityItemUpdate from './ActivityItemUpdate'
  export default {

    data(){
      return {
        isUpdateActive: false
      }
    },
    components: {
      ActivityItemDetail,
      ActivityItemUpdate
    },
    props:{
      activity:{
        type:Object,
        required:true
      },
      categories:{
        type: Object,
        required:true
      }
    },
    methods:{
      changeUpdateState (isUpdate) {
        this.isUpdateActive = isUpdate
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>