<script setup>
import SocialLinks from './SocialLinks.vue'
import { socialLinks } from '../socialLinks.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="main-footer" aria-label="Pie de página">
    <div class="footer-content">
      <div class="footer-brand">
        <span>© {{ year }} Entelequia</span>
      </div>
      <SocialLinks :links="socialLinks" size="28" align="center" />
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  width: 100%;
  background: var(--color-bg-dark, #2a1a0a);
  color: var(--color-navbar-text);
  padding: 2.2rem 0 1.2rem 0;
  margin-top: 3rem;
  border-top: 3px solid var(--color-warning, #e0b973);
  box-shadow: 0 -4px 24px 0 var(--color-shadow, #0003);
  position: relative;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 0 1rem;
}
.footer-brand {
  font-size: 1.13rem;
  letter-spacing: 0.03em;
  font-family: var(--font-family-title, 'Lora', serif);
  color: var(--color-warning, #e0b973);
  text-shadow: 0 1px 4px #0008;
  margin-bottom: 0.2rem;
}
@media (max-width: 600px) {
  .main-footer {
    padding: 1.2rem 0 0.7rem 0;
    font-size: 0.98rem;
  }
  .footer-content {
    gap: 1rem;
  }
}
</style>
