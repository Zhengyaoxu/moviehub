<template>
    <div>
        <el-form>
            <el-form-item>
                <SearchBar @inputValue="getInputValue" @item-click="itemClick" :itemlist="itemlist" :placeholder="placeholder" :nodatatext="nodatatext"></SearchBar>

            </el-form-item>
        </el-form>
    </div>
    
</template>



<script>
import SearchBar from "@/components/SearchBar.vue"
export default {
data() {
    return {
      itemlist: [],
      placeholder: "搜索",
      nodatatext: "暂无数据",
      selectValue: ""
    }
  },
  methods: {
    itemClick(data) {
      this.selectValue= data
    },
    getInputValue(searchvalue) {
      console.log(searchvalue)
      // 请求获取筛选列表
      
    }
  },
  components: {
    SearchBar
  }
}
</script>
