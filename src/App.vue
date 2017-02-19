<template>
  <div class="talk_win" id="talk_win">
    <talk-item v-for="item in talk_arr" :talk-obj="item"></talk-item>
  </div>
  <div class="input_win">
    <div class="weui_cells weui_cells_form">
      <div class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="text" v-model="user_input" v-on:keyup.enter="send">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .weui_cells_form {
    margin-top: 5pt;
  }
</style>

<script>
  import CookieTools from './lib/CookieTools'
  import talkItem from './components/TalkItem'
  import Talk from './lib/Talk'
  export default {
    data(){
      return {
        user_input: '',
        talk_arr: []
      }
    },
    components: {talkItem},
    ready(){
      this.init()
    },
    methods: {
      init(){
        let key = 'group_talk_uid'
        let user_info = CookieTools.getCookie(key)
        if (user_info != '') {
          this.talker = new Talk()
          this.talker.setValueChange(this.valueChange)
          this.talker.init(user_info)
          this.talker.setEventChange((value) => {
            if (value && value['cookie']) {
              CookieTools.delCookie(key)
            }
          })
          this.talker.getUserName(user_info, (userObj) => {
            this.talker.setUserObj(userObj['name'])
          })
        } else {
          this.$dispatch('changeView', 'user-info')
        }
      },
      send(){
        let content = this.user_input.trim()
        if (content != '') {
          this.talker.sendContent(this.user_input)
          this.user_input = ''
        }
      },
      valueChange(obj){
        let nowObj = obj
        let item = {
          icon: '',
          time: nowObj['time'],
          content: nowObj['content'],
          from_other: this.talker.isOther(nowObj['user_id']),
          userName: nowObj['user_name']
        }
        this.talk_arr.push(item)
        this.$nextTick(() => {
          document.getElementById('talk_win').scrollTop = document.getElementById('talk_win').scrollHeight
        })
      }
    }
  }
</script>
