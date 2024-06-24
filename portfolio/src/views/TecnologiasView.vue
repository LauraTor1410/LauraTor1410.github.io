<script setup>


  //Array con info iconos

  const icons = [
    { src:'/html.png', name: 'HTML'},
    { src:'/css.png', name: 'CSS'},
    { src:'/git.png', name: 'Git'},
    { src:'/java.png', name: 'Java'},
    { src:'/js.png', name: 'JavaScript'},
    { src:'/php.png', name: 'PHP'},
    { src:'/sql.png', name: 'SQL'},
    { src:'/mongo.png', name: 'MongoDB'},
    { src:'/Node.png', name: 'Node.js'},
    { src:'/Vue.png', name: 'Vue.js'},
    { src:'/react.png', name: 'React.js'},
    { src:'/python.png', name: 'Python'},
    { src:'/c.png', name: 'C'},
  ];


  //metodos para manejar eventos
  function handleMouseOver (event){
    event.target.style.transform = 'scale(1.1)';
    const tooltip = event.target.nextElementSibling;
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity ='1';
  }

  function handleMouseOut(event){
    event.target.style.transform = 'scale(1)';
    const tooltip = event.target.nextElementSibling;
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity ='0';
  }
</script>
<template>
    <div class="contenidoTec">
      <div class="iconoWrapper">
        <div v-for="icon in icons" :key="icon.name" class="iconoContainer">
          <img
            :src="icon.src"
            :alt="icon.name + ' icon'"
            class="iconoT"
            :data-tecnologia = "icon.name"
            @mouseover="handleMouseOver($event, icon.name)"
            @mouseout="handleMouseOut($event)"
          />
          <div class="tooltip">{{ icon.name }}</div>
        </div>
      </div>
    </div>
</template>
<script>


export default {
   
}
</script>
<style>
.contenidoTec {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.techName {
  font-size: 20px;
  margin-bottom: 10px;
}

.iconoWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.iconoContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.iconoT {
  width: 100px;
  height: 100px;
  object-fit: scale-down;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  top: -30px; /* Ajusta esta posición según necesites */
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}
</style>