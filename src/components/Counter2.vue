<template>
  <div>
    <!-- Without 'mapMutations' -->
    <!-- <button class="btn btn-primary" @click="increment2">Increment2</button> -->
    <!-- <button class="btn btn-primary" @click="decrement2">Decrement2</button> -->

    <!-- With 'mapMutations' -->
    <button class="btn btn-success" @click="increment({by: 1, delay: 1000})">+ 1 (async)</button>
    <button class="btn btn-danger" @click="decrement({by: 1, delay: 1000})">-1 (async)</button>
  </div>
</template>

<script>
  // import {mapMutations} from 'vuex';
  import {mapActions} from 'vuex';

  export default {
    // Install 'npm i --save-dev babel-preset-stage-2' and add to '.babelrc'

    methods: {                         // With vuex mapActions
      ...mapActions({
        increment: 'asyncIncrement',
        decrement: 'asyncDecrement',
      }),
    },

    // methods: {                      // With vuex mapMutations
    //   ...mapMutations([
    //     'increment',
    //     'decrement',
    //   ]),
    // },

    // methods: {                      // With vuex mutations
    //   increment2() {
    //     this.$store.commit('increment');
    //   },
    //   decrement2() {
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
