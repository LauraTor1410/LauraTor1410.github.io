<script setup>

</script>
<template>
    <div class="contenidoP">
        <div class="app">
            <v-icon name="md-pets" class="iconos"/>
            <a href="https://github.com/eskalona17/TFG-DAW">Aplicación web social InstaPet</a>
            <img alt="instapet" class="appPreview" src="/instapet.gif"  />
        </div>
        <div class="app">
            <v-icon name="pi-eevee" class="iconos"/>
            <a href="https://github.com/LauraTor1410/ColeccionablesPokemon">Coleccionables Pokemon</a>
            <img alt="coleccionPokemon" class="appPreview" src="/pokemon.gif"  />
        </div>
        <div class="app">
            <v-icon name="fa-tasks" class="iconos"/>
            <a href="https://github.com/LauraTor1410/AgendaTareasPHP">Agenda Tareas</a>
        </div>      
    </div>
</template>
<script>


export default {
   
}
</script>
<style>
.contenidoP {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
}
.app {
      padding: 10px;
     
      border: 1px solid #ccc;
    }
.appPreview{
    width: 100%;
    
}
</style>