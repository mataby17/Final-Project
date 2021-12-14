export default {
    name: "App",
    computed: {
      imgHover1 () {
        if (this.hover == true) {
          return this.flood1
        } else {
          return this.flood2
        }
      },
      
    },
    data () {
      return {
        flood1: "flood1.jpg",
        flood2: "flood2.jpg",
        hover: false
      }
    },
    template: `
    
    <img :src="imgHover1" @mouseover="hover = true" @mouseleave="hover = false ">
    
      `
  };
  