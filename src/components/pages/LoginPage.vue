<template lang="html">
  <div id="app-page-login">
    <div id="main-container">
      <div id="ieee-img">
        <img src="../../assets/ieee.png">
      </div>
      <div id="login-form">
        <p>Lütfen giriş yapınız</p>
        <input type="text" id="login-email" placeholder="E-mail adresinizi giriniz">
        <button type="button">Giriş</button>
      </div>
      <div id="vote-countdown">
        {{ countdown_hours }}:{{ countdown_minutes }}:{{ countdown_seconds }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-page-login'
}
</script>

<style lang="scss">
  #main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr;

    #ieee-img {
      grid-column: 1;
      grid-row: 1;
    }

    #login-form {
      grid-column: 2;
      grid-row: 1;

      background-color: #aaa;
    }

    #vote-countdown {
      grid-column: 1 / 3;
      grid-row: 2;
    }
  }
</style>
