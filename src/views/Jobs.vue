<template>
  <div>
    <header>
      <navbar />
    </header>
    <!-- header-end -->

    <!-- bradcam_area  -->
    <div class="bradcam_area bradcam_bg_1">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="bradcam_text">
              <h3>{{ total }} Offres Disponibles</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ bradcam_area  -->

    <!-- job_listing_area_start  -->
    <div class="job_listing_area plus_padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="job_filter white-bg">
              <div class="form_inner white-bg">
                <h3>Filtrer</h3>
                <form action="#">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="single_field">
                        <input
                          v-model="form.motcle"
                          type="text"
                          placeholder="Mots Clés"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="single_field">
                        <select
                          v-model="form.region_id"
                          class="wide nice-select"
                        >
                          <option :value="undefined" disabled>Région</option>
                          <option
                            v-for="reg in regions"
                            :key="reg.id"
                            :value="reg.id"
                          >
                            {{ reg.nom }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="single_field">
                        <select
                          v-model="form.secteur_id"
                          class="wide nice-select"
                        >
                          <option :value="undefined" disabled>Secteur</option>
                          <option
                            v-for="sec in secteurs"
                            :key="sec.id"
                            :value="sec.id"
                          >
                            {{ sec.nom }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="single_field">
                        <select
                          v-model="form.experience"
                          class="wide nice-select"
                        >
                          <option :value="undefined" disabled>
                            Expérience
                          </option>
                          <option value="0">0</option>
                          <option value="1">+ de 1 an</option>
                          <option value="2">+ de 2 ans</option>
                          <option value="3">+ de 3 ans</option>
                          <option value="5">+ de 5 ans</option>
                          <option value="10">+ de 10 ans</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="single_field">
                        <select v-model="form.rythme" class="wide nice-select">
                          <option :value="undefined" disabled>
                            Rythme de travail
                          </option>
                          <option value="temps plein">Temps plein</option>
                          <option value="temps partiel">Temps partiel</option>
                          <option value="alternance">Alternance</option>
                          <option value="saisonnier">Saisonnier</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="single_field">
                        <select
                          v-model="form.type_contrat"
                          class="wide nice-select"
                        >
                          <option :value="undefined" disabled>
                            Type de contrat
                          </option>
                          <option value="cdi">CDI</option>
                          <option value="cdd">CDD</option>
                          <option value="svip">SIVP</option>
                          <option value="karama">KARAMA</option>
                          <option value="karama">stage</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="reset_btn">
                <button
                  v-if="search_check()"
                  id="recherche-btn"
                  v-on:click="appendQueryToUrl()"
                  class="boxed-btn3 w-100"
                >
                  Reset
                </button>
                <button
                  v-else
                  id="recherche-btn"
                  v-on:click="appendQueryToUrl()"
                  class="boxed-btn3 w-100"
                >
                  Rechercher
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="recent_joblist_wrap">
              <div class="recent_joblist white-bg">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <h4>Liste des offres</h4>
                  </div>
                  <div class="col-md-6">
                    <div class="serch_cat d-flex justify-content-end">
                      <select>
                        <option data-display="Most Recent">
                          Derniéres Offres
                        </option>
                        <option value="1">Marketer</option>
                        <option value="2">Wordpress</option>
                        <option value="4">Designer</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="job_lists m-0">
              <div class="row">
                <div
                  class="col-lg-12 col-md-12"
                  v-for="off in offres"
                  :key="off.id"
                  :value="off.id"
                >
                  <div
                    class="single_jobs white-bg d-flex justify-content-between"
                  >
                    <div class="jobs_left d-flex align-items-center">
                      <div class="thumb">
                        <img src="../assets/svg_icon/1.svg" alt="" />
                      </div>
                      <div class="jobs_conetent">
                        <a
                          :href="`/detailsOffre/` + off.id"
                          style="text-align: left"
                          ><h4>{{ off.titre }}</h4></a
                        >
                        <div class="links_locat d-flex align-items-center">
                          <div class="location">
                            <p>
                              <i class="fa fa-map-marker"></i
                              >{{ off.region.nom }}
                            </p>
                          </div>
                          <div class="location">
                            <p><i class="fa">&#xf017;</i> {{ off.rythme }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="jobs_right">
                      <div class="apply_now">
                        <a class="heart_mark" href="#">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a :href="`/detailsOffre/` + off.id" class="boxed-btn3"
                          >Postuler</a
                        >
                      </div>
                      <div class="date">
                        <p>Date Début: 31-03-2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- job_listing_area_end  -->

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
                <h3 class="footer_title">Category</h3>
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
  components: { Navbar },
  data() {
    return {
      regions: [],
      offres: [],
      secteurs: [],
      secteur_id: "",
      region_id: "",
      form: {},
    };
  },
  methods: {
    search_check() {
      return (
        this.region_id ||
        this.secteur_id ||
        this.motcle ||
        this.experience ||
        this.rythme ||
        this.type_contrat
      );
    },
    appendQueryToUrl() {
      this.$router.push({
        path: "/offres/",
        query: {
          secteur_id: this.form.secteur_id,
          region_id: this.form.region_id,
          motcle: this.form.motcle,
          experience: this.form.experience,
          rythme: this.form.rythme,
          type_contrat: this.form.type_contrat,
        },
      });
      this.$router.go();
    },
  },
  computed: {
    total: function () {
      return this.offres.length;
    },
  },

  created() {
    // console.log("routes",window.location.href)
    //   console.log("query", this.$route.query);
    this.region_id = this.$route.query.region_id;
    this.secteur_id = this.$route.query.secteur_id;
    this.motcle = this.$route.query.motcle;
    this.experience = this.$route.query.experience;
    this.rythme = this.$route.query.rythme;
    this.type_contrat = this.$route.query.type_contrat;

    if (
      this.region_id ||
      this.secteur_id ||
      this.motcle ||
      this.experience ||
      this.rythme ||
      this.type_contrat
    ) {
      
      this.axios
        .post(
          "http://127.0.0.1:8000/api/searchO",
          JSON.stringify({
            region_id: this.region_id,
            secteur_id: this.secteur_id,
            "mot-cle": this.motcle,
            experience: this.experience,
            rythme: this.rythme,
            type_contrat: this.type_contrat,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.offres = res.data.offres.data;
          console.log(this.offres);
          //    console.log(this.region_id);
          // if (this.region_id) {
          //   this.offres = listoffres.filter(
          //     (off) => off.region_id == this.region_id
          //   );
          // } else if (this.secteur_id) {
          //   this.offres = listoffres.filter(
          //     (off) => off.secteur_id == this.secteur_id
          //   );
          // }else {
          //   this.offres= listoffres
          // }
        });
    } else {
      this.axios.get("http://127.0.0.1:8000/api/offres").then((res) => {
        this.offres = res.data.offres;
        //console.log(this.offres);
      });
    }

    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
      //   console.log(this.regions);
    });
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
      //   console.log(this.secteurs);
    });
  },
};
</script>

<style scoped>
h4 {
  color: black;
}
.job_listing_area .job_filter {
  padding: 25px;
  display: block;
}
.job_listing_area .job_filter h3 {
  font-size: 20px;
  margin-bottom: 25px;
  color: #001d38;
  font-weight: 400;
}
.job_listing_area .job_filter .form_inner .single_field .nice-select {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #7a838b;
  font-size: 16px;
  margin-bottom: 15px;
}
.job_listing_area .job_filter .form_inner .single_field input {
  height: 60px;
  border: 1px solid #e8e8e8;
  padding: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
}
.job_listing_area .job_filter .form_inner .single_field .nice-select {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #7a838b;
  font-size: 16px;
  margin-bottom: 15px;
}
.job_listing_area .job_filter .form_inner .single_field .nice-select {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #7a838b;
  font-size: 16px;
  margin-bottom: 15px;
}
.nice-select {
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #e8e8e8;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  display: block;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  height: 42px;
  line-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  transition: all 0.2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
}
li {
  list-style: none;
}
a,
button {
  color: #1f1f1f;
  outline: medium none;
  text-decoration: none;
}
</style>
