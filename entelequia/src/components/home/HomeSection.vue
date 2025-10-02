<script setup>
// Sección de inicio: presentación del juego y grupo

import { ref } from 'vue'

// Función para scroll automático a la sección de personajes
function goToCharacters() {
  // Busca el anchor o sección con id 'characters'
  const el = document.getElementById('characters')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    el.focus && el.focus()
  }
}

// Imágenes de la galería
const galleryImages = [
  { src: '../../assets/img/art1.jpg', alt: 'Arte conceptual 1' },
  { src: '../../assets/img/art2.jpg', alt: 'Arte conceptual 2' },
  { src: '../../assets/img/art3.jpg', alt: 'Arte conceptual 3' },
]

// Modal para imagen ampliada
const showModal = ref(false)
const modalImg = ref({ src: '', alt: '' })
function openModal(img) {
  modalImg.value = img
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
</script>

<template>
  <Section title="Bienvenido a Entelequia" description="Una aventura épica de rol y narrativa.">
    <!-- Banner/logo animado -->
    <div class="home-banner">
      <img src="../../assets/img/bala.png" alt="Banner del juego" class="banner-img animated-glow" />
    </div>

    <!-- Narrativa de introducción -->
    <div class="intro-text">
      <p>
        Entelequia es un mundo donde la magia y la voluntad forjan el destino. Únete a la travesía de héroes y villanos, explora reinos olvidados y escribe tu propia leyenda.
      </p>
    </div>

    <!-- Botón destacado -->
    <div class="cta-row">
      <button class="cta-btn" @click="goToCharacters" aria-label="Ir a la sección de personajes">Comenzar aventura</button>
    </div>

    <!-- Logros o reconocimientos -->
    <div class="awards-row" aria-label="Premios y reconocimientos">
      <span class="award-badge">🏆 Mejor narrativa 2025</span>
      <span class="award-badge">🌟 Comunidad destacada</span>
    </div>

    <!-- Mini-galería de arte conceptual -->
    <div class="mini-gallery" aria-label="Arte conceptual">
      <img
        v-for="img in galleryImages"
        :key="img.src"
        :src="img.src"
        :alt="img.alt"
        class="gallery-thumb"
        tabindex="0"
        role="button"
        @click="openModal(img)"
        @keyup.enter="openModal(img)"
        :aria-label="'Ampliar ' + img.alt"
      />
    </div>

    <!-- Modal de imagen ampliada -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal" tabindex="-1" aria-modal="true" role="dialog">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal" aria-label="Cerrar imagen">×</button>
        <img :src="modalImg.src" :alt="modalImg.alt" class="modal-img" />
        <div class="modal-caption">{{ modalImg.alt }}</div>
      </div>
    </div>

    <!-- Frase inspiradora -->
    <blockquote class="lore-quote">“Solo quienes se atreven a soñar pueden cambiar el destino de Entelequia.”</blockquote>

    <!-- SocialLinks a comunidad -->
    <div class="community-row">
      <span>Únete a la comunidad:</span>
      <SocialLinks :links="socialLinks" size="28" align="center" />
    </div>

    <!-- Podcast destacado -->
    <div class="podcast-feature">
      <h3>Último episodio del podcast</h3>
      <button class="play-btn">▶ Reproducir</button>
    </div>
  </Section>
</template>

<style scoped>
.home-banner {
  text-align: center;
  margin-bottom: 2rem;
}
.banner-img {
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 16px #0004;
  background: var(--color-bg-dark, #2a1a0a);
}
.animated-glow {
  animation: glow 2.5s ease-in-out infinite alternate;
}
@keyframes glow {
  0% { box-shadow: 0 2px 16px #e0b97355, 0 0 0 #0000; }
  100% { box-shadow: 0 4px 32px #e0b973cc, 0 0 16px #e0b97344; }
}
.intro-text {
  text-align: center;
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  color: var(--color-navbar-text);
}
.cta-row {
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
}
.cta-btn {
  background: var(--color-warning, #e0b973);
  color: #2a1a0a;
  font-weight: bold;
  border: none;
  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  font-size: 1.15rem;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
  transition: background 0.2s, color 0.2s;
}
.cta-btn:hover {
  background: #b88c3b;
  color: #fff;
}
.awards-row {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}
.award-badge {
  background: #fff2;
  color: var(--color-warning, #e0b973);
  border: 1px solid var(--color-warning, #e0b973);
  border-radius: 1.2rem;
  padding: 0.3rem 1.1rem;
  font-size: 0.98rem;
  font-family: var(--font-family-title, 'Lora', serif);
  box-shadow: 0 1px 4px #0002;
}
.mini-gallery {
  display: flex;
  justify-content: center;
  gap: 1.1rem;
  margin-bottom: 1.2rem;
}
.gallery-thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.7rem;
  box-shadow: 0 1px 6px #0003;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.gallery-thumb:hover {
  transform: scale(1.08) rotate(-2deg);
  box-shadow: 0 4px 16px #e0b97399;
}
.gallery-thumb:focus {
  outline: 2px solid var(--color-warning, #e0b973);
  box-shadow: 0 0 0 4px #e0b97344;
}

.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30, 20, 10, 0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
.modal-content {
  background: #222;
  border-radius: 1.2rem;
  padding: 1.2rem 1.2rem 0.7rem 1.2rem;
  box-shadow: 0 8px 32px #000a;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.modal-img {
  max-width: 60vw;
  max-height: 60vh;
  border-radius: 0.7rem;
  box-shadow: 0 2px 16px #e0b97399;
}
.modal-caption {
  color: var(--color-warning, #e0b973);
  font-size: 1.05rem;
  margin-top: 0.7rem;
  text-align: center;
  font-family: var(--font-family-title, 'Lora', serif);
}
.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 2;
}
.modal-close:hover {
  color: var(--color-warning, #e0b973);
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.lore-quote {
  text-align: center;
  font-style: italic;
  color: var(--color-warning, #e0b973);
  font-size: 1.08rem;
  margin: 1.2rem 0 1.5rem 0;
  font-family: var(--font-family-title, 'Lora', serif);
  text-shadow: 0 1px 4px #0008;
}
.community-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  font-size: 1.02rem;
}
.podcast-feature {
  text-align: center;
  margin-top: 2rem;
}
.play-btn {
  background: #42b883;
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.play-btn:hover {
  background: #2c8c6b;
}
@media (max-width: 700px) {
  .mini-gallery {
    gap: 0.5rem;
  }
  .gallery-thumb {
    width: 60px;
    height: 60px;
  }
}
</style>
