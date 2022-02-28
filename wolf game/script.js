Vue.createApp({
  data() {
    return {
      show: true,
      wolf: 100,
      user: 100,
      clickA: 0,
      clickC: 0,
      isActiveA: false,
      isActiveC: false,
    }
  },
  methods: {
    attack() {
      let countU = Math.floor(Math.random() * 15)
      let countW = Math.floor(Math.random() * 15)

      this.user = this.user - countU
      this.wolf = this.wolf - countW

      this.gameOver(this.user, this.wolf)
    },
    violentAttack() {
      let countU = Math.floor(Math.random() * 25)
      let countW = Math.floor(Math.random() * 25)

      this.user = this.user - countU
      this.wolf = this.wolf - countW

      this.gameOver(this.user, this.wolf)

      this.clickA++
      if (this.clickA == 2) {
        this.isActiveA = true
      }
    },

    collectPoint() {
      let countU = Math.floor(Math.random() * 15)
      let countW = Math.floor(Math.random() * 15)

      this.user = this.user + countU
      this.wolf = this.wolf + countW

       if(this.user>100){
       this.user=100
       }
       if(this.wolf>100){
        this.wolf=100
        }

      this.clickC++
      if (this.clickC == 2) {
        this.isActiveC = true
      }
    },

    gameOver(user, wolf) {
 
        if(user<=0 && wolf<=0){
            setTimeout(() => {
                alert('heç-heçə')
            }, 500);
        }
      else if (user <= 0) {
     setTimeout(() => {
        alert('uduzdunuz')
        location.reload()
     }, 500);
      }
     else if (wolf <= 0) {
        setTimeout(() => {
            alert('uddunuz')
        location.reload()
        }, 500);
      }
    },
    exit() {
      if (confirm('Oyundan çıxmaq istədiyinizə əminsinizmi? ')) {
        location.reload()
      }
    },
  },
}).mount('#app')
