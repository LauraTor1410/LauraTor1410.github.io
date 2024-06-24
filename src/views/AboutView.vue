<template>
  <div class="contenido">
    <img alt="myphoto" class="foto" src="/Foto.png"  />
    <h1>Sobre mí</h1>
    <p>¡Hola! Soy Laura, una apasionada del desarrollo web, y me encanta transformar
       ideas en realidades a través de soluciones creativas y eficientes.</p>
  </div>
</template>

<style>
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
p {
  max-width: 600px; 
  margin: 0 auto;
}
</style>
