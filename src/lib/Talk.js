export default class Talk {
  constructor() {
    this.user_name = ''
    this.valueChange = null
    //修改为您自己的wilddog_addr
    this.wilddog_addr = ""
  }

  init(uid) {
    this.ref = new Wilddog(this.wilddog_addr);
    this.user_id = uid
    this.ref.child('group').orderByChild("content_uid").limitToLast(20).on("child_added", (snapshot) => {
      if (this.valueChange) {
        this.valueChange(snapshot.val())
      }
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  setUserObj(name) {
    this.user_name = name
  }

  getUserName(userId, callback) {
    this.ref.child('users').child(userId).once("value", function (snapshot, error) {
      if (error == null) {
        callback(snapshot.val())
      }
    });
  }

  sendContent(content) {
    this.ref.child('group').push({
      content: content,
      time: this.getNowTime(),
      user_id: this.user_id,
      content_uid: new Date().getTime(),
      user_name: this.user_name
    });
  }

  setValueChange(callback) {
    this.valueChange = callback
  }

  setEventChange(callback) {
    this.ref.child('events').child('do').on('value', (snapshot, error)=> {
      if (error == null) {
        callback(snapshot.val())
      }
    })
  }

  isOther(userId) {
    return this.user_id != userId
  }

  getNowTime() {
    return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  }
}