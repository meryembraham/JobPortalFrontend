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
              <h3>Détails Offre</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ bradcam_area  -->

    <div class="job_details_area">
      <div class="container" style="display: block">
        <div class="row" style="margin-top: -70px">
          <div class="col-lg-8">
            <div class="job_details_header">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img src="@/assets/svg_icon/1.svg" alt="" />
                  </div>
                  <div class="jobs_conetent">
                    <a href="#"
                      ><h4>{{ offres.titre }}</h4></a
                    >
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p>
                          <i class="fa fa-map-marker"></i
                          >{{ offres.region.nom }}
                        </p>
                      </div>
                      <div class="location">
                        <p><i class="fa fa-clock-o"></i> {{ offres.rythme }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a class="heart_mark" href="#">
                      <i class="ti-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="row g-2">
                <div class="col-lg-3">
                  <div class="border rounded-start p-3">
                    <p class="text-muted mb-0 fs-13">Expérience</p>
                    <p class="fw-medium fs-15 mb-0">{{ offres.experience }}</p>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="border p-3">
                    <p class="text-muted fs-13 mb-0">Rythme de travail</p>
                    <p class="fw-medium mb-0">{{ offres.rythme }}</p>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="border p-3">
                    <p class="text-muted fs-13 mb-0">Type de contrat</p>
                    <p class="fw-medium mb-0">{{ offres.type_contrat }}</p>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="border rounded-end p-3">
                    <p class="text-muted fs-13 mb-0">Salaire</p>
                    <p class="fw-medium mb-0">{{ offres.salaire }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h5 class="mb-3" style="text-align: initial">Description</h5>
              <div class="job-detail-desc">
                <p class="text-muted mb-0">
                  {{ offres.description }}
                </p>
              </div>
            </div>

            <div class="mt-4">
              <h5 class="mb-3" style="text-align: initial">Exigences</h5>
              <div class="job-detail-desc mt-2">
                <p class="text-muted">
                  {{ offres.exigences }}
                </p>
                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>Have
                    sound knowledge of commercial activities.
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i> Build
                    next-generation web applications with a focus on the client
                    side
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i> Work on
                    multiple projects at once, and consistently meet draft
                    deadlines
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i> have
                    already graduated or are currently in any year of study
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i> Revise
                    the work of previous designers to create a unified aesthetic
                    for our brand materials
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-4">
              <h5 class="mb-3" style="text-align: initial">Expérience</h5>
              <div class="job-details-desc">
                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Understanding of key Design Principal
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Proficiency With HTML, CSS, Bootstrap
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Wordpress: 1 year (Required)
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Experience designing and developing responsive design
                    websites
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i> web
                    designing: 1 year (Preferred)
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-4">
              <h5 class="mb-3" style="text-align: initial">
                Compétences Humaines (Soft skills)
              </h5>
              <div class="job-details-desc">
                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Communication
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Organisation et débrouillardise
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Résolution de problème
                  </li>
                  <li>
                    <i style="font-size: 10px" class="far">&#xf111;</i>
                    Adaptabilité
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-lg-0">
            <!--start side-bar-->
            <div class="side-bar ms-lg-4">
              <div class="card job-overview">
                <div class="card-body p-4">
                  <ul class="list-unstyled mt-4 mb-0">
                    <li>
                      <div class="d-flex mt-4">
                        <i
                          style="font-size: 17px"
                          class="fas icon bg-soft-primary"
                          >&#xf406;</i
                        >
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Titre de l'offre</h6>
                          <p class="text-muted mb-0">{{ offres.titre }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex mt-4">
                        <i
                          style="font-size: 17px"
                          class="icon far bg-soft-primary"
                          >&#xf005;</i
                        >
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Expérience</h6>
                          <p class="text-muted mb-0">{{ offres.experience }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex mt-4">
                        <i class="material-icons bg-soft-primary icon"
                          >&#xe0c8;</i
                        >
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Région</h6>
                          <p class="text-muted mb-0">{{ offres.region.nom }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex mt-4">
                        <i
                          style="font-size: 17px"
                          class="fas bg-soft-primary icon"
                          >&#xf53a;</i
                        >
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Salaire</h6>
                          <p class="text-muted mb-0">{{ offres.salaire }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex mt-4">
                        <i
                          style="font-size: 17px"
                          class="fa icon bg-soft-primary"
                          >&#xf19d;</i
                        >
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Diplome</h6>
                          <p class="text-muted mb-0">{{ offres.diplome }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex mt-4">
                        <i class="material-icons icon bg-soft-primary"
                          >&#xe923;</i
                        >
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Date Publication</h6>
                          <p class="text-muted mb-0">26-05-2022</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex mt-4">
                        <i class="material-icons icon bg-soft-primary"
                          >&#xe916;</i
                        >
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Date Début</h6>
                          <p class="text-muted mb-0">{{ offres.date_debut }}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="mt-3">
                    <button
                      style="background: #00d363; color: #fff"
                      class="btn boxed-btn w-100 mt-2"
                      v-if="!currentUser"
                    >
                      <a href="/login" style="color: #fff">Postuler</a>
                      <i class="uil uil-arrow-right"></i>
                    </button>

                    <button
                      v-if="currentUserCandidat"
                      style="background: #00d363; color: #fff"
                      href="#applyNow"
                      data-bs-toggle="modal"
                      class="btn boxed-btn w-100 mt-2"
                    >
                      <a style="color: #fff">Postuler</a>
                      <i class="uil uil-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <!--end card-body-->
              </div>
              <!--end job-overview-->

              <div class="card company-profile mt-4">
                <div class="card-body p-4">
                  <div class="text-center">
                    <img
                      src="@/assets/svg_icon/1.svg"
                      alt=""
                      class="img-fluid rounded-3"
                    />

                    <div class="mt-4">
                      <h6 class="fs-17 mb-1" style="text-align: center">
                        {{ offres.entreprise.nom_entreprise }}
                      </h6>
                      <p class="text-muted" style="text-align: center">
                        Depuis 2017
                      </p>
                    </div>
                  </div>
                  <ul class="list-unstyled mt-4">
                    <li>
                      <div class="d-flex">
                        <i class="uil uil-phone-volume text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Téléphone</h6>
                          <p class="text-muted fs-14 mb-0">
                            {{ offres.entreprise.tel }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="d-flex">
                        <i class="uil uil-envelope text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Email</h6>
                          <p class="text-muted fs-14 mb-0">
                            {{ offres.entreprise.user.email }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="d-flex">
                        <i class="uil uil-globe text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Site</h6>
                          <p class="text-muted fs-14 text-break mb-0">
                            {{ offres.entreprise.site }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="d-flex">
                        <i class="uil uil-map-marker text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Région</h6>
                          <p class="text-muted fs-14 mb-0">
                            {{ offres.entreprise.region.nom }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="mt-4">
                    <a
                      :href="`/detailsentreprise/` + offres.entreprise.id"
                      class="btn btn-primary btn-hover w-100 rounded"
                      ><i class="mdi mdi-eye"></i> Consulter Profil</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--end side-bar-->
          </div>
        </div>
      </div>
    </div>
    <!-- START APPLY MODAL -->
    <div
      class="modal fade col-md-6"
      id="applyNow"
      role="dialog"
      tabindex="-1"
      aria-labelledby="applyNow"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body p-5">
            <div class="text-center mb-4">
              <h5 class="modal-title" id="staticBackdropLabel">
                Postuler pour cette offre
              </h5>
            </div>
            <div class="position-absolute end-0 top-0 p-3">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="mb-3">
              <label
                for="nameControlInput"
                class="form-label"
                style="float: initial; display: flex"
                >Prénom</label
              >
              <input
                type="text"
                class="form-control"
                id="nameControlInput"
                placeholder="Enter votre prénom"
              />
            </div>
            <div class="mb-3">
              <label
                for="emailControlInput2"
                class="form-label"
                style="display: flex"
                >Adresse Email</label
              >
              <input
                type="email"
                class="form-control"
                id="emailControlInput2"
                placeholder="Enter votre email"
              />
            </div>
            <div class="mb-3">
              <label
                for="messageControlTextarea"
                class="form-label"
                style="display: flex"
                >Message</label
              >
              <textarea
                class="form-control"
                id="messageControlTextarea"
                rows="4"
                placeholder="Enter votre message"
                v-model="demande.message"
              ></textarea>
            </div>

            <button
              type="submit"
              @click="createDemande(offres.id)"
              class="btn btn-primary w-70"
            >
              Envoyer Demande
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- END APPLY MODAL -->
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
              <p class="copy_right text-center">
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
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
      offres: [],
      demande: [],
      user: [],
    };
  },
  computed: {
    currentUser() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return this.user;
    },
    currentUserCandidat() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      //console.log( JSON.parse(localStorage.getItem("user.role")));
      return this.user && this.user.role == "candidat";
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    this.user = JSON.parse(localStorage.getItem("user"));
    // console.log(this.user);
    this.axios
      .get("http://127.0.0.1:8000/api/offre/" + this.$route.params.id)
      .then((res) => {
        this.offres = res.data.offre;

        console.log(this.offres);
      });
  },
  methods: {
    createDemande(id) {
      const Demandeformdata = new FormData();

      Demandeformdata.append("message", this.demande.message);

      console.log(Demandeformdata);
      this.axios
        .post(`http://127.0.0.1:8000/api/addDemande/${id}`, Demandeformdata)
        .then((response) => {
          document.getElementsByClassName("btn-close")[0].click();
          alert("Demande envoyé");
        })
        .catch((error) => {
          document.getElementsByClassName("btn-close")[0].click();
          alert("Vous ne pouvez pas renvoyer");
        });
    },
  },
};
</script>

<style scoped>
.boxed.btn3 {
  background: #00d363;
  color: #fff;
  display: inline-block;
  padding: 13px 29px 13px 29px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border: 1px solid transparent;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  text-align: center;
  color: #fff !important;
  text-transform: capitalize;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
}

.job-detail-list li i {
  color: #048565;
  margin-right: 10px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.form-control,
.form-select {
  padding: 10px;
  font-size: 14px;
  border-color: #dbdfe2;
  font-weight: 500;
}
.form-label {
  margin-bottom: 0.5rem;
}
label {
  display: inline-block;
}
.modal-content {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  /* -webkit-box-direction: normal; */
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #eff0f2;
  border-radius: 0.4rem;
  outline: 0;
}
.icon {
  height: 46px;
  line-height: 46px;
  width: 46px;
  border-radius: 46px;
  text-align: center;
  font-size: 20px;
}
.job_details_area .single_jobs .jobs_left .jobs_conetent h4 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 400;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2em;
}
.job_details_area .descript_wrap .single_wrap h4 {
  font-size: 20px;
  font-weight: 500;
  color: #001d38;
  margin-bottom: 25px;
}
.job_details_area .descript_wrap .single_wrap {
  margin-bottom: 30px;
}
.job_details_area .descript_wrap .single_wrap p {
  color: #7a838b;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: left;
}
.job_details_area .descript_wrap .single_wrap ul li {
  font-size: 16px;
  line-height: 32px;
  color: #7a838b;
  font-weight: 400;
  position: relative;
  padding-left: 25px;
}
li {
  list-style: none;
  text-align: left;
}
li {
  display: list-item;
}
</style>
