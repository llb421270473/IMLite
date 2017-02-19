export default class CooieTools {
  static setCookie(key, value, exp_days = null) {
    var exp = new Date()
    exp.setDate(exp.getDate() + exp_days)
    document.cookie = `${key}=${value}${((exp_days == null) ? "" : ";expires=" + exp.toGMTString())}`
  }

  static getCookie(key) {
    let result = ''
    let reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`)
    let match_res = document.cookie.match(reg)
    if (match_res && match_res[2]) {
      result = match_res[2]
    }
    return result
  }

  static delCookie(key) {
    let value = this.getCookie(key)
    if (value != '') {
      let exp = new Date();
      exp.setTime(exp.getTime() - 1);
      document.cookie = `${key}=${value};expires=${exp.toGMTString()}`
    }
  }
}