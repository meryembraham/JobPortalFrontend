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
            <p class="category">Users</p>
            <h3 class="title">27</h3>
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
            <p class="category">Offres</p>
            <h3 class="title">
              10
              
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
            <p class="category">Regions</p>
            <h3 class="title">24</h3>
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
            <p class="category">Secteurs</p>
            <h3 class="title">25</h3>
          </template>

          
            
        </stats-card>
      </div>
    </div>
     <div class="table-responsive">
      <div class="table-wrapper">
       
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              
              <th>ID</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Status</th>
              <th>Role</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="use in users" :key="use.id" :value="use.id">
              
              <td>{{use.id}}</td>
              <td>{{ use.nom }}</td>
              <td>{{ use.prenom }}</td>
              <td>
                <span v-if="use.status=='active'" class="status text-success">&bull;</span>
                <span v-if="use.status=='blocked'" class="status text-danger">&bull;</span>{{ use.status }}
              </td>
              <td>{{ use.role }}</td>
             
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
      users:[],
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
     this.axios.get("http://127.0.0.1:8000/api/users5").then((res) => {
      this.users = res.data.users;
      // console.log(this.regions);
    });
    this.axios
      .get("http://127.0.0.1:8000/api/offres")
      .then((response) => {
        this.offres = response.data.offres;
      })
      .catch((error) => {
        console.log(error);
      });
    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
      // console.log(this.regions);
    });
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
      //   console.log(this.categories);
    });
  }
};
</script>
<!--<style lang="scss" src="@/assets/scss/material-dashboard.scss"></style>-->