<template>
  <div>
    <header>
      <navbar />
    </header>
    <div class="bradcam_area bradcam_bg_1">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="bradcam_text">
              <h3>Détails Entreprise</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card side-bar">
              <div class="card-body p-4">
                <div class="candidate-profile text-center">
                  <img
                    src="@/assets/img-01.png"
                    alt=""
                    class="avatar-lg rounded-circle"
                  />
                  <h6 class="fs-18 mb-1 mt-4" style="text-align: center">
                    {{ entreprise.nom_entreprise }}
                  </h6>
                  <p class="text-muted mb-4" style="text-align: center">
                    Depuis 2017
                  </p>
                </div>
              </div>
              <!--end candidate-profile-->

              <div
                class="candidate-profile-overview card-body border-top p-4"
                style="text-align: initial"
              >
                <h6 class="fs-17 fw-medium mb-3">Profile</h6>
                <ul class="list-unstyled mb-0">
                  <li>
                    <div class="d-flex">
                      <label class="text-dark">Propriétaire</label>
                      <div>
                        <p class="text-muted mb-0">
                          {{ entreprise.user.nom }} {{ entreprise.user.prenom }}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <label class="text-dark">Employées</label>
                      <div>
                        <p class="text-muted mb-0">1500 - 1850</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <label class="text-dark">Région</label>
                      <div>
                        <p class="text-muted mb-0">
                          {{ entreprise.region.nom }}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <label class="text-dark">Site web</label>
                      <div>
                        <p class="text-muted text-break mb-0">
                          {{ entreprise.site }}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="mt-3">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-danger btn-hover w-100"
                    ><i class="uil uil-phone" style="color: white"></i>
                    Contacter</a
                  >
                </div>
              </div>
              <!--candidate-profile-overview-->
              <!--end card-body-->
              <div class="card-body p-4 border-top">
                <h6 class="fs-17 fw-medium mb-4">Adresse</h6>
                <iframe
                  style="width: 100%"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <!--end card-->
          </div>
          <!--end col-->

          <div class="col-lg-8">
            <div class="card ms-lg-4 mt-4 mt-lg-0">
              <div class="card-body p-4">
                <div class="mb-5">
                  <h6 class="fs-17 fw-medium mb-4">Présentation</h6>
                  <p class="text-muted">
                    Objectively pursue diverse catalysts for change for
                    interoperable meta-services. Distinctively re-engineer
                    revolutionary meta-services and premium architectures.
                    Intrinsically incubate intuitive opportunities and real-time
                    potentialities. Appropriately communicate one-to-one
                    technology.
                  </p>

                  <p class="text-muted">
                    Intrinsically incubate intuitive opportunities and real-time
                    potentialities Appropriately communicate one-to-one
                    technology.
                  </p>

                  <p class="text-muted">
                    Exercitation photo booth stumptown tote bag Banksy, elit
                    small batch freegan sed. Craft beer elit seitan
                    exercitation, photo booth et 8-bit kale chips proident
                    chillwave deep v laborum. Aliquip veniam delectus, Marfa
                    eiusmod Pinterest in do umami readymade swag.
                  </p>
                </div>
                <h6 class="fs-17 fw-medium mb-4">Current Opening</h6>
                <div class="job_lists m-0">
                  <div class="job_lists m-0">
                    <div class="row">
                      <div
                        class="col-lg-12"
                        v-for="off in offres"
                        :key="off.id"
                        :value="off.id"
                      >
                        <div
                          class="single_jobs white-bg d-flex justify-content-between"
                        >
                          <div class="jobs_left d-flex align-items-center">
                            <div class="thumb" style="margin-right: 15px">
                              <img src="../assets/img-01.png" alt="" />
                            </div>
                            <div class="jobs_conetent">
                              <a :href="`/detailsOffre/` + off.id" style="text-align: left"
                                ><h4>{{ off.titre }}</h4></a
                              >
                              <div
                                class="links_locat d-flex align-items-center"
                              >
                                <div class="location">
                                  <p style="color: gray; font-size: 13px">
                                    <i class="fa fa-map-marker"></i>
                                    {{ off.region.nom }}
                                  </p>
                                </div>
                                <div class="location" style="margin-left: 15px">
                                  <p style="color: gray; font-size: 13px">
                                    <i class="fa">&#xf017;</i> {{ off.rythme }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="jobs_right">
                            <div class="apply_now">
                              <a
                                class="heart_mark"
                                href="#"
                                style="margin-right: 10px"
                              >
                                <i class="fa fa-heart"></i>
                              </a>
                              <a :href="`/detailsOffre/` + off.id" class="boxed-btn3"
                                >Postuler</a
                              >
                            </div>
                            <div class="date">
                              <p style="color: gray; font-size: 13px">
                                Date Début: 31-07-2022
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="pagination_wrap">
                          <ul>
                            <li>
                              <a href="#"> <i class="ti-angle-left"></i> </a>
                            </li>
                            <li>
                              <a href="#"><span>01</span></a>
                            </li>
                            <li>
                              <a href="#"><span>02</span></a>
                            </li>
                            <li>
                              <a href="#"> <i class="ti-angle-right"></i> </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--end job-box-->
                </div>
              </div>
              <!-- card body end -->
            </div>
            <!--end card-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      offres: [],
      entreprise: [],
    };
  },
  components: { Navbar },
  created() {
    this.axios
      .get("http://127.0.0.1:8000/api/entreprise/" + this.$route.params.id)
      .then((res) => {
        this.entreprise = res.data.entreprise[0];

        console.log(this.entreprise);
        this.axios
          .get(
            "http://127.0.0.1:8000/api/offreEntreprise/" + this.entreprise.id
          )
          .then((res) => {
            this.offres = res.data.offres;
            this.offres.forEach((off) => {
              console.log(off);
            });
            console.log(this.offres);
          });
      });
  },
};
</script>

<style scoped>
.btn-danger:hover {
  color: #fff;
  background-color: #b92f3c;
  border-color: #ae2c38;
}
.mt-4 {
  margin-top: 1.5rem !important;
}
.jobs_conetent h4 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 400;
  transition: 0.3s;
  color: black;
}
.job_listing_area .job_lists .single_jobs {
  padding: 30px;
  margin-bottom: 12px;
  border: 1px solid transparent;
  transition: 0.3s;
  border-radius: 5px;
}
.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #eff0f2;
  border-radius: 0.4rem;
}
.candidate-profile-overview li,
.profile-contact li {
  padding: 10px 0;
}
.section {
  padding-top: 60px;
  padding-bottom: 80px;
  position: relative;
}
.justify-content-between {
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}
.job_listing_area .job_lists .single_jobs .jobs_left .jobs_conetent h4 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 400;
  transition: 0.3s;
}
.job_listing_area .job_lists .single_jobs .jobs_left .thumb {
  float: left;
  width: 82px;
  height: 82px;
  border-radius: 5px;
  padding: 15px;
  background: #f5f7fa;
  margin-right: 25px;
  border: 1px solid #f0f0f0;
}
</style>
