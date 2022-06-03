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
              <h3>Entreprises</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ bradcam_area  -->

    <!-- featured_candidates_area_start  -->
    <div class="top_companies_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="cand_filter white-bg">
              <div class="form_inner white-bg">
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
                  </div>
                </form>
              </div>

              <div class="reset_btn">
                <button
                  v-if="search_check()"
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
          <div
            class="col-lg-4 col-xl-3 col-md-6"
            v-for="ent in entreprises"
            :key="ent.id"
            :value="ent.id"
          >
            <div class="single_company">
              <div class="thumb" style="margin: auto">
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
      entreprises: [],
      regions: [],
      secteurs: [],
      form: {},
    };
  },
  methods: {
    search_check() {
      return this.region_id || this.secteur_id || this.motcle;
    },
    appendQueryToUrl() {
      this.$router.push({
        path: "/entreprises/",
        query: {
          secteur_id: this.form.secteur_id,
          region_id: this.form.region_id,
          motcle: this.form.motcle,
        },
      });
      this.$router.go();
    },
  },
  created() {
    this.region_id = this.$route.query.region_id;
    this.secteur_id = this.$route.query.secteur_id;
    this.motcle = this.$route.query.motcle;

    if (this.region_id || this.secteur_id || this.motcle) {
      this.axios
        .post(
          "http://127.0.0.1:8000/api/searchE",
          JSON.stringify({
            region_id: this.region_id,
            secteur_id: this.secteur_id,
            "mot-cle": this.motcle,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.entreprises = res.data.entreprises.data;
          console.log(this.entreprises);
        });
    } else {
      this.axios.get("http://127.0.0.1:8000/api/entreprises").then((res) => {
        this.entreprises = res.data.entreprises;
      });
    }
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
    });
    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
    });
  },
};
</script>

<style scoped>
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
</style>
