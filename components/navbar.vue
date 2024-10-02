<template>
    <!-- Navbar STart -->
    <header id="topnav" class="defaultscroll sticky bg-success" :class="bgLight">
        <div class="container">

            <!-- Start Light Logo container-->
            <NuxtLink class="logo" to="/">
                <span class="logo-light-mode">
                    <img src="assets/images/default-dark.svg"  height="28" alt="">
                </span>
            </NuxtLink>
            <!-- End Light Logo container-->

            <!-- Start Logo container-->
            <!-- <NuxtLink v-else class="logo" to="/">
                <img src="assets/images/logo-dark.png" height="28" class="logo-light-mode" alt="">
                <img src="assets/images/logo-light.png" height="28" class="logo-dark-mode" alt="">
            </NuxtLink> -->
            <!-- End Logo container-->

            <!-- Start toggle -->
            <div class="menu-extras" @click="handler">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" id="isToggle" :class="toggle === false ? '' : 'open'">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>
            <!-- End toggle -->

            <!--start button-->
            <!-- <div v-if="button" class="buy-button">
                <a href=""
                    target="_blank">
                    <span class="btn btn-primary d-md-inline-flex d-none">Login</span>
                    <span class="btn btn-icon btn-primary d-inline-flex d-md-none"><i data-feather="log-in"
                            class="fea icon-sm"></i></span>
                </a>
            </div> -->
            <!--end button-->

            <!--start button-->
            <!-- <div v-else class="buy-button">
                <a href=""
                    target="_blank">
                    <span class="btn btn-primary d-md-inline-flex d-none">Login</span>
                    <span class="btn btn-icon btn-primary d-inline-flex d-md-none"><i data-feather="log-in"
                            class="fea icon-sm"></i></span>
                </a>
            </div> -->
            <!--end button-->

            <div id="navigation" :class="toggle === false ? 'd-none' : 'd-block'">
                <!-- Navigation Menu-->
                <ul class="navigation-menu nav-right" :class="navLight">
                    <li :class="activeIndex === '/' ? 'active' : ''">
                        <NuxtLink to="/" class="sub-menu-item">Home</NuxtLink>
                    </li>

                    <li class="has-submenu parent-parent-menu-item"
                        :class="['/pages', '/page-about', '/page-profile', '/page-services', '/page-pricing', '/page-team', '/job', '/page-jobs', '/page-job-detail', '/page-job-apply-form', '/helpcenter', '/help-overview', '/help-faq', '/help-support', '/help-guides', '/casestudy', '/page-cases', '/page-case-single', '/utility', '/page-terms', '/page-privacy', '/authentication', '/page-login', '/page-signup', '/page-forgot-password', '/page-login-2', '/page-signup-2', '/page-forgot-password-2', '/special', '/page-comingsoon', '/page-maintenance', '/page-404', '/components'].includes(activeIndex) ? 'active' : ''">
                        <NuxtLink to="#" @click="submenu(openMenu === '/pages' ? '' : '/pages')">President</NuxtLink><span
                            class="menu-arrow"></span>
                        <ul class="submenu"
                            :class="['/pages', '/page-about', '/page-profile', '/page-services', '/page-pricing', '/page-team', '/job', '/helpcenter', '/casestudy', '/utility', '/authentication', '/special'].includes(openMenu) ? 'open' : ''">
                            <li :class="activeIndex === '/page-about' ? 'active' : ''">
                                <NuxtLink to="/page-about" class="sub-menu-item">Aboutus</NuxtLink>
                            </li>
                            <li :class="activeIndex === '/page-profile' ? 'active' : ''">
                                <NuxtLink to="/page-profile" class="sub-menu-item">Profile</NuxtLink>
                            </li>
                            <li :class="activeIndex === '/page-services' ? 'active' : ''">
                                <NuxtLink to="/page-services" class="sub-menu-item">Services</NuxtLink>
                            </li>
                            <li :class="activeIndex === '/page-pricing' ? 'active' : ''">
                                <NuxtLink to="/page-pricing" class="sub-menu-item">Pricing</NuxtLink>
                            </li>
                            <li :class="activeIndex === '/page-team' ? 'active' : ''">
                                <NuxtLink to="/page-team" class="sub-menu-item">Team</NuxtLink>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/job', '/page-jobs', '/page-job-detail', '/page-job-apply-form'].includes(activeIndex) ? 'active' : ''">
                                <NuxtLink to="#" @click="submenu(openMenu === '/job' ? '' : '/job')">
                                    Job</NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/job', '/page-jobs', '/page-job-detail', '/page-job-apply-form'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/page-jobs' ? 'active' : ''">
                                        <NuxtLink to="/page-jobs" class="sub-menu-item">All Jobs</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-job-detail' ? 'active' : ''">
                                        <NuxtLink to="/page-job-detail" class="sub-menu-item">Job Detail</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-job-apply-form' ? 'active' : ''">
                                        <NuxtLink to="/page-job-apply-form" class="sub-menu-item">Job Apply</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/helpcenter', '/help-overview', '/help-faq', '/help-support', '/help-guides'].includes(activeIndex) ? 'active' : ''">
                                <NuxtLink to="#" @click="submenu(openMenu === '/helpcenter' ? '' : '/helpcenter')">
                                    Help Center </NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/helpcenter', '/help-overview', '/help-faq', '/help-support', '/help-guides'].includes(openMenu) ? 'open' : ''">

                                    <li :class="activeIndex === '/help-overview' ? 'active' : ''">
                                        <NuxtLink to="/help-overview" class="sub-menu-item">Overview</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/help-faq' ? 'active' : ''">
                                        <NuxtLink to="/help-faq" class="sub-menu-item">F.A.Q</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/help-support' ? 'active' : ''">
                                        <NuxtLink to="/help-support" class="sub-menu-item">Support</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/help-guides' ? 'active' : ''">
                                        <NuxtLink to="/help-guides" class="sub-menu-item">Guide</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/casestudy', '/page-cases', '/page-case-single'].includes(activeIndex) ? 'active' : ''">
                                <NuxtLink to="#" @click="submenu(openMenu === '/casestudy' ? '' : '/casestudy')"> Case
                                    Study</NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/casestudy', '/page-cases', '/page-case-single'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/page-cases' ? 'active' : ''">
                                        <NuxtLink to="/page-cases" class="sub-menu-item">Cases</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-case-single' ? 'active' : ''">
                                        <NuxtLink to="/page-case-single" class="sub-menu-item">Single Case</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/authentication', '/page-login', '/page-signup', '/page-forgot-password', '/page-login-2', '/page-signup-2', '/page-forgot-password-2'].includes(activeIndex) ? 'active' : ''">
                                <NuxtLink to="#"
                                    @click="submenu(openMenu === '/authentication' ? '' : '/authentication')">
                                    Authentication</NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/authentication', '/page-login', '/page-signup', '/page-forgot-password', '/page-login-2', '/page-signup-2', '/page-forgot-password-2'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/page-login' ? 'active' : ''">
                                        <NuxtLink to="/page-login" class="sub-menu-item">Login Simple</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-signup' ? 'active' : ''">
                                        <NuxtLink to="/page-signup" class="sub-menu-item">Signup Simple</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-forgot-password' ? 'active' : ''">
                                        <NuxtLink to="/page-forgot-password" class="sub-menu-item">Forgot Password
                                            Simple</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-login-2' ? 'active' : ''">
                                        <NuxtLink to="/page-login-2" class="sub-menu-item">Login</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-signup-2' ? 'active' : ''">
                                        <NuxtLink to="/page-signup-2" class="sub-menu-item">Signup</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-forgot-password-2' ? 'active' : ''">
                                        <NuxtLink to="/page-forgot-password-2" class="sub-menu-item">Forgot
                                            Password</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/utility', '/page-terms', '/page-privacy'].includes(activeIndex) ? 'active' : ''">
                                <NuxtLink to="#" @click="submenu(openMenu === '/utility' ? '' : '/utility')">
                                    Utility</NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/utility', '/page-terms', '/page-privacy'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/page-terms' ? 'active' : ''">
                                        <NuxtLink to="/page-terms" class="sub-menu-item">Terms & Conditions</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-privacy' ? 'active' : ''">
                                        <NuxtLink to="/page-privacy" class="sub-menu-item">Privacy Policy</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item"
                                :class="['/special', '/page-comingsoon', '/page-maintenance', '/page-404'].includes(activeIndex) ? 'active' : ''">
                                <NuxtLink to="#" @click="submenu(openMenu === '/special' ? '' : '/special')">
                                    Special</NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu"
                                    :class="['/special', '/page-comingsoon', '/page-maintenance', '/page-404'].includes(openMenu) ? 'open' : ''">
                                    <li :class="activeIndex === '/page-comingsoon' ? 'active' : ''">
                                        <NuxtLink to="/page-comingsoon" class="sub-menu-item">Coming Soon</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-maintenance' ? 'active' : ''">
                                        <NuxtLink to="/page-maintenance" class="sub-menu-item">maintenance</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/page-404' ? 'active' : ''">
                                        <NuxtLink to="/page-404" class="sub-menu-item">Error 404</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li :class="activeIndex === '/components' ? 'active' : ''">
                                <NuxtLink to="/components" class="sub-menu-item">Components</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li class="has-submenu parent-parent-menu-item"
                        :class="['/portfolio', '/portfolio-classic-two', '/portfolio-classic-three', '/portfolio-classic-four', '/portfolio-classic-five', '/portfolio-classic-six', '/portfolio-creative-two', '/portfolio-creative-three', '/portfolio-creative-four', '/portfolio-creative-five', '/portfolio-creative-six', '/portfolio-modern-two', '/portfolio-modern-three', '/portfolio-modern-four', '/portfolio-modern-five', '/portfolio-modern-six', '/portfolio-masonry-two', '/portfolio-masonry-three', '/portfolio-masonry-four', '/portfolio-masonry-five', '/portfolio-masonry-six', '/portfolio-detail-one', '/portfolio-detail-two', '/portfolio-detail-three'].includes(activeIndex) ? 'active' : ''">
                        <NuxtLink to="#" @click="submenu(openMenu === '/portfolio' ? '' : '/portfolio')">Parliament
                        </NuxtLink><span class="menu-arrow"></span>
                        <ul class="submenu megamenu"
                            :class="['/portfolio', '/portfolio-classic-two', '/portfolio-classic-three', '/portfolio-classic-four', '/portfolio-classic-five', '/portfolio-classic-six'].includes(openMenu) ? 'open' : ''">
                            <li>
                                <ul>
                                    <li class="megamenu-head">Classic Portfolio</li>
                                    <li :class="activeIndex === '/portfolio-classic-two' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-classic-two" class="sub-menu-item">Two Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-classic-three' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-classic-three" class="sub-menu-item">Three
                                            Column</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-classic-four' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-classic-four" class="sub-menu-item">Four Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-classic-five' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-classic-five" class="sub-menu-item">Five Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-classic-six' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-classic-six" class="sub-menu-item">Six Column
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">Creative Portfolio</li>
                                    <li :class="activeIndex === '/portfolio-creative-two' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-creative-two" class="sub-menu-item">Two Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-creative-three' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-creative-three" class="sub-menu-item">Three
                                            Column</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-creative-four' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-creative-four" class="sub-menu-item">Four
                                            Column</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-creative-five' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-creative-five" class="sub-menu-item">Five
                                            Column</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-creative-six' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-creative-six" class="sub-menu-item">Six Column
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">Modern Portfolio</li>
                                    <li :class="activeIndex === '/portfolio-modern-two' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-modern-two" class="sub-menu-item">Two Column</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-modern-three' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-modern-three" class="sub-menu-item">Three Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-modern-four' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-modern-four" class="sub-menu-item">Four Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-modern-five' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-modern-five" class="sub-menu-item">Five Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-modern-six' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-modern-six" class="sub-menu-item">Six Column</NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">Masonry Portfolio</li>
                                    <li :class="activeIndex === '/portfolio-masonry-two' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-masonry-two" class="sub-menu-item">Two Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-masonry-three' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-masonry-three" class="sub-menu-item">Three
                                            Column</NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-masonry-four' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-masonry-four" class="sub-menu-item">Four Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-masonry-five' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-masonry-five" class="sub-menu-item">Five Column
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-masonry-six' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-masonry-six" class="sub-menu-item">Six Column
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">Portfolio Detail</li>
                                    <li :class="activeIndex === '/portfolio-detail-one' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-detail-one" class="sub-menu-item">Portfolio One
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-detail-two' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-detail-two" class="sub-menu-item">Portfolio Two
                                        </NuxtLink>
                                    </li>
                                    <li :class="activeIndex === '/portfolio-detail-three' ? 'active' : ''">
                                        <NuxtLink to="/portfolio-detail-three" class="sub-menu-item">Portfolio
                                            Three</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li :class="activeIndex === '/contact' ? 'active' : ''">
                        <NuxtLink to="/contact" class="sub-menu-item">Contact</NuxtLink>
                    </li>
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </header><!--end header-->
    <!-- Navbar End -->

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';
import feather from 'feather-icons'
defineProps({
    navLight: {
        type: String,
        require: true
    },
    logoLight: {
        type: Boolean,
        require: true
    },
    button: {
        type: Boolean,
        require: true
    },
    bgLight: {
        type: String,
        require: true
    },
})

const toggle = ref(false)
const activeIndex = computed(() => window.location.pathname)
const menu = ref('')
const openMenu = ref('')

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    scrollToTop(),
        feather.replace()
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const submenu = (item) => {
    menu.value = !menu.value
    openMenu.value = item
}

const handler = () => {
    toggle.value = !toggle.value;
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const handleScroll = () => {
    const navbar = document.getElementById("topnav");
    if (window.scrollY >= 0) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}
</script>

<style lang="scss" scoped></style>