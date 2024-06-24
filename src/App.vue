 
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
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem;
  position: relative;
}

.nav-toggle {
  background: none;
  border:none;
  font-size: 1.5rem;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  font-family:'Holtwood One SC';
  text-align: center;
  margin-top: 2rem;
  display:none;
  flex-direction: column;
  align-items: center;
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
    text-align: left;
    font-size: 1.5rem;
    padding: 1rem 0;
    margin-top:  2rem;
    flex-direction: row;
  }

  nav a {
    display: inline-block;
    padding: 1rem 2rem;
  }
}
</style>
