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
              <h3>Candidats</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ bradcam_area  -->

    <!-- featured_candidates_area_start  -->
    <div class="container bootdey mt-3">
      <div class="row">
        <div class="col-lg-3">
          <div class="cand_filter white-bg">
            <div class="form_inner white-bg">
              <form action="#">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="single_field">
                      <select class="wide nice-select" v-model="form.region_id">
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
                        class="wide nice-select"
                        v-model="form.secteur_id"
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
                        class="wide nice-select"
                        v-model="form.experience"
                      >
                        <option :value="undefined" disabled>Expérience</option>
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
                      <select class="wide nice-select" v-model="form.niveau">
                        <option :value="undefined" disabled>Niveau</option>
                        <option value="0">Etudiant</option>
                        <option value="1">Débutant</option>
                        <option value="2">Avec Expérience (Non-Manager)</option>
                        <option value="3">Responsable (Manager)</option>
                        <option value="4">
                          Je suis au chômage et je cherche un travail
                        </option>
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
        <div class="col-md-9">
          <div class="row">
            <div
              class="col-md-4 col-lg-4"
              v-for="cand in condidats"
              :key="cand.id"
              :value="cand.id"
            >
              <div class="card hover-shadow">
                <div class="flexbox align-items-center px-20 pt-20">
                  <div class="dropdown">
                    <a data-toggle="dropdown" href="#" aria-expanded="false"
                      ><i class="ti-more-alt rotate-90 text-muted"></i
                    ></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"
                        ><i class="fa fa-fw fa-user"></i> Profile</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="fa fa-fw fa-comments"></i> Messages</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="fa fa-fw fa-phone"></i> Call</a
                      >
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"
                        ><i class="fa fa-fw fa-download"></i> Download Resume</a
                      >
                    </div>
                  </div>
                </div>

                <div class="card-body text-center pt-1 pb-20">
                  <a :href="`/detailsCandidat/` + cand.id">
                    <img
                      class="avatar avatar-xxl"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                  </a>
                  <h5 class="mt-2 mb-0">
                    <a
                      class="hover-primary"
                      :href="`/detailsCandidat/` + cand.id"
                      >{{ cand.user.nom }}</a
                    >
                  </h5>
                  <span>{{ cand.user.prenom }}</span>
                </div>

                <footer class="card-footer flexbox">
                  <div>
                    <i class="fa fa-map-marker pr-1 mx-2"></i>
                    <span>{{ cand.region.nom }}</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- featured_candidates_area_end  -->

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
      condidats: [],
      regions: [],
      secteurs: [],
      secteur_id: "",
      region_id: "",
      form: {},
    };
  },
  created() {
    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
      // console.log(this.data.regions);
    });
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
      // console.log(this.data.regions);
    });
    this.region_id = this.$route.query.region_id;
    this.secteur_id = this.$route.query.secteur_id;

    this.experience = this.$route.query.experience;
    this.niveau = this.$route.query.niveau;

    if (this.region_id || this.secteur_id || this.experience || this.niveau) {
      this.axios
        .post(
          "http://127.0.0.1:8000/api/searchC",
          JSON.stringify({
            region_id: this.region_id,
            secteur_id: this.secteur_id,
            experience: this.experience,
            niveau: this.niveau,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.condidats = res.data.condidats.data;
          console.log(this.condidats);
        });
    } else {
      this.axios.get("http://127.0.0.1:8000/api/condidats").then((res) => {
        this.condidats = res.data.condidats;
        //console.log(this.offres);
      });
    }
  },
  methods: {
    search_check() {
      return (
        this.region_id || this.secteur_id || this.experience || this.niveau
      );
    },
    appendQueryToUrl() {
      this.$router.push({
        path: "/candidats/",
        query: {
          secteur_id: this.form.secteur_id,
          region_id: this.form.region_id,
          experience: this.form.experience,
          niveau: this.form.niveau,
        },
      });
      this.$router.go();
    },
  },
};
</script>

<style scoped>
body {
  background: #fcfcfc;
}
.pr-12 {
  padding-right: 12px !important;
}

.mb-20 {
  margin-bottom: 20px !important;
}

.b-1 {
  border: 1px solid #ebebeb !important;
}

