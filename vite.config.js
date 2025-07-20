import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Quali/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        // Home
        main: resolve(__dirname, 'src/index.html'),
        
        // Cursos - Listado y detalles
        cursos: resolve(__dirname, 'src/pages/cursos/index.html'),
        cursoManipulacion: resolve(__dirname, 'src/pages/cursos/curso-manipulacion.html'),
        cursoEpp: resolve(__dirname, 'src/pages/cursos/curso-epp.html'),
        cursoBioseguridad: resolve(__dirname, 'src/pages/cursos/curso-bioseguridad.html'),
        cursoProtocolos: resolve(__dirname, 'src/pages/cursos/curso-protocolos.html'),
        
        // Cursos - Módulos de aprendizaje
        moduloManipulacion: resolve(__dirname, 'src/pages/cursos/modulo-manipulacion.html'),
        moduloEpp: resolve(__dirname, 'src/pages/cursos/modulo-epp.html'),
        moduloBioseguridad: resolve(__dirname, 'src/pages/cursos/modulo-bioseguridad.html'),
        moduloProtocolos: resolve(__dirname, 'src/pages/cursos/modulo-protocolos.html'),
        
        // Auth
        login: resolve(__dirname, 'src/pages/auth/login.html'),
        register: resolve(__dirname, 'src/pages/auth/register.html'),
        
        // Usuario
        panel: resolve(__dirname, 'src/pages/usuario/panel.html'),
        
        // Otras páginas
        quali: resolve(__dirname, 'src/pages/quali.html'),
        contacto: resolve(__dirname, 'src/pages/contacto.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
