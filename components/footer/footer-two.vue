<template>
    <!-- Footer Start -->
    <footer class="footer bg-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a class="logo-footer text-light" href="#"><img src="../../assets/images/logo-light.png" height="28"
                            alt=""></a>
                    <p class="mt-4">Build responsive, mobile-first projects on the web with the world's most popular
                        front-end component library.</p>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h4 class="text-light footer-head">Landing</h4>
                    <ul class="list-unstyled footer-list mt-4 p-0">
                        <li v-for="item in landing" :key="item"><NuxtLink :to="item.link" class="text-foot"><i
                                    class="mdi mdi-chevron-right me-1"></i>
                                {{ item.name }}</NuxtLink></li>
                    </ul>
                </div><!--end col-->

                <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h4 class="text-light footer-head">About</h4>
                    <ul class="list-unstyled footer-list mt-4 p-0">
                        <li v-for="item in about" :key="item"><a :href="item.link" class="text-foot"><i
                                    class="mdi mdi-chevron-right me-1"></i> {{ item.name }}</a></li>
                    </ul>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h4 class="text-light footer-head">Locations</h4>
                    <ul class="list-unstyled footer-list mt-4 p-0">
                        <li v-for="item in location" :key="item"><a href="#" class="text-foot"><i
                                    class="mdi mdi-chevron-right me-1"></i> {{ item }}</a>
                        </li>
                    </ul>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </footer><!--end footer-->

    <footer class="footer bg-footer footer-bar">
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="text-sm-start">
                        <p class="mb-0">©
                            {{ date }} <span class="text-reset">Leaping</span>. Design & Develop with <i
                                class="mdi mdi-heart text-danger"></i>
                            by <a href="https://shreethemes.in" target="_blank"
                                class="text-reset">Shreethemes-studio</a>.
                        </p>
                    </div>
                </div><!--end col-->

                <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <ul class="list-unstyled text-sm-end social-icon social mb-0">
                        <li v-for="item in social" :key="item" class="list-inline-item me-1"><a :href="item.link"
                                target="_blank" class="rounded"><i :class="item.icon" :title="item.title"></i></a></li>
                    </ul><!--end icon-->
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

const location = ref(['San Francisco', 'Tokio', 'South Korea', 'Myanmar']);

const about = ref([
    {
        link: '/page-about',
        name: 'About us'
    },
    {
        link: '/page-services',
        name: 'Services'
    },
    {
        link: '/page-team',
        name: 'Team'
    },
    {
        link: '/page-pricing',
        name: 'Pricing'
    },
    {
        link: '/page-services',
        name: 'Features'
    },
    {
        link: '/help-faq',
        name: 'FAQ'
    },
    {
        link: '/blogs',
        name: 'Blog'
    },
    {
        link: '/page-login-2',
        name: 'Login'
    },
])

const landing = ref([
    {
        link: '/index-agency',
        name: 'Agency'
    },
    {
        link: '/index-software',
        name: 'Software'
    },
    {
        link: '/index-startup',
        name: 'Startup'
    },
    {
        link: '/index-application',
        name: 'Application'
    },
    {
        link: '/index-business',
        name: 'Business'
    },
    {
        link: '/index-freelancer',
        name: 'Freelancer'
    },
    {
        link: '/index-marketing',
        name: 'Marketing'
    },
    {
        link: '/index-property',
        name: 'Property'
    },
])
</script>

<style lang="scss" scoped></style>