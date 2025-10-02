<script setup>
// NavbarMobile.vue: menú lateral móvil con logo, secciones y redes sociales
import SocialLinks from './SocialLinks.vue'
defineProps({
  sections: Array,
  activeTab: String,
  socialLinks: Array,
  logo: String,
  open: Boolean
})
const emit = defineEmits(['tab-change', 'close'])
function handleTab(tabId) {
  emit('tab-change', tabId)
  emit('close')
}
function closeMenu() {
  emit('close')
}
</script>

<template>
  <transition name="slide-menu">
    <aside v-if="open" class="mobile-menu" id="mobile-menu">
      <button class="close-btn" @click="closeMenu" aria-label="Cerrar menú">×</button>
      <div class="mobile-logo">
        <img :src="logo" alt="Logo Entelequia" />
      </div>
      <ul class="mobile-menu-list">
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
      <SocialLinks :links="socialLinks" size="32" align="end" class="mobile-social" />
    </aside>
  </transition>
  <div v-if="open" class="mobile-backdrop" @click="closeMenu" />
</template>

<style scoped>
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
.mobile-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
}
.mobile-logo img {
  height: 38px;
  width: auto;
  display: block;
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
.slide-menu-enter-active, .slide-menu-leave-active {
  transition: all 0.3s cubic-bezier(.4,1.3,.6,1);
}
.slide-menu-enter-from, .slide-menu-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
