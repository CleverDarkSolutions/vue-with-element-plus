<template>
<div>
    <div class='top'>
      <div class='form'>
        <p class='header'>Wybierz specjalistę do konsultacji online</p>

        <el-select class='select' v-model='selectedDoctor' placeholder='Jakiego lekarza potrzebujesz?'>
          <el-option v-for='item in doctorTypes' :key='item.value' :value='item.value' :label='item.value'>
            <span style="float: left">{{ item.value }}</span>
              <span style="float: right; color: var(--el-text-color-secondary);">{{ item.price }}</span>
          </el-option>
        </el-select>

        <el-select class='select' v-model='selectedType' placeholder='Jak chcesz się połączyć?'>
          <el-option v-for='item in appointmentTypes' :key='item' :value='item' :label='item'>
          </el-option>
        </el-select>

        <el-select class='select' v-model='selectedTime' placeholder='Kiedy ma być wizyta?'>
          <el-option v-for='item in timeAvailable' :key='item' :value='item' :label='item'>
          </el-option>
        </el-select>

        <div class='select'>
        <el-date-picker v-model="selectedDate" type="date" placeholder="Pick a day">
        </el-date-picker>
        </div>

        <el-button class='btn' type='success' @click='scrollToPayment'>Przejdź dalej </el-button>

        <img src='../assets/doc.png' class='doctor-image'>
      </div>
    </div>
      <div class='middle'>
        <div class='form' style='top: 50vw'>
          <p class='header'>Wypełnij swoje dane osobowe i formę płatności</p>

          <el-input class='input' placeholder="Imię" v-model="inputName"></el-input><br>
          <el-input class='input' placeholder="Nazwisko" v-model="inputSurname"></el-input><br>
          <el-input class='input' placeholder="Telefon kontaktowy" v-model="inputPhone"></el-input><br>
          <el-input class='input' placeholder="Adres email" v-model="inputEmail"></el-input><br>
          <el-checkbox class='checkbox' v-model='checkbox1' label='Zapoznałem/am się z regulaminem serwisu i akceptuje jego postanowienia'></el-checkbox>

          <div class='payments'>

            <div class='payment-box' style='top: 20%; left: 60%'>
              <img class='payment-image' :src='getImgUrl("mastercard.png")'>
            </div>

            <div class='payment-box' style='top: 20%; left: 70%;'>
              <img class='payment-image' :src='getImgUrl("paypal.png")'>
            </div>

            <div class='payment-box' style='top: 20%; left: 80%'>
              <img class='payment-image' :src='getImgUrl("paysafecard.png")'>
            </div>

            <div class='payment-box' style='top: 53%; left: 60%'>
              <img class='payment-image' :src='getImgUrl("przelewy24.png")'>
            </div>

            <div class='payment-box' style='top: 53%; left: 70%'>
              <img class='payment-image' :src='getImgUrl("googlepay.png")'>
            </div>

            <div class='payment-box' style='top: 53%; left: 80%'>
              <img class='payment-image' :src='getImgUrl("bitcoin.png")'>
            </div>

          </div>
        </div>
      </div>
      <Footer style='top: 100vw'/>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  components: {
    Footer
  },
  methods: {
    getImgUrl (pic) { // for some reason this is necessary
      return require('../assets/' + pic)
    },
    scrollToPayment () {
      window.scrollBy(0, 600)
    }
  },
  data () {
    return {
      selectedDoctor: '',
      selectedType: '',
      selectedTime: '',
      selectedDate: '',
      inputName: '',
      inputSurname: '',
      inputPhone: '',
      inputEmail: '',
      checkbox1: false,
      doctorTypes: [
        {
          value: 'Anestezjolog',
          price: '120 zl'
        },
        {
          value: 'Ginekolog',
          price: '90 zl'
        },
        {
          value: 'Endoktrynolog',
          price: '100 zl'
        },
        {
          value: 'Stomatolog',
          price: '70 zl'
        }
      ],
      appointmentTypes: [
        'Przez telefon',
        'Wideorozmowa',
        'VR OnlineMed (nowość)',
        'Przez czat'
      ],
      timeAvailable: [
        '9:00 - 10:00',
        '10:00 - 11:00',
        '13:00 - 14:00',
        '15:00 - 16:00',
        '17:00 - 18:00'
      ]
    }
  }
})
</script>

<style scoped>
    .btn {
      float: left;
      margin-top: 2%;
      margin-left: -20vw;
      width: 20vw;
    }

    .checkbox{
      float: left;
      margin-left: 10%;
      margin-top: 1%;
    }
    .top {
        width: 100%;
        height: 45vw;
        background: linear-gradient(to top, #dfe9f3 0%, white 100%);
    }

    .middle {
      background: #eeeeee;
      height: 40vw;
      width: 100%;
      float:left;
    }

    .select {
      font-family: 'Noto Sans', sans-serif;
      width: 60%;
      text-align: left;
      margin-top: 2%;
      margin-left: 10%;
      float: left;
    }

    .input {
      width: 40%;
      margin-top: 1vw;
      margin-left: -40%;
    }

    .el-select-dropdown__item {
      font-family: 'Noto Sans', sans-serif;
      font-size: 1vw;
    }

    .el-select-dropdown__item:hover {
      background: #d5eeff;
    }

    .el-input {
      font-size: 1vw;
    }

    .el-picker-panel__body{
      font-size: 1vw;
      font-family: 'Noto Sans', sans-serif;
    }

    .form {
      position: absolute;
      left: 10%;
      top: 15vw;
      width: 80%;
      height: 25vw;
      background: white;
      border-radius: 2vw;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .header {
      margin-top: 3%;
      margin-left: 5%;
      font-size: 1.5vw;
      text-align: left;
    }
    .payment-box {
      border: 2px solid black;
      border-radius: 1vw;
      width: 7vw;
      height: 7vw;
      float: left;
      position: absolute;
    }

    .payment-box:hover {
      border: 2px solid #afc5ff;
      cursor: pointer;
    }

    .payment-image {
      width: 5vw;
      height: 5vw;
      margin-top: 1vw;
    }

    .doctor-image {
      position: absolute;
      overflow: hidden;
      right: 0%;
      top: 0%;
      width: 25vw;
      height: 25vw;
    }

     @media only screen and (max-width: 1200px) {
       .form {
         height: 30vw;
       }
    }
</style>
