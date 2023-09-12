import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  //mm
  // base: "https://priyanshu-s-5/priyanshu-s-5.github.io",
  plugins: [react()],
})
