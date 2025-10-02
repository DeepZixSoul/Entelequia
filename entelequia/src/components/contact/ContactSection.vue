<script setup>
// Sección de contacto y comunidad
import Section from '../Section.vue'
import { ref } from 'vue'
import SocialLinks from '../SocialLinks.vue'
import { socialLinks } from '../../socialLinks.js'
const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)
function submitForm() {
  submitted.value = true
}
</script>

<template>
  <Section title="Contacto y comunidad" description="Únete o envía tus comentarios.">
    <form class="contact-form" @submit.prevent="submitForm" v-if="!submitted">
      <input v-model="name" type="text" placeholder="Nombre" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <textarea v-model="message" placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
    <div v-else class="thanks-msg">¡Gracias por tu mensaje!</div>
    <div class="social-links">
      <h3>Redes y comunidad</h3>
      <SocialLinks :links="socialLinks" size="32" align="center" />
    </div>
  </Section>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto 2rem auto;
}
.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
}
.contact-form button {
  background: #42b883;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.contact-form button:hover {
  background: #2c8c6b;
}
.thanks-msg {
  text-align: center;
  color: #42b883;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.social-links ul {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 1rem 0 0 0;
  padding: 0;
  list-style: none;
}
</style>