.card {
  border: 0;
  border-radius: 0;
  margin-bottom: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.media {
  padding: 16px 12px;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}

.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.media .avatar {
  flex-shrink: 0;
}

.no-radius {
  border-radius: 0 !important;
}

.avatar-xl {
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 1.25rem;
}

.avatar {
  position: relative;
  display: inline-block;
  width: 66px;
  height: 66px;
  line-height: 36px;
  text-align: center;
  border-radius: 100%;
  background-color: #f5f6f7;
  color: #8b95a5;
  text-transform: uppercase;
  margin-top: 20px;
}

img {
  max-width: 100%;
}

img {
  vertical-align: middle;
  border-style: none;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.fs-20 {
  font-size: 20px !important;
}

.pr-16 {
  padding-right: 16px !important;
}

.ls-1 {
  letter-spacing: 1px !important;
}

.fw-300 {
  font-weight: 300 !important;
}

.fs-16 {
  font-size: 16px !important;
}

.media-body > * {
  margin-bottom: 0;
}

small,
time,
.small {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #8b95a5;
}

.fs-14 {
  font-size: 14px !important;
}

.mb-12 {
  margin-bottom: 12px !important;
}

.text-fade {
  color: rgba(77, 82, 89, 0.7) !important;
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-footer {
  background-color: #fcfdfe;
  border-top: 1px solid rgba(77, 82, 89, 0.07);
  color: #8b95a5;
  padding: 10px 20px;
}

.flexbox {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.card-footer {
  background-color: #fcfdfe;
  border-top: 1px solid rgba(77, 82, 89, 0.07);
  color: #8b95a5;
  padding: 10px 20px;
}

.card-footer > *:last-child {
  margin-bottom: 0;
}

.hover-shadow {
  -webkit-box-shadow: 0 0 35px rgba(0, 0, 0, 0.11);
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.11);
}

.fs-10 {
  font-size: 10px !important;
}
h5 span {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #8b95a5;
}

h5 span {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #8b95a5;
}
h5 span {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #8b95a5;
}
h5 a {
  color: #8b95a5;
}
.cand_filter {
  padding: 25px;
  display: block;
}
.cand_filter h3 {
  font-size: 20px;
  margin-bottom: 25px;
  color: #001d38;
  font-weight: 400;
}
.cand_filter .form_inner .single_field .nice-select {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #7a838b;
  font-size: 16px;
  margin-bottom: 15px;
}
.cand_filter .form_inner .single_field input {
  height: 60px;
  border: 1px solid #e8e8e8;
  padding: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
}
.cand_filter .form_inner .single_field .nice-select {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #7a838b;
  font-size: 16px;
  margin-bottom: 15px;
}
.cand_filter .form_inner .single_field .nice-select {
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
/* line 1, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area {
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 9;
  position: absolute;
}

@media (max-width: 767px) {
  /* line 1, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area {
    padding-top: 0;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 1, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area {
    padding-top: 0;
  }
}

/* line 16, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area {
  background: #fff;
  background: transparent;
  padding: 0px 150px;
}

/* line 20, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area.details_nav_bg {
  background: #727272;
  padding-bottom: 0;
}

@media (max-width: 767px) {
  /* line 20, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area.details_nav_bg {
    padding-bottom: 10px;
  }
}

/* line 27, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area.details_nav {
  background: #001d38;
}

@media (max-width: 767px) {
  /* line 16, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area {
    padding: 10px 10px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 16, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area {
    padding: 10px 10px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 16, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area {
    padding: 0px 20px;
  }
}

@media (min-width: 1200px) and (max-width: 1500px) {
  /* line 16, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area {
    padding: 0px 20px;
  }
}

@media (min-width: 1501px) and (max-width: 1800px) {
  /* line 16, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area {
    padding: 0px 50px;
  }
}

/* line 47, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .logo-img {
  text-align: center;
}

@media (max-width: 767px) {
  /* line 47, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .logo-img {
    text-align: left;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 47, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .logo-img {
    text-align: left;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 47, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .logo-img {
    text-align: left;
  }
}

@media (max-width: 767px) {
  /* line 61, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .logo-img img {
    width: 70px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 61, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .logo-img img {
    width: 70px;
  }
}

@media (max-width: 767px) {
  /* line 73, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .logo img {
    max-width: 160px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 73, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .logo img {
    max-width: 160px;
  }
}

/* line 82, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .Appointment {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: flex-end;
  -moz-justify-content: flex-end;
  -ms-justify-content: flex-end;
  justify-content: flex-end;
  -ms-flex-pack: flex-end;
}

/* line 86, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .Appointment .phone_num {
  margin-right: 30px;
}

@media (min-width: 1200px) and (max-width: 1500px) {
  /* line 86, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .Appointment .phone_num {
    margin-right: 12px;
  }
}

/* line 91, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .Appointment .phone_num a {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
}

@media (min-width: 1200px) and (max-width: 1500px) {
  /* line 91, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .Appointment .phone_num a {
    font-size: 13px;
  }
}

/* line 98, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .Appointment .phone_num a i {
  color: #33d4d6;
  font-size: 14px;
  margin-right: 7px;
}

@media (min-width: 1200px) and (max-width: 1500px) {
  /* line 105, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .Appointment .boxed-btn4 {
    padding: 11px 9px 13px 9px;
    font-size: 13px;
  }
}

@media (min-width: 1501px) and (max-width: 1800px) {
  /* line 105, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .Appointment .boxed-btn4 {
    padding: 11px 20px 13px 20px;
    font-size: 13px;
  }
}

/* line 117, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .Appointment .socail_links ul li {
  display: inline-block;
}

/* line 120, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .Appointment .socail_links ul li a {
  color: #a8a7a0;
  margin: 0 10px;
  font-size: 15px;
}

/* line 124, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .Appointment .socail_links ul li a:hover {
  color: #fff;
}

/* line 160, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu {
  text-align: center;
}

/* line 163, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li {
  display: inline-block;
  position: relative;
  margin: 0 25px;
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 163, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .main-menu ul li {
    margin: 0 14px;
  }
}

@media (min-width: 1200px) and (max-width: 1500px) {
  /* line 163, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .main-menu ul li {
    margin: 0 14px;
  }
}

/* line 176, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li a {
  color: #fff;
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  padding: 35px 0px 35px 0px;
  font-family: "Roboto", sans-serif;
  position: relative;
  text-transform: capitalize;
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 176, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .main-menu ul li a {
    font-size: 15px;
  }
}

@media (min-width: 1200px) and (max-width: 1500px) {
  /* line 176, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .main-menu ul li a {
    font-size: 13px;
  }
}

/* line 193, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li a i {
  font-size: 9px;
}

@media (max-width: 767px) {
  /* line 193, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .main-menu ul li a i {
    display: none !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 193, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area .main-menu ul li a i {
    display: none !important;
  }
}

/* line 224, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li a:hover {
  color: #00d363;
}

/* line 228, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li .submenu {
  position: absolute;
  left: 0;
  top: 120%;
  background: #fff;
  width: 200px;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
  opacity: 0;
  visibility: hidden;
  text-align: left;
  -webkit-transition: 0.6s;
  -moz-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
}

/* line 240, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li .submenu li {
  display: block;
  margin: 0;
}

/* line 243, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li .submenu li a {
  padding: 10px 15px;
  position: inherit;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  display: block;
  color: #000;
}

/* line 249, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li .submenu li a::before {
  display: none;
}

/* line 253, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li .submenu li:hover a {
  color: #000;
}

/* line 258, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li:hover > .submenu {
  opacity: 1;
  visibility: visible;
  top: 100%;
}

/* line 263, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li:hover > a::before {
  opacity: 1;
}

/* line 267, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area .main-menu ul li:first-child a {
  padding-left: 0;
}

/* line 273, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area.sticky {
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: -70px;
  left: 0;
  right: 0;
  z-index: 990;
  transform: translateY(70px);
  transition: transform 500ms ease, background 500ms ease;
  -webkit-transition: transform 500ms ease, background 500ms ease;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  background: rgba(0, 29, 56, 0.8);
}

@media (max-width: 767px) {
  /* line 273, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .main-header-area.sticky {
    padding: 10px 10px;
  }
}

/* line 300, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area.sticky .main-menu {
  padding: 0;
}

/* line 303, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area.sticky .header_bottom_border {
  border-bottom: none;
}

/* line 306, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .main-header-area.sticky .header_bottom_border.white_border {
  border-bottom: none !important;
}

/* line 312, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .header-top_area {
  background: #001d38;
}

@media (max-width: 767px) {
  /* line 314, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .header-top_area .social_media_links {
    text-align: center;
  }
}

/* line 318, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .header-top_area .social_media_links a {
  font-size: 15px;
  color: #c7c7c7;
  margin-right: 12px;
}

/* line 322, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .header-top_area .social_media_links a:hover {
  color: #00d363;
}

/* line 328, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .header-top_area .header_left p {
  color: #727272;
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 0;
}

/* line 335, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .header-top_area .short_contact_list {
  text-align: right;
}

@media (max-width: 767px) {
  /* line 335, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .header-top_area .short_contact_list {
    text-align: center;
  }
}

.header-area .header-top_area .short_contact_list ul li {
  display: inline-block;
}
.header-area .header-top_area .short_contact_list ul li a {
  font-size: 13px;
  color: #919191;
  margin-right: 50px;
}

@media (max-width: 767px) {
  /* line 343, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .header-top_area .short_contact_list ul li a {
    margin-left: 0;
    margin: 0 5px;
  }
}

/* line 352, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .header-top_area .short_contact_list ul li a i {
  color: #00d363;
  margin-right: 7px;
}

/* line 360, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .header-top_area .header_right.d-flex {
  display: flex;
  justify-content: flex-end;
}

/* line 365, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
.header-area .search_btn i {
  color: #fff;
  font-size: 15px;
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 369, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .search_btn {
    position: relative;
    right: 10px;
  }
}
.catagory_area .cat_search .single_input input {
  height: 50px;
  border: 1px solid #e8e8e8;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
}

@media (min-width: 1200px) and (max-width: 1500px) {
  /* line 369, ../../Arafath/CL/December/235. Job board/HTML/scss/_header.scss */
  .header-area .search_btn {
    position: relative;
    right: 10px;
  }
}

/* line 1, ../../Arafath/CL/December/235. Job board/HTML/scss/_slider.scss */
.slider_bg_1 {
  background-image: url(../assets/banner/banner.png);
}
</style>
