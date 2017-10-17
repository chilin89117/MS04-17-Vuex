<template>
  <div>
    <!-- Without 'mapMutations' -->
    <!-- <button class="btn btn-primary" @click="increment1">Increment1</button> -->
    <!-- <button class="btn btn-primary" @click="decrement1">Decrement1</button> -->

    <!-- With 'mapMutations' -->
    <button class="btn btn-success" @click="increment(5)">+ 5</button>
    <button class="btn btn-danger" @click="decrement(5)">- 5</button>
  </div>
</template>

<script>
  // import {mapMutations} from 'vuex';
  import {mapActions} from 'vuex';

  export default {
    // Install 'npm i --save-dev babel-preset-stage-2' and add to '.babelrc'

    methods: {                         // With vuex mapActions
      ...mapActions({
        increment: 'increment',
        decrement: 'decrement',
      }),
      // increment(payload) {
      //   this.$store.dispatch('increment', payload);
      // },
      // decrement(payload) {
      //   this.$store.dispatch('decrement', payload);
      // },
    },

    // methods: {                      // With vuex mapMutations
    //   ...mapMutations([
    //     'increment',
    //     'decrement',
    //   ]),
    // },

    // methods: {                      // With vuex mutations
    //   increment1() {
    //     this.$store.commit('increment');
    //   },
    //   decrement1() {
    //     this.$store.commit('decrement');
    //   },
    // },

    // methods: {                      // With vuex
    //   increment() {
    //     this.$store.state.counter++;
    //   },
    //   decrement() {
    //     this.$store.state.counter--;
    //   },
    // },

    // methods: {                      // Without vuex
    //   increment() {
    //   this.$emit('updated', 1);
    //
    //   },
    //   decrement() {
    //   this.$emit('updated', -1);
    //   },
    // },
  };
</script>
