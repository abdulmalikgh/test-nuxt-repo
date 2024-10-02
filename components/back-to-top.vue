<template>
    <!-- Back to home Start -->
    <div v-if="back" class="back-to-home rounded d-none d-sm-block">
        <NuxtLink to="/" class="text-white rounded d-inline-block text-center"><i
                class="mdi mdi-home"></i></NuxtLink>
    </div>
    <!-- Back to home End -->


    <!-- Back to top -->
    <a v-else href="#" @click="scrollToTop" v-show="showTopButton" class="back-to-top rounded text-center"
        id="back-to-top">
        <i class="mdi mdi-chevron-up d-block"> </i>
    </a>
    <!-- Back to top -->
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

defineProps({
    back: {
        type: Boolean,
        required: true
    }
})

const showTopButton = ref(false);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function scrollToTop() {
    window.scrollTo(0, 0);
}

function handleScroll() {
    if (
        document.body.scrollTop >= 400 ||
        document.documentElement.scrollTop >= 400
    ) {
        showTopButton.value = true
    } else {
        showTopButton.value = false
    }
}
</script>

<style lang="scss" scoped></style>