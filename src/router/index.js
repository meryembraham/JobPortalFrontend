import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
/*******
 * *** authentification
 */
import Register from "@/views/LoginRegister/Register.vue";
import Login from "@/views/LoginRegister/Login.vue";
import register2 from "@/views/LoginRegister/register2";

/*******
 * *** company
 */

import CompanyDashboardLayout from "@/pages/Company/CompanyDashboardLayout.vue";
import CompanyDashboard from "@/pages/Company/CompanyDashboard.vue";
import CompanyProfile from "@/pages/Company/CompanyProfile.vue";
import CompanyDetails from "@/views/CompanyDetails";
import Candidatures from "@/pages/Company/Candidatures";
import Offre from "../components/Offres/Offre";

/*******
 * *** candidate
 */

import Profile from "@/pages/Candidate/Profile";
import CandidateDetails from "@/pages/Candidate/CandidateDetails";

/*******
 * *** Admin
 */

import AdminDashboardLayout from "@/pages/Admin/AdminDashboardLayout.vue";
import Users from "@/pages/Admin/Users";
import Offres from "@/pages/Admin/Offres";
import AdminDashboard from "@/pages/Admin/AdminDashboard.vue";
import AdminProfile from "@/pages/Admin/AdminProfile.vue";

import messages from "@/pages/messages.vue";
/*******
 * *** Home
 */

import joblisting from "@/views/Offres/detailsOffre.vue";
import jobboard from "@/views/jobboard.vue";
import candidate from "@/views/candidate.vue";
import company from "@/views/company.vue";
import Jobs from "@/views/Jobs.vue";
import detailsOffre from "@/views/Offres/detailsOffre";
import OffresBySecteur from "@/components/Offres/OffresBySecteur";
import Secteurs from "@/views/Secteurs";

import * as auth from "../service/auth";
Vue.use(VueRouter);
const routes = [
  {
    path: "/register",
    //name: "Register",
    component: Register,
    meta: { guest: true },
  },

  {
    path: "/",

    component: jobboard,
  },

  {
    path: "/candidatdetails",

    component: CandidateDetails,
  },
  {
    path: "/companydetails",

    component: CompanyDetails,
  },
  {
    path: "/register2",

    component: register2,
    meta: { guest: true },
  },
  {
    path: "/login",
    //name: "login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/users",
    //name: "login",
    component: Users,
    meta: { guest: true },
  },
  {
    path: "/jobboard",
    //name: "jobboard",
    component: jobboard,
    meta: { guest: true },
  },
  {
    path: "/candidats",
    //name: "candidate",
    component: candidate,
    meta: { guest: true },
  },
  {
    path: "/offres",
    //name: "jobs",
    component: Jobs,
    meta: { guest: true },
  },
  {
    path: "/jobdetails",

    component: joblisting,
    meta: { guest: true },
  },
  {
    path: "/entreprises",

    component: company,
    meta: { guest: true },
  },

  /******
   * * entreprise
   */
  {
    path: "/entreprise",
    component: CompanyDashboardLayout,
    redirect: "/entreprise/dashboard",
    children: [
      {
        path: "/entreprise/dashboard",
        component: CompanyDashboard,
      },
      {
        path: "/entreprise/profile",
        component: CompanyProfile,
      },

      {
        path: "/entreprise/offre",
        component: Offre,
      },
      {
        path: "/entreprise/candidatures",
        component: Candidatures,
      },
      {
        path: "/entreprise/messages",
        //name: "messages",
        component: messages,
      },
    ],
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedEntreprise()) {
        next("/login");
      } else {
        next();
      }
    },
  },
  /******
   * * candidat
   */

  /****
   * **** Admin
   */
  {
    path: "/admin",
    component: AdminDashboardLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "/admin/dashboard",
        component: AdminDashboard,
      },
      {
        path: "/admin/profile",
        component: AdminProfile,
      },
      {
        path: "/admin/users",
        component: Users,
      },
      {
        path: "/admin/offres",
        component: Offres,
      },
      {
        path: "/admin/messages",
        //name: "messages",
        component: messages,
      },
    ],
  },
  {
    path: "/candidat/profile",
    //name: "Table List",
    component: Profile,
  },
  {
    path: "/offres",
    //name: "Table List",
    component: Jobs,
  },
  {
    path: "/offres-:afterOffres(.*)",
    //name: "Table List",
    component: Jobs,
  },

  {
    path: "/secteurs",
    //name: "Table List",
    component: Secteurs,
  },
  {
    path: "/OffresBySecteur/:id",
    component: OffresBySecteur,
  },
  {
    path: "/detailsOffre/:id",
    component: detailsOffre,
  },
  {
    path: "/detailsentreprise/:id",
    component: CompanyDetails,
  },
  {
    path: "/detailsCandidat/:id",
    component: CandidateDetails,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
