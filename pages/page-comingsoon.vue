<template>
    <!-- Hero Start -->
    <section class="bg-special d-flex align-items-center"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center center' }">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 text-center">
                    <a href="javascript:void(0)" class="text-white title-dark logo">Leaping<span
                            class="text-primary">.</span></a>
                    <div class="text-uppercase display-2 fw-bold text-white title-dark mt-2 mb-4 coming-soon">Coming
                        soon</div>
                    <p class="text-white title-dark para-desc mx-auto">Build responsive, mobile-first projects on the
                        web with the world's most popular front-end component library.</p>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-md-12 text-center">
                    <div id="countdown">
                        <ul class="count-down list-unstyled">
                            <li id="days" class="count-number list-inline-item m-2">{{ days }}<p class="count-head">Days
                                </p>
                            </li>
                            <li id="hours" class="count-number list-inline-item m-2">{{ hours }}<p class="count-head">
                                    Hours</p>
                            </li>
                            <li id="mins" class="count-number list-inline-item m-2">{{ minutes }}<p class="count-head">
                                    minutes</p>
                            </li>
                            <li id="secs" class="count-number list-inline-item m-2">{{ seconds }}<p class="count-head">
                                    seconds</p>
                            </li>
                            <li id="end" class="h1"></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row mt-4 pt-2">
                <div class="col-12 text-center">
                    <div class="subcribe-form">
                        <form action="/page-comingsoon">
                            <input name="email" id="email" type="email" class="rounded-pill" required=""
                                placeholder="Your email :">
                            <button type="submit" class="btn btn-primary rounded-pill">Subscribe</button>
                        </form>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div> <!-- end container -->
    </section><!--end section-->
    <!-- Hero End -->
     <backtohome :back=true />
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import backtohome from '@/components/back-to-top.vue';
import image from '../../assets/images/comingsoon.jpg';

const now = ref(new Date().getTime())
const targetTime = ref(new Date("Sep 26, 2025 00:00:00").getTime())
const difference = ref(0)

const days = computed(() => Math.floor(difference.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => 23 - new Date(now.value).getHours())
const minutes = computed(() => 60 - new Date(now.value).getMinutes())
const seconds = computed(() => 60 - new Date(now.value).getSeconds())

watch(now, () => {
    difference.value = targetTime.value - now.value
})

function updateNow() {
    now.value = new Date().getTime()
}

if (process.client) {
    updateNow()
    setInterval(updateNow, 1000)
}

onMounted(() => {
    document.documentElement.classList.add('dark')
})
</script>

<style lang="scss" scoped></style>