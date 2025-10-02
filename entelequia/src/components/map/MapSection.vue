<script setup>
// Sección de mapa interactivo del mundo
import Section from '../Section.vue'
const mapImg = '@/assets/img/map/world-map.png' // Reemplaza por tu imagen
const markers = [
  { name: 'Ciudadela', x: 30, y: 40, info: 'Capital del reino.' },
  { name: 'Bosque Oscuro', x: 60, y: 70, info: 'Zona de misterios y peligros.' },
  // Agrega más marcadores
]
</script>

<template>
  <Section title="Mapa del mundo" description="Explora el mundo de la campaña.">
    <div class="map-container">
      <img :src="mapImg" alt="Mapa del mundo" class="map-img" />
      <div
        v-for="m in markers"
        :key="m.name"
        class="map-marker"
        :style="{ left: m.x + '%', top: m.y + '%' }"
      >
        <span class="marker-dot" tabindex="0">
          <span class="marker-tooltip">{{ m.name }}<br />{{ m.info }}</span>
        </span>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
.map-img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 2px 8px #0002;
}
.map-marker {
  position: absolute;
  transform: translate(-50%, -100%);
}
.marker-dot {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: #42b883;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  position: relative;
}
.marker-dot:focus .marker-tooltip,
.marker-dot:hover .marker-tooltip {
  display: block;
}
.marker-tooltip {
  display: none;
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  white-space: pre-line;
  z-index: 10;
}
</style>
