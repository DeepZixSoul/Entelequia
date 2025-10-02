

<script setup>
// App principal: layout base para secciones
import { ref } from 'vue'
import HomeSection from './components/home/HomeSection.vue'
import AboutSection from './components/about/AboutSection.vue'
import CharactersSection from './components/characters/CharactersSection.vue'
import EpisodesSection from './components/episodes/EpisodesSection.vue'
import MapSection from './components/map/MapSection.vue'
import BlogSection from './components/blog/BlogSection.vue'
import ResourcesSection from './components/resources/ResourcesSection.vue'
import GallerySection from './components/gallery/GallerySection.vue'
import ContactSection from './components/contact/ContactSection.vue'
import ExtrasSection from './components/extras/ExtrasSection.vue'

import Navbar from './components/Navbar.vue'
import Footer from './components/AppFooter.vue'

import './styles/navbar-responsive.css'

const sections = [
  { id: 'home', label: 'Inicio', component: HomeSection },
  { id: 'about', label: 'Sobre el juego', component: AboutSection },
  { id: 'characters', label: 'Personajes', component: CharactersSection },
  { id: 'episodes', label: 'Episodios', component: EpisodesSection },
  { id: 'map', label: 'Mapa', component: MapSection },
  { id: 'blog', label: 'Diario', component: BlogSection },
  { id: 'resources', label: 'Recursos', component: ResourcesSection },
  { id: 'gallery', label: 'Galería', component: GallerySection },
  { id: 'contact', label: 'Contacto', component: ContactSection },
  { id: 'extras', label: 'Extras', component: ExtrasSection },
]
const activeTab = ref('home')
function setTab(tab) {
  activeTab.value = tab
}

// Maneja el evento personalizado para ir a personajes
function handleGoToCharacters() {
  setTab('characters')
  // Espera a que la sección de personajes esté montada y luego hace scroll
  setTimeout(() => {
    const el = document.getElementById('characters')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.focus && el.focus()
    }
  }, 300)
}
</script>


<template>
  <Navbar :sections="sections" :activeTab="activeTab" @tab-change="setTab" />
  <main class="main-layout">
    <component
      :is="sections.find(s => s.id === activeTab).component"
      v-bind="activeTab === 'home' ? { onGoToCharacters: handleGoToCharacters } : {}"
    />
  </main>
  <Footer />
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}

.section-anchor {
  scroll-margin-top: 80px;
}
</style>
