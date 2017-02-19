<template>
  <div class="row_area" v-bind:class="{'other_row':talkObj.from_other}">
    <div class="talk_item" v-bind:class="{'other':talkObj.from_other}">
      <div class="head_icon">
        <div>
          {{talkObj.userName}}
        </div>
        <div class="time">
          {{talkObj.time}}
        </div>
      </div>
      <div class="content" v-bind:class="{'other_content':talkObj.from_other}">
        <div class="text">
          {{talkObj.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .row_area {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .other_row {
    justify-content: flex-start;
  }

  .talk_item {
    display: flex;
    flex-direction: row-reverse;
    margin: 8pt 10pt 0 10pt;
  }

  .other {
    flex-direction: row;

  }

  .head_icon {
    margin: 5pt;
    /*width: 35pt;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .head_icon img {
    width: 30pt;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2pt 8pt 2pt 8pt;
    background-color: #A0E75A;
    border: solid 1px #E2E2E2;
    border-radius: 5pt;
  }

  .other_content {
    background-color: white;
  }

  .text {
    font-size: 12pt;
    word-break: break-all;
    line-height: 1.6;
  }

  .time {
    font-size: 8pt;
    color: gray;
  }
</style>
<script>
  export default{
    props: ['talkObj']
  }
</script>
