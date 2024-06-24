<script setup>
  import PrensentacionHome from '../components/PrensentacionHome.vue'

</script>

<template>
  <div class="contenido">
    <img alt="myphoto" class="foto" src="/Foto.png"  />
    <prensentacionHome/>
  </div>
</template>
<style scoped>
  .contenido {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}

.foto {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}
</style>