<template>
  <div>
    <h2>Hello {{person.fname}}</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
  
// Define reactive state
const count = ref(0);

// Define methods
const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const person = ref({
  title:'Mr.',
  fname: 'Yogeshwar',
  lname: 'Trehan'
})

setTimeout(()=>{
  person.value.fname = 'Prakash'
}, 2000)

</script>

<style scoped>
button {
  margin: 5px;
}
</style>
