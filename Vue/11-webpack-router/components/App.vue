<template>
  <div>
    {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style scoped>
div {
  font-size: 30px;
  color: #39f;
}
</style>


