<template>
  <div class="view_container">
    <div class="content_container">
      <div class="bd">
        <div class="weui_cells_title">给自己起个昵称吧</div>
        <div class="weui_cells weui_cells_form">
          <div class="weui_cell" v-bind:class="{'weui_cell_warn':errorMsg}">
            <div class="weui_cell_hd"><label class="weui_label">昵称</label></div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" type="text" placeholder="请输入昵称" v-model="userName">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn_container">
      <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="setUserName">确定</a>
    </div>
  </div>
</template>
<style scoped>
  .view_container {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .content_container {
    flex: 1;
    overflow-y: scroll;
  }

  .btn_container {
  }

  .btn {

  }
</style>
<script>
  import CookieTools from '../lib/CookieTools'
  export default{
    data(){
      return {
        errorMsg: false,
        userName: ''
      }
    },
    methods: {
      setUserName(){
        let name = ''
        if (this.userName) {
          name = this.userName.trim()
        }
        console.log(name)
        if (name && name != '') {
          let key = 'group_talk_uid'
          let user_id = new Date().getTime()
          CookieTools.setCookie(key, user_id, 30)
          var ref = new Wilddog("https://devlee.wilddogio.com/users");
          ref.child(user_id).set({
            name: name
          }, (error)=> {
            if (error == null) {
              this.$dispatch('changeView', 'app')
            }
          })
        } else {
          this.errorPro()
        }
      },
      errorPro(){
        this.errorMsg = true
        setTimeout(()=> {
          this.errorMsg = false
        }, 1350)
      }
    }
  }
</script>