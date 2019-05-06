<template>
  <div id="content-block">
    <p class="content-paragraph pt-4">
      <strong class="content-title">{{contentTitle}}</strong>
      <br />
      <span class="content-text">{{contentText}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    contentTitle: { type: String },
    contentText: { type: String }
  }
}
</script>

<style scoped>
.content-paragraph {
  margin: 0;
  padding: 0;
}
</style>
