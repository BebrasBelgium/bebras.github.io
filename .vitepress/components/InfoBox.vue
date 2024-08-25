<template>
  <div class="infobox">
    <slot name="default" />
  </div>
</template>

<style scoped>
div.infobox {
  background-color: #ffe3c2;
  border: 1px solid #ffe3c2;
  border-radius: 12px;
  padding: 18px 24px;
}

:slotted(h2) {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
:slotted(p) {
  font-size: 14px;
}
</style>
