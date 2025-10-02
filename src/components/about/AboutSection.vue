<script setup>
// Sección sobre el juego: descripción, reglas y lore
import Section from '../Section.vue'
</script>

<template>
  <Section title="Sobre la campaña" description="Descubre el mundo, reglas y estilo de juego.">
    <div class="about-content">
      <p>
        Entelequia es una campaña de rol ambientada en un mundo de fantasía épica, donde la narrativa y la toma de decisiones de los jugadores son el motor principal de la historia.
      </p>
      <ul>
        <li><strong>Estilo:</strong> Fantasía narrativa, con toques de misterio y aventura.</li>
        <li><strong>Reglas:</strong> Adaptación propia basada en sistemas clásicos, fácil de aprender para nuevos jugadores.</li>
        <li><strong>Lore:</strong> Un universo en constante evolución, con historia y personajes profundos.</li>
      </ul>
    </div>
  </Section>
</template>

<style scoped>
.about-content {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
}
.about-content ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}
.about-content li {
  margin-bottom: 0.5rem;
}
</style>
