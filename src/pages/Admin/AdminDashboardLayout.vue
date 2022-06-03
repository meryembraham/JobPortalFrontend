<template>

  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar

     
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/jobboard">
        <md-icon>accueil</md-icon>
        <p style="    color: #fff;">Acceuil</p>
      </sidebar-link>
      <sidebar-link to="/admin/dashboard">
        <md-icon>dashboard</md-icon>
        <p style="    color: #fff;">Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/profile">
        <md-icon>person</md-icon>
        <p style="    color: #fff;">Personnaliser</p>
      </sidebar-link>
       <sidebar-link to="/admin/users">
        <md-icon>person</md-icon>
        <p style="    color: #fff;">users</p>
      </sidebar-link>

      <sidebar-link to="/admin/offres">
        <md-icon>library_books</md-icon>
        <p style="    color: #fff;">Offres</p>
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
import Navbar from '@/components/Navbar.vue';


export default {
  components: {
    TopNavbar,
    DashboardContent,
       MobileMenu,
    Navbar,
  
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
