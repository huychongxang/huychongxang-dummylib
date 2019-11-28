<template>
    <div>
        <DummyButton />
        <Other />
    </div>
</template>

<script>
import DummyButton from "./components/DummyButton.vue";
import Other from "./components/Other.vue";
export default {
    name: "app",
    components: {
        DummyButton,
        Other
    }
};
</script>

<style></style>
