<template>
  <div class='main'>
    <div class='top'></div>
    <div class='content'></div>
    <div class='footer'></div>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.content {
  flex-grow: 1;
}
.top,.footer {
 width: 100%;
 height: 100px;
 background: blanchedalmond;
}
</style>