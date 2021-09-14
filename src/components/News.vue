<template>
    <div class='news'>
      <p class='header'>Aktualności</p>
      <div v-for='item in articles' :key='item' class='elements'>
        <div class='element'>
          <img class='image' :src='getImgUrl(item.image)'>
          <p class='title'>{{ item.title }}</p>
          <p class='date'>{{ item.date }}</p>
          <p class='content'>{{ item.content }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      articles: [
        {
          id: 0,
          image: 'article1.png',
          title: 'Nowa strona OnlineMedu już gotowa !',
          date: '28.08.2021',
          content: 'An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.'
        },
        {
          id: 1,
          image: 'article2.png',
          title: 'Nieograniczone możliwości',
          date: '23.08.2021',
          content: 'Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating.'
        },
        {
          id: 2,
          image: 'article3.png',
          title: 'Poznaj naszych lekarzy',
          date: '14.08.2021',
          content: 'And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.'
        }
      ]
    }
  },
  methods: {
    getImgUrl (pic) { // for some reason this is necessary
      return require('../assets/' + pic)
    }
  }
})
</script>

<style scoped>

.news {
    width: 80%;
    position: absolute;
    top: 170vw;
    left: 10%;
    text-align: left;
}

.title {
    font-size: 1.5vw;
    font-weight: 600;
    position: relative;
    left: 30%;
}

.date {
    color: gray;
    position: relative;
    font-size: 1vw;
    top: -1vw;
    left: 30%;
}

.element {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    margin-bottom: 2vw;
    height: 15vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.03);
    border-radius: 1vw;
}

.header {
    font-size: 2vw;
    font-weight: 900;
}

.content {
    position: relative;
    top: -1vw;
    left: 30%;
    width: 65%;
    font-size: 1.2vw;
}

.image {
    width: 20vw;
    height: 15vw;
    position: absolute;
    left: 0vw;
    border-right: 3px solid #e3e3e3;
    padding-right: 0.5vw;
}

</style>
