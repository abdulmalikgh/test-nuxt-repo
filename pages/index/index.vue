<template>
    <navbar />
    <section class="bg-half-100 w-100 mt-10" style="height: 70%;">
        <div class="container">
            <div class="row align-items-center mt-5">
                <div class="col-md-12">
                    <national-results :showAvatar="true" :showGainOrLoss="true" :loading="loadingNationalResults" :resultsData="nationElectionResults"/>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="home-shape-arrow">
                    <a href="#features" class="mouse-down"><i
                            class="mdi mdi-arrow-down arrow-icon text-dark h5"></i></a>
                </div>
            </div><!--end row-->
        </div> <!-- END CONTAINER -->
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'
import ResultsServices from '@/services/ResultsServices.js'
import { getPartyData } from "@/utils/partiesData";

const loadingNationalResults = ref(false);
const nationElectionResults = ref([]);

const getNationElectionResults = async () => {
    loadingNationalResults.value = true;
    try {
        const res = await ResultsServices.fetchNationalResults(import.meta.env.VITE_APP_ELECTION_ID);
        nationElectionResults.value = res.data.map((rs) => {
            return {
            ...rs,
            party: {
                ...rs.party,
                ...getPartyData(rs.party_id)
            }
        }
    });
        console.log('res.data', nationElectionResults.value)
    } catch (error) {
        console.log('Hello error', error)
    } finally {
        loadingNationalResults.value = false;
    }
}

onMounted(async() => {
    await getNationElectionResults();
})

</script>

<style lang="scss" scoped>
.bg-half-100 {
  padding: 100px 0;
  background-size: cover;
  align-self: center;
  position: relative;
  background-position: center center;
}
</style>