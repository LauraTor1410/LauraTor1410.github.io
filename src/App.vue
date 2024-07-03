 
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import {ref} from 'vue'
  
  const isNavOpen = ref (false)
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
  }
</script>

<template>
  <header>
    <button class="nav-toggle" @click="toggleNav">
      <v-icon name="hi-solid-menu" class="iconoMenu"/>
    </button>
      <nav :class="{ 'nav-open' : isNavOpen }">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Sobre mí</RouterLink>
        <RouterLink to="/proyectos">Proyectos</RouterLink>
        <RouterLink to="/tecnologias">Tecnologías</RouterLink>
      </nav>
  </header>
  <div class="content">
    <RouterView />
  </div>
  <footer>
    <a href="https://github.com/LauraTor1410" target="_blank" class="icon-wrapper" data-tooltip="GitHub">
      <v-icon name="bi-git" class="iconos"/>
    </a>
    <a href="mailto:lauratortosa1410@gmail.com" class="icon-wrapper" data-tooltip="lauratortosa1410@gmail.com">
      <v-icon name="md-email-outlined" class="iconos"/>
    </a>
    <a href="tel:+34699706907" class="icon-wrapper" data-tooltip="+34699706907">
      <v-icon name="fa-phone-alt" class="iconos"/>
    </a>
    <a href="https://www.linkedin.com/in/laura-tortosa-229a08287/" target="_blank" class="icon-wrapper" data-tooltip="LinkedIn">
      <v-icon name="co-linkedin" class="iconos"/>
    </a>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem;
  width: 100%;
  top:0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
}
content {
  margin-top: 5rem; 
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center; 
  min-height: 100vh; 
  box-sizing: border-box;
}
footer {
  line-height: 1.5;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.icon-wrapper {
  position: relative;
  display: inline-block;
  margin: 0 1rem;
  cursor: pointer;
}

.icon-wrapper::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.icon-wrapper:hover::after {
  opacity: 1;
}

.iconos {
  width: 40px; 
  height: 40px;
}
.nav-toggle {
  background: none;
  border:none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  font-family:'Holtwood One SC';
  text-align: center;
  display:none;
  flex-direction: column;
}

.iconoMenu{
  color: white;
  width: 35px;
  height: 35px;
}
nav.nav-open {
  display:flex;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 600px){
  nav {
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }

  nav a {
    padding: 0.75rem 1.5rem;
  }
}
@media (min-width: 1024px) {
  .nav-toggle{
    display: none;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center; 
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  nav a {
    padding: 1rem 2rem;
  }
}
</style>
