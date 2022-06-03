<template>
  <div>
    <header>
      <navbar />
    </header>
    <div class="bradcam_area bradcam_bg_1">
      <div class="container" style="display: inline-block;">
        <div class="row">
          <div class="col-xl-12">
            <div class="bradcam_text">
              <h3>Offres Par Secteur</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
 <div class="job_listing_area plus_padding">
      <div class="container"  style="display: inline-block;" >
        <div class="row">
<div class="col-lg-12">
            <div class="recent_joblist_wrap">
              <div class="recent_joblist white-bg">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <h4>Liste des offres</h4>
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
                        <img src="@/assets/svg_icon/1.svg" alt="" />
                      </div>
                      <div class="jobs_conetent">
                        <a href="" style="text-align: left"
                          ><router-link to="/jobdetails"
                            ><h4>{{ off.titre }}</h4></router-link
                          ></a
                        >
                        <div class="links_locat d-flex align-items-center">
                          <div class="location">
                            <p>
                              <i class="fa fa-map-marker"></i>{{off.region_id}}
                            </p>
                          </div>
                          <div class="location">
                            <p><i  class="fa">&#xf017;</i> {{off.rythme}}</p>
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
                    <img src="@/assets/logo.png" alt="" />
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
import Navbar from "@/components/Navbar.vue"
export default {
  data() {
    return {
      offres: [],
      nbr_offres: "",
    };
  },
  components: {
    Navbar,
  },
  created() {
    this.axios
      .get(
        "http://127.0.0.1:8000/api/secteur/" + this.$route.params.id
      )
      .then((res) => {
        this.offres = res.data.offres;
        this.nbr_offres = res.data.nbr_offres;
        console.log(this.nbr_offres);
      });
  },
};
</script>
