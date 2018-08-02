<template>
  <div class="probe">
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="13" class="left-col">
        <el-card shadow="never" class="card-left">
          <el-row type="flex" :gutter="15">
            <el-col :span="10">
              <el-select v-model="methodvalue" size='medium'>
                <el-option
                  v-for="item in requesMethod"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="15"><el-input size="medium" v-model="url"></el-input></el-col>
            <el-col :span="20"><el-input size="medium" v-model="param"></el-input></el-col>
          </el-row>

          <el-row type="flex" :gutter="15">
            <el-col :span="13">
              <el-select v-model="csrfvalue" size='medium'>
                <el-option
                  v-for="item in CSRFlanguage"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6"><el-button class='action' type="warning" size="medium" v-on:click="createCSRF" plain>Create CSRF</el-button></el-col>
            <el-col :span="15">
              <el-select v-model="ajaxvalue" size='medium'>
                <el-option
                  v-for="item in AJAXlanguage"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6"><el-button class='action' type="warning" size="medium" v-on:click="createAJAX" plain>Create AJAX</el-button></el-col>
          </el-row>

          <el-row type="flex" :gutter="15">
            <el-col>
              <el-input
              type="textarea"
              :rows="25"
              placeholder="Write Your Probe Code Here"
              v-model="text.input"
              resize="none"
              class="inputtext"
              clearable>
              </el-input>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import codz from './payloadJS/csrf.js'

export default {
  name: 'Probe',
  data () {
    return {
      text: {
          input: ""
      },
      requesMethod: [
        {
          value: 'GET',
          label: 'GET'
        },
        {
          value: 'POST',
          label: 'POST'
        }
      ],
      methodvalue: 'GET',
      CSRFlanguage: [
        {
          value: 'html',
          label: 'HTML'
        },
        {
          value: 'js',
          label: 'JavaScript'
        },
        {
          value: 'php',
          label: 'PHP'
        }
      ],
      csrfvalue: 'CSRF Language',
      AJAXlanguage: [
        {
          value: '3',
          label: 'jQuery'
        },
        {
          value: '1',
          label: 'multipart/form-data'
        },
        {
          value: '2',
          label: 'application/x-www-form-urlencoded'
        }
      ],
      ajaxvalue: 'Content-Type',
      Templates: [],
      loading: true,
      thisDomain: '',
      templatevalue: 'Templates',
      url: 'http://example.com',
      param: 'key1=value1&key2=value2',
      cheatsheetData: [
      {
        cheaturl: '/static/cheatsheet/lnyas-cheatsheet.txt',
        cheatname: 'Lnyas\'s cheatsheet',
        cheatdesc: 'Personal note'
      },
      {
        cheaturl: 'https://html5sec.org/',
        cheatname: 'HTML5Sec',
        cheatdesc: 'HTML5 Security cheatsheet'
      },
      ]
    }
  },
  methods: {
    //把每一行的索引放进row，以便handleCurrentChange调用
    tableRowClassName (current, index) {
        current.row.index = current.rowIndex
    },
    // 获取选中行的row
    handleCurrentChange (val) {
        this.currentRow = val;
    },
    output (value) {
      this.text.input = this.magic(value)
    },

    // 根据url，param，method和[language,Content-Type]生成csrf和ajax代码，处理逻辑在前端
    createCSRF () {
      let result = codz().csrf(this.methodvalue, this.url, this.param, this.csrfvalue)
      this.output(result)
    },
    createAJAX () {
      let result = codz().ajax(this.methodvalue, this.url, this.param, this.ajaxvalue)
      this.output(result)
    },
  },
  mounted () {
    this.thisDomain = window.location.protocol + '//' + window.location.host + '/'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-select{
  width: 100%;
}

.delete {
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-left {
  min-width: 390px;
}
</style>
