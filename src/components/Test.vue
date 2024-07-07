<template>
  <h1>{{ obj1.a }}</h1>
  <h1>{{ obj2.a }}</h1>
  <button @click="doSomething1">Click1</button>
  <button @click="doSomething2">Click2</button>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue';

const obj1 = ref({ a: 1 });
const obj2 = reactive({ a: 1 });

watchEffect(() => {
  console.log('== obj1 ==', obj1.value.a);
});
watchEffect(() => {
  console.log('== obj2 ==', obj2.a);
});

function doSomething1() {
  obj1.value.a += 1;
}
function doSomething2() {
  obj2.a += 1;
}
</script>

<style scoped></style>
