<template>
    <!-- Footer Start -->
    <footer :class="lightFooter">
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
                    <ul class="list-unstyled text-sm-end social-icon mb-0" :class="icon">
                        <li v-for="item in datas" :key="item" class="list-inline-item me-1"><a :href="item.link"
                                target="_blank" class="rounded"><i :class="item.icon" :title="item.title"></i></a></li>
                    </ul><!--end icon-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </footer><!--end footer-->
    <!-- Footer End -->

</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps({
    lightFooter: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
})

const date = ref(new Date().getFullYear())

const datas = ref([
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

</script>

<style lang="scss" scoped></style>