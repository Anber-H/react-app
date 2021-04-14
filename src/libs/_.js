export default {
  pathname (_default) {
    console.log(location.pathname, 321)
    return location.pathname.replace(/(^\/)/, '') || _default;
  }
}
