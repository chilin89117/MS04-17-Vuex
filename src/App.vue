<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h1>MS04-13 Vuex</h1>

        <!-- Old way without vuex -->
        <!-- <app-result :counter="counter"></app-result> -->
        <!-- <hr> -->
        <!-- <app-counter @updated="counter += $event"></app-counter> -->

        <app-result1></app-result1>
        <app-result2></app-result2>
        <hr>
        <app-counter1></app-counter1>
        <br>
        <app-counter2></app-counter2>
        <hr>
        <label for="value">New Value ("v-model"): </label>
        <!-- 'v-model' alone does not change values in vuex store -->
        <!-- Must use getters and setters computed property -->
        <input type="text" id="value" v-model="value">
        <p>Value ("v-model"): {{value}}</p>
        <hr>
        <label for="value">New Value (":value" & "@input"): </label>
        <input type="text" id="value" :value="value" @input="updateValue">
        <p>Value (":value" & "@input"): {{value}}</p>
        <hr>

      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1 text-center">
        <img src="./assets/Getters.png" width="600" height="400">
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1 text-center">
        <img src="./assets/Mutations.png" width="600" height="400">
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1 text-center">
        <img src="./assets/Actions.png" width="600" height="400">
      </div>
    </div>
  </div>
</template>

<script>
  import Counter1 from './components/Counter1.vue';
  import Counter2 from './components/Counter2.vue';
  import Result1 from './components/Result1.vue';
  import Result2 from './components/Result2.vue';

  export default {
    // Old way without vuex
    // data() {
    //   return {
    //     counter: 0,
    //   };
    // },
    components: {
      appCounter1: Counter1,
      appCounter2: Counter2,
      appResult1: Result1,
      appResult2: Result2,
    },
    computed: {
      // value() {
      //   return this.$store.getters.getValue;
      // },
      value: {                         // getter and setter in a computed property
        get() {
          return this.$store.getters.getValue;
        },
        set(val) {                     // rarely used for computed property
          this.$store.dispatch('updateValue', val);
        },
      },
    },
    methods: {
      updateValue(event) {
        this.$store.dispatch('updateValue', event.target.value);
      },
    },
  };
</script>
