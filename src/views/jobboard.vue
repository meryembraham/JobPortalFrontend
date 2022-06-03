<template>
  <div>
    <header>
      <navbar />
    </header>
    <!-- header-end -->

    <!-- slider_area_start -->
    <div class="slider_area">
      <div class="single_slider d-flex align-items-center slider_bg_1">
        <div class="container">
          <div
            class="row align-items-center"
            style="    width: 100%;
}"
          >
            <div class="col-lg-7 col-md-6">
              <div class="slider_text">
                <h5
                  class="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  +100 Offres d'emploi
                </h5>
                <h3
                  class="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  Find your Dream Job
                </h3>
                <p
                  class="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                  style="text-align: center;"
                >
                  Notre plateforme vous offre plus de chances à décrocher le
                  Travail qui correspond le mieux à votre profil
                </p>
                <div
                  class="sldier_btn wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  <a v-if="!currentUser" href="/login" class="boxed-btn3"
                    >Créer votre CV</a
                  >
                  <a
                    v-if="currentUserCandidat"
                    href="/candidat/profile"
                    class="boxed-btn3"
                    >Créer votre CV</a
                  >
                  <a
                    v-if="currentUserEntreprise"
                    href="/entreprise/offre"
                    class="boxed-btn3"
                    >Publier une offre</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ilstration_img wow fadeInRight d-none d-lg-block text-right"
        data-wow-duration="1s"
        data-wow-delay=".2s"
      >
        <img src="../assets/illustration.png" alt="" />
      </div>
    </div>
    <!-- slider_area_end -->

    <!-- catagory_area -->
    <div class="catagory_area" style="padding: 81px 0">
      <div class="container" style="display: inline-block">
        <div class="row cat_search">
          <div class="col-lg-3 col-md-4">
            <div class="single_input">
              <input
                v-model="form.motcle"
                type="text"
                placeholder="Mots Clés"
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="single_input">
              <select
                v-model="form.region_id"
                class="wide nice-select"
                style="
                  width: 100%;
                  height: 50px;
                  line-height: 50px;
                  color: #7a838b;
                  font-size: 16px;
                "
              >
                <option :value="undefined" disabled>Region</option>
                <option
                  data-display="Location"
                  v-for="reg in regions"
                  :key="reg.id"
                  :value="reg.id"
                >
                  {{ reg.nom }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="single_input">
              <select class="wide nice-select" v-model="form.secteur_id">
                <option :value="undefined" disabled>Secteur d'activité</option>
                <option v-for="sec in secteurs" :key="sec.id" :value="sec.id">
                  {{ sec.nom }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <div class="job_btn">
              <a v-on:click="appendQueryToUrl()" class="boxed-btn3"
                >Trouver une offre</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--/ catagory_area -->

    <!-- popular_catagory_area_start  -->
    <div class="popular_catagory_area" style="padding: 0">
      <div class="container" style="display: block">
        <div class="row">
          <div class="col-lg-12">
            <div class="section_title mb-40">
              <h3>Parcourir les offres d'emploi par Secteur d'activilté</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-xl-3 col-md-6"
            v-for="sec in secteurs"
            :key="sec.id"
            :value="sec.id"
          >
            <div class="single_catagory">
              <a :href="`/offresBySecteur/` + sec.id"
                ><h4>{{ sec.nom }}</h4></a
              >
              <p><span></span> Available position</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- popular_catagory_area_end  -->

    <!-- job_listing_area_start  -->
    <div class="job_listing_area">
      <div class="container" style="display: block">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="section_title">
              <h3>Dernières Offres d'emploi</h3>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="brouse_job text-right">
              <a href="/offres" class="boxed-btn4">Voir Toutes les offres</a>
            </div>
          </div>
        </div>
        <div class="job_lists">
          <div class="row">
            <div
              class="col-lg-12 col-md-12"
              v-for="off in offres"
              :key="off.id"
              :value="off.id"
            >
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img src="../assets/svg_icon/1.svg" alt="" />
                  </div>
                  <div class="jobs_conetent">
                    <a :href="`/detailsOffre/` + off.id"
                      ><h4 style="text-align: initial">{{ off.titre }}</h4></a
                    >
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p>
                          <i class="fa fa-map-marker"></i> {{ off.region.nom }}
                        </p>
                      </div>
                      <div class="location">
                        <p><i class="fa fa-clock-o"></i> {{ off.rythme }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a class="heart_mark" href="#">
                      <i class="ti-heart"></i>
                    </a>
                    <a :href="`/detailsOffre/` + off.id" class="boxed-btn3">Postuler</a>
                  </div>
                  <div class="date">
                    <p>Date line: 31 Jan 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="col-lg-12 col-md-12">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img src="../assets/svg_icon/2.svg" alt="" />
                  </div>
                  <div class="jobs_conetent">
                    <a href="job_details.html"><h4>Digital Marketer</h4></a>
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p><i class="fa fa-map-marker"></i> California, USA</p>
                      </div>
                      <div class="location">
                        <p><i class="fa fa-clock-o"></i> Part-time</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a class="heart_mark" href="#">
                      <i class="ti-heart"></i>
                    </a>
                    <a href="job_details.html" class="boxed-btn3">Postuler</a>
                  </div>
                  <div class="date">
                    <p>Date line: 31 Jan 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img src="../assets/svg_icon/3.svg" alt="" />
                  </div>
                  <div class="jobs_conetent">
                    <a href="job_details.html"><h4>Wordpress Developer</h4></a>
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p><i class="fa fa-map-marker"></i> California, USA</p>
                      </div>
                      <div class="location">
                        <p><i class="fa fa-clock-o"></i> Part-time</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a class="heart_mark" href="#">
                      <i class="ti-heart"></i>
                    </a>
                    <a href="job_details.html" class="boxed-btn3">Postuler</a>
                  </div>
                  <div class="date">
                    <p>Date line: 31 Jan 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img src="../assets/svg_icon/4.svg" alt="" />
                  </div>
                  <div class="jobs_conetent">
                    <a href="job_details.html"><h4>Visual Designer</h4></a>
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p><i class="fa fa-map-marker"></i> California, USA</p>
                      </div>
                      <div class="location">
                        <p><i class="fa fa-clock-o"></i> Part-time</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a class="heart_mark" href="#">
                      <i class="ti-heart"></i>
                    </a>
                    <a href="job_details.html" class="boxed-btn3">Postuler</a>
                  </div>
                  <div class="date">
                    <p>Date line: 31 Jan 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img src="../assets/svg_icon/5.svg" alt="" />
                  </div>
                  <div class="jobs_conetent">
                    <a href="#"><h4>Software Engineer</h4></a>
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p><i class="fa fa-map-marker"></i> California, USA</p>
                      </div>
                      <div class="location">
                        <p><i class="fa fa-clock-o"></i> Part-time</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a class="heart_mark" href="#">
                      <i class="ti-heart"></i>
                    </a>
                    <a href="job_details.html" class="boxed-btn3">Postuler</a>
                  </div>
                  <div class="date">
                    <p>Date line: 31 Jan 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img src="../assets/svg_icon/1.svg" alt="" />
                  </div>
                  <div class="jobs_conetent">
                    <a href="job_details.html"><h4>Creative Designer</h4></a>
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p><i class="fa fa-map-marker"></i> California, USA</p>
                      </div>
                      <div class="location">
                        <p><i class="fa fa-clock-o"></i> Part-time</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a class="heart_mark" href="#">
                      <i class="ti-heart"></i>
                    </a>
                    <a href="job_details.html" class="boxed-btn3">Postuler</a>
                  </div>
                  <div class="date">
                    <p>Date line: 31 Jan 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!- job_listing_area_end  -->
    <div class="top_companies_area">
      <div class="container" style="display: block">
        <div class="row align-items-center mb-40">
          <div class="col-lg-6 col-md-6">
            <div class="section_title">
              <h3>Entreprises à la une</h3>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="brouse_job text-right">
              <a href="/entreprises" class="boxed-btn4"
                >Voir Toutes les entreprises</a
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-xl-3 col-md-6"
            v-for="ent in entreprises"
            :key="ent.id"
            :value="ent.id"
          >
            <div class="single_company">
              <div class="thumb" style="display: contents">
                <img src="../assets/svg_icon/5.svg" alt="" />
              </div>
              <a :href="`/detailsentreprise/` + ent.id"
                ><h3>{{ ent.nom_entreprise }}</h3></a
              >
              <p><span>50</span> Available position</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- job_searcing_wrap  -->
    <div class="job_searcing_wrap overlay">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-lg-1 col-md-6">
            <div class="searching_text">
              <h3>Vous recherchez une offre d'emploi?</h3>
              <p>We provide online instant cash loans with quick approval</p>
              <a href="#" class="boxed-btn3">Rechercher une offre</a>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-6">
            <div class="searching_text">
              <h3>Vous rechercher des employées?</h3>
              <p>We provide online instant cash loans with quick approval</p>
              <a href="#" class="boxed-btn3">Publier une offre</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- job_searcing_wrap end  -->

    <!-- testimonial_area  -->

    <!-- /testimonial_area  -->

    <!-- footer start -->
    <footer class="footer">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div
                class="footer_widget wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div class="footer_logo">
                  <a href="#">
                    <img src="../assets/logo.png" alt="" />
                  </a>
                </div>
                <p>
                  finloan@support.com <br />
                  +10 873 672 6782 <br />
                  600/D, Green road, NewYork
                </p>
                <div class="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 col-lg-2">
              <div
                class="footer_widget wow fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".4s"
              >
                <h3 class="footer_title">Company</h3>
                <ul>
                  <li><a href="#">About </a></li>
                  <li><a href="#"> Pricing</a></li>
                  <li><a href="#">Carrier Tips</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div
                class="footer_widget wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-delay=".5s"
              >
                <h3 class="footer_title">Secteur</h3>
                <ul>
                  <li><a href="#">Design & Art</a></li>
                  <li><a href="#">Engineering</a></li>
                  <li><a href="#">Sales & Marketing</a></li>
                  <li><a href="#">Finance</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-lg-4">
              <div
                class="footer_widget wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay=".6s"
              >
                <h3 class="footer_title">Subscribe</h3>
                <form action="#" class="newsletter_form">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit">Subscribe</button>
                </form>
                <p class="newsletter_text">
                  Esteem spirit temper too say adieus who direct esteem esteems
                  luckily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="copy-right_text wow fadeInUp"
        data-wow-duration="1.4s"
        data-wow-delay=".3s"
      >
        <div class="container">
          <div class="footer_border"></div>
          <div class="row">
            <div class="col-xl-12">
              <p class="copy_right text-center"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      secteurs: [],
      regions: [],
      offres: [],
      entreprises: [],
      user: {},
      form: {},
    };
  },
  methods: {
    appendQueryToUrl() {
      this.$router.push({
        path: "/offres/",
        query: {
          secteur_id: this.form.secteur_id,
          region_id: this.form.region_id,
          motcle: this.form.motcle,
        },
      });
    },
  },
  components: {
    Navbar,
  },
  computed: {
    currentUser() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return this.user;
    },
    currentUserEntreprise() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return this.user && this.user.role == "entreprise";
    },
    currentUserCandidat() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      //console.log( JSON.parse(localStorage.getItem("user.role")));
      return this.user && this.user.role == "candidat";
    },

    total: function () {
      return this.offres.length;
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.axios.get("http://127.0.0.1:8000/api/secteurs8").then((res) => {
      this.secteurs = res.data.secteurs;
    });
    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
    });
    this.axios.get("http://127.0.0.1:8000/api/entreprises").then((res) => {
      this.entreprises = res.data.entreprises;
    });
    this.axios.get("http://127.0.0.1:8000/api/offres").then((res) => {
      this.offres = res.data.offres;
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap");
/* line 1, ../../Arafath/CL/December/235. Job board/HTML/scss/_extend.scss */
@import "@/assets/Css/jobboardCSS.css";
</style>
