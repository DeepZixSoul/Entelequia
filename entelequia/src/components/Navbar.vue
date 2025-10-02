<script setup>
// Definir nombre de componente multi-palabra para cumplir con las buenas prácticas
defineOptions({
  name: 'MainNavbar'
})

// Navbar profesional para navegación por pestañas
import { ref, computed } from 'vue'
import NavbarMobile from './NavbarMobile.vue'
import { socialLinks } from '../socialLinks.js'
defineProps({
  sections: Array,
  activeTab: String
})
const emit = defineEmits(['tab-change'])
function handleTab(tabId) {
  emit('tab-change', tabId)
}
// Estado menú móvil
const menuOpen = ref(false)
function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }
import logo from '../assets/img/bala.png'
// Mostrar menú móvil solo en móvil
const isMobile = computed(() => window.matchMedia('(max-width: 600px)').matches)
</script>

<template>
  <nav class="main-navbar">
    <!-- Desktop: logo integrado en la barra de tabs -->
    <ul class="navbar-tabs">
      <li class="navbar-logo-desktop">
        <img :src="logo" alt="Logo Entelequia" />
      </li>
      <li v-for="s in sections" :key="s.id">
        <button
          class="tab-btn"
          :class="{ active: activeTab === s.id }"
          @click="handleTab(s.id)"
        >
          {{ s.label }}
        </button>
      </li>
    </ul>
    <!-- Móvil: barra superior y menú lateral -->
    <div class="navbar-row" v-if="isMobile">
      <div class="navbar-logo">
        <img :src="logo" alt="Logo Entelequia" />
      </div>
      <button class="burger-btn" @click="toggleMenu" aria-label="Abrir menú" aria-controls="mobile-menu" :aria-expanded="menuOpen">
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
      </button>
    </div>
    <NavbarMobile
      :sections="sections"
      :activeTab="activeTab"
      :socialLinks="socialLinks"
      :logo="logo"
      :open="menuOpen && isMobile"
      @tab-change="handleTab"
      @close="closeMenu"
    />
  </nav>
</template>

<style scoped>
/* --- Navbar base --- */
.main-navbar {
  width: 100%;
  background: #4B2E19;
  box-shadow: 0 2px 8px #0003;
  position: sticky;
  top: 0;
  z-index: 200;
  border-bottom: 2px solid #e0b973;
}
.navbar-logo-desktop {
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
}
.navbar-logo-desktop img {
  height: 38px;
  width: auto;
  display: block;
}
.navbar-row {
  display: none;
}
@media (max-width: 600px) {
  .navbar-tabs {
    display: none;
  }
  .navbar-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.5rem;
  }
  .navbar-logo-desktop {
    display: none;
  }
}
.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 210;
}
.burger-bar {
  width: 28px;
  height: 4px;
  background: var(--color-navbar-text);
  margin: 3px 0;
  border-radius: 2px;
  transition: all 0.3s;
}
.navbar-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 0;
  padding: 1rem 0;
  list-style: none;
}
.main-navbar li {
  background: rgba(250, 243, 224, 0.10);
  border-radius: 1.5rem;
  box-shadow: 0 1px 4px #0002;
  transition: background 0.2s, box-shadow 0.2s;
}
.main-navbar li:hover, .main-navbar li:focus-within {
  background: rgba(224, 185, 115, 0.18);
  box-shadow: 0 2px 8px #e0b97344;
}
.tab-btn {
  background: none;
  border: none;
  color: var(--color-navbar-text) !important;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  position: relative;
  cursor: pointer;
  transition: color 0.2s;
}
.tab-btn::after {
  content: '';
  display: block;
  position: absolute;
  left: 20%;
  right: 20%;
  bottom: 0.2em;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #e0b973 60%, #00bcd4 100%);
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 0.2s, transform 0.3s;
}
.tab-btn:hover, .tab-btn:focus, .tab-btn.active {
  color: #e0b973;
}
.tab-btn:hover::after, .tab-btn:focus::after, .tab-btn.active::after {
  opacity: 1;
  transform: scaleX(1);
}
/* --- Menú móvil --- */
@media (max-width: 600px) {
  .navbar-tabs {
    display: none;
  }
  .burger-btn {
    display: flex;
  }
  .main-navbar {
    padding: 0;
  }
  .navbar-row {
    padding: 0.3rem 0.5rem;
  }
  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 80vw;
    max-width: 340px;
    height: 100vh;
    background: #4B2E19;
    box-shadow: -2px 0 16px #0005;
    z-index: 300;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1.2rem 1.2rem 1.2rem;
    animation: slideIn 0.3s;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--color-navbar-text);
    font-size: 2rem;
    cursor: pointer;
    z-index: 310;
  }
  .mobile-menu-list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 2.5rem;
  }
  .mobile-social {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    margin-top: auto;
    padding-bottom: 0.5rem;
  }
  .mobile-social img {
    width: 32px;
    height: 32px;
    filter: brightness(1.1) drop-shadow(0 1px 2px #0005);
    border-radius: 50%;
    background: #fff1;
    transition: filter 0.2s;
  }
  .mobile-social img:hover {
    filter: brightness(1.3) drop-shadow(0 2px 6px #e0b973);
  }
  .mobile-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #0007;
    z-index: 250;
  }
  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
}
/* Transición menú */
.slide-menu-enter-active, .slide-menu-leave-active {
  transition: all 0.3s cubic-bezier(.4,1.3,.6,1);
}
.slide-menu-enter-from, .slide-menu-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
