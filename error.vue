<template>
    <!-- ERROR PAGE -->
    <section class="bg-home d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 text-center">
                    <div class="text-dark fw-bold mt-0 error-page">404!</div>
                    <div class="h3">Something's Missing</div>
                    <p class="text-muted para-desc mx-auto mt-4">The webpage your are looking for is not here !</p>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-md-12 text-center">
                    <NuxtLink to="/" class="btn btn-outline-primary mt-4">Go Back</NuxtLink>
                    <NuxtLink to="/" class="btn btn-primary mt-4 ms-2">Go To Home</NuxtLink>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- ERROR PAGE -->
    <backtohome :back=true />
</template>

<script setup>
import backtohome from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>