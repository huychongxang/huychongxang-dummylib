<template>
    <div>
        <button @click="SET_COUNT">{{ getCount }}</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters(["getCount"]),
    },
    methods: {
      ...mapMutations([
        'SET_COUNT',
      ]),
    }
};
</script>
