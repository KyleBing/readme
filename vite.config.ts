import {defineConfig} from 'vite'
import zipPack from "vite-plugin-zip-pack" // make dist.zip file

// 因为直接部署到 github 中，所以不需要打包成 zip 了

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // zipPack({
        //     inDir: 'dist',
        //     outDir: 'archive',
        //     outFileName: `readme.zip`,
        //     pathPrefix: ''
        // })
    ],
})
