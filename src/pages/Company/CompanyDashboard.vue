<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">total des offres</p>
            <h3 >01</h3>
          </template>

          
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">Candidatures</p>
            <h3 class="title">
              06
              
            </h3>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Candidatures refusée</p>
            <h3 class="title">01</h3>
          </template>

          
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Candidatures acceptée</p>
            <h3 class="title">01</h3>
          </template>

         
        </stats-card>
      </div>
    </div>
    <h1 style="text-align:center; margin-right: 389px;">les Dernières Offres</h1>
    <div class="table-responsive" style="width: fit-content;">
      <div class="table-wrapper">
       
        <table class="table table-striped table-hover">
          <thead>
            
            <tr>
              
             
              <th>Titre</th>
              <th>condidat acceptée</th>
              <th>etat d'offre</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="off in offres" :key="off.id" :value="off.id">
              
              <td style="    width: 27%;">{{off.titre}}</td>
              <td>{{ off.condidat_id }}</td>

              <td>
                <span v-if="off.etat_offre=='active'" class="status text-success">&bull;</span>
                <span v-if="off.etat_offre=='close'" class="status text-danger">&bull;</span>{{ off.etat_offre }}
              </td>
              
            </tr>
          </tbody>
        </table>
       
      </div>
    </div>
  </div>
</template>

<script>
import StatsCard from "@/components/Cards/StatsCard.vue"

export default {
  components: {
   StatsCard
  },
  data() {
    return {
      offres:[],
      total:"",
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
    };
  },
  created(){
 this.axios
      .get(`http://127.0.0.1:8000/api/offreEntreprise`)
      .then((response) => {
        this.offres = response.data.offres;
      })
      .catch((error) => {
        console.log(error);
      });
      
  },
  computed: {
    total: function () {
      return this.offres.length;
    },
  },

};
</script>