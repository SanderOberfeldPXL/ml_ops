import { defineStore } from 'pinia'

export const useImageStore = defineStore('images',{
    state: () => ({images : [null, null]}),
    getters: {
        image: (state) => state.images,
    },
    actions: {
        changeImage(image, id) {this.images[id] = image},
    },
})