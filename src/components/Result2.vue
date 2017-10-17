<template>
  <div>
    <h3>Result2 stringCounter is: {{stringCounter}}</h3>
    <h4>Result2 doubleCounter is: {{doubleCounter}}</h4>

    <!-- Without using 'mapGetters' -->
    <!-- <h3>Result2 stringCounter is: {{stringCounter2}}</h3> -->
    <!-- <h4>Result2 doubleCounter is: {{doubleCounter2}}</h4> -->
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  // '...' in ES6 tells JS to pull out functions in 'mapGetters' object as...
  // ...key/value pairs, allowing us to add computed properties
  // But this will not work unless 'npm i --save-dev babel-preset-stage-2'...
  // ...and add 'stage-2' to '.babelrc' file
  export default {
    computed: {
      ...mapGetters([
        'stringCounter',
        'doubleCounter',
      ]),
    },

    // This uses 'mapGetters' but does not allow custom computed properties
    // computed: mapGetters([
    //   'stringCounter',
    //   'doubleCounter',
    // ]),

    // Without using 'mapGetters'
    // computed: {
    //   stringCounter2() {
    //     return this.$store.getters.stringCounter;
    //   },
    //   doubleCounter2() {
    //     return this.$store.getters.doubleCounter;
    //   },
    // },
  };
</script>
