import {defineConfig} from 'vite'
import zipPack from "vite-plugin-zip-pack" // make dist.zip file


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
/*        zipPack({
            inDir: 'dist',
            outDir: 'archive',
            outFileName: `readme.zip`,
            pathPrefix: ''
        })*/
    ],
})
