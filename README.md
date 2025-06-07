# ReactProjects

npm create vite@latest app
npm install tailwindcss @tailwindcss/vite
npm i -D daisyui@latest
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
npm init -y
npm i axios cors express mongoose nodemon redux router react-icons




fetch api
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />


## vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

@import "tailwindcss";
@plugin "daisyui";
