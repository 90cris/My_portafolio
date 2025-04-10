// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // importante si el dominio es personalizado
  build: {
    outDir: 'dist',
  },
  server: {
    // no afecta en producción pero útil para dev local
    open: true,
  }
})