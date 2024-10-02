<template>
  <PageLoader v-if="loading" />
  <div class="table-responsive" v-else>
    <table class="" v-if="resultsData.length">
      <thead>
        <tr class="m-0 p-0 fw-normal">
          <th class="" style="min-width:300px">Candidates</th>
          <th class="text-center" style="min-width:100px">Party</th>
          <th class="text-center" style="min-width:250px">Votes</th>
          <th class="text-center" style="min-width:100px">Pct.</th>
          <th v-if="showGainOrLoss" class="text-center" style="min-width:100px">
            Gain/Loss
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="president in resultsData" :key="president.id">
          <tr
            :style="`background-color: ${
              president?.totalposition == 1 ? president?.party.color2 : ''
            }`"
            :class="{ active: president?.totalposition == 1 }"
          >
            <td
              class="p-3"
              :style="`border-left:4px solid ${
                president?.party.color1 ?? '#9d9e9d'
              }`"
            >
              <div class="d-flex gap-2 align-items-center">
                <div class="" v-if="showAvatar">
                  <div class="">
                    <img width="50" :src="president?.candidate?.photo_url" alt="" style="width:50px; height: 50px; border-radius: 50%;">
                  </div>
                </div>
                <span>{{
                  president?.candidate?.name ?? president.party.name
                }}</span>
                <span
                  class="d-flex justify-content-center align-items-center"
                  :style="`background-color: ${president?.party.color1};width:30px; height:30px; border-radius: 50%; color:#FFF`"
                  v-if="president.totalposition == 1"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                </span>
              </div>
            </td>
            <td class="">
              <div class="d-flex justify-content-center align-items-center">
                <div
                  class="border rounded d-flex justify-content-center text-dark align-items-center py-1"
                  style="background-color: rgb(241, 241, 242); width:60px"
                >
                  {{ president?.party.code }}
                </div>
              </div>
            </td>
            <td class="text-center">
              {{ president?.totalvotes.toLocaleString() }}
            </td>
            <td class="text-center">{{ president?.totalpercent }}%</td>
            <td
              v-if="showGainOrLoss"
              class="text-center"
              style="border-right: 1px solid #cccc !important"
            >
              -
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import PageLoader from "@/components/PageLoader.vue";
import { getInitials } from "@/utils/getInitials";

const props = defineProps({
    showAvatar: {
      default: false,
    },
    showGainOrLoss: {
      default: false,
    },
    resultsData: {
      default: [],
    },
    loading: {},
  })

</script>
<style scoped>
table thead tr th {
  font-weight: 500;
  color: #585858;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.04rem;
  line-height: 0.7rem;
  padding-bottom: 10px;
}
table tbody tr {
  margin: 0px;
  font-weight: 500;
  font-size: 1.2rem;
  border-top: 1px solid #cccc;
  border-bottom: 1px solid #cccc;
}
.active {
  font-weight: 800;
}
</style>
