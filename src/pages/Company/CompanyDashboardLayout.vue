<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar

     
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/jobboard">
        <md-icon>acceuil</md-icon>
        <p style="    color: #fff;">Accueil</p>
      </sidebar-link>
      <sidebar-link to="/entreprise/dashboard">
        <md-icon>dashboard</md-icon>
        <p style="    color: #fff;">Dashboard</p>
      </sidebar-link>
      
      <sidebar-link to="/entreprise/profile">
        <md-icon>person</md-icon>
        <p style="    color: #fff;" >Personnaliser</p>
      </sidebar-link>
      <sidebar-link  to="/entreprise/offre">
        <md-icon>content_paste</md-icon>
        <p style="    color: #fff;">Offres d'emploi</p>
      </sidebar-link>
       <sidebar-link  to="/entreprise/candidatures">
        <md-icon>content_paste</md-icon>
        <p style="    color: #fff;">Candidatures</p>
      </sidebar-link>
    
    
   
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      
    </div>
  </div>
</template>

<script>
import TopNavbar from "../Layout/TopNavbar.vue";

import DashboardContent from "../Layout/Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";


export default {
  components: {
    TopNavbar,
    DashboardContent,
       MobileMenu,
  
  },
  data() {
    return {
      user: {},
     
    
    };
  },
  created(){
    const token = JSON.parse(localStorage.getItem("token"));
    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    this.user = JSON.parse(localStorage.getItem("user"));
  }
};
</script>
<!--<style lang="scss" src="../../assets/scss/material-dashboard.scss" ></style>