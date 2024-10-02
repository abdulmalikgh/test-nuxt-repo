<template>
    <!-- Footer Start -->
    <footer class="footer bg-footer footer-bar">
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="text-sm-start">
                        <p class="mb-0">©
                            {{ date }} <NuxtLink class="logo" to="/">
                <span class="logo-light-mode">
                    <img src="assets/images/default-dark.svg"  height="28" alt="">
                </span>
            </NuxtLink>
                        </p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </footer><!--end footer-->
    <!-- Footer End -->
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().getFullYear())

const social = ref([
    {
        link: 'https://dribbble.com/shreethemes',
        icon: 'uil uil-dribbble align-middle',
        title: 'dribbble'
    },
    {
        link: 'https://www.behance.net/shreethemes',
        icon: 'uil uil-behance',
        title: 'Behance'
    },
    {
        link: 'http://linkedin.com/company/shreethemes',
        icon: 'uil uil-linkedin',
        title: 'Linkedin'
    },
    {
        link: 'https://www.facebook.com/shreethemes',
        icon: 'uil uil-facebook-f align-middle',
        title: 'facebook'
    },
    {
        link: 'https://www.instagram.com/shreethemes/',
        icon: 'uil uil-instagram align-middle',
        title: 'instagram'
    },
    {
        link: 'https://twitter.com/shreethemes',
        icon: 'uil uil-twitter align-middle',
        title: 'twitter'
    },
    {
        link: 'mailto:support@shreethemes.in',
        icon: 'uil uil-envelope align-middle',
        title: 'email'
    },
    {
        link: 'https://forms.gle/QkTueCikDGqJnbky9',
        icon: 'uil uil-file align-middle',
        title: 'customization'
    },
])

const about = ref(['About us', 'Services', 'Team', 'Terms Policy', 'Privacy Policy', 'Login'])

const landing = ref(['Agency', 'Software', 'Startup', 'Business', 'Hosting', 'Studio'])

const locations = ref(['San Francisco', 'Tokio', 'South Korea', 'Myanmar'])
</script>

<style lang="scss" scoped></style>