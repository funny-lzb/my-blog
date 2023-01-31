import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import processs from 'process'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(processs.cwd(),'public'),
  // base: "../",
  plugins: [react()]
})
