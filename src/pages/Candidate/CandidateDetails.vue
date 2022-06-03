<template>
  <div>
    <header>
      <navbar />
    </header>
    <div class="bradcam_area bradcam_bg_1">
      <div class="container">
        <div class="row" >
          <div class="col-xl-12" >
            <div class="bradcam_text">
              <h3>Détails Candidat</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="row" style="margin-top: 30px"  v-for="cand in condidat"
                  :key="cand.id"
                  :value="cand.id" >
          <div class="col-lg-4" >
            <div class="card side-bar">
              <div class="card-body p-4">
                <div
                  class="candidate-profile text-center"
                  style="text-align: center"
                >
                  <img
                    src="@/assets/photographe-photo-cv-etudiant.jpg"
                    alt=""
                    class="avatar-lg rounded-circle"
                    style="
                      max-width: 100%;
                      width: 109px;
                      vertical-align: middle;
                      border-style: none;
                    "
                  />
                  <h6 style="text-align: center" class="fs-18 mb-0 mt-4">
                   {{cand.user.nom}} {{cand.user.prenom}}
                  </h6>
                </div>
              </div>
              <!--end candidate-profile-->

              <div class="candidate-profile-overview card-body border-top p-4" >
                <h6 class="fs-17 fw-semibold mb-3">Profile Overview</h6>
                <ul class="list-unstyled mb-0" style="text-align: initial">
                  <li>
                    <div class="d-flex">
                      <label class="text-dark">Categories</label>
                      <div>
                        <p class="text-muted mb-0">Commerce</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="d-flex">
                      <label class="text-dark">Languages</label>
                      <div>
                        <p class="text-muted mb-0">
                          {{cand.langues}}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <label class="text-dark">Niveau d'experience</label>
                      <div>
                        <p class="text-muted mb-0" style=" margin-left: 27px">{{cand.niveau}}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    
                  </li>
                </ul>
                <div >
                  <a href="#" class="btn btn-danger btn-hover w-100"
                    > Contacter</a
                  >
                  <a href="#" class="btn btn-primary btn-hover w-100 mt-2"
                    > Télécharger CV</a
                  >
                </div>
               
              </div>
              <!--candidate-profile-overview-->
              <!--end card-body-->
              <div
                class="candidate-contact-details card-body p-4 border-top"
                style="margin-top: -22px"
              >
                <h6 class="fs-17 fw-semibold mb-3">Détails Contact</h6>
                <ul class="list-unstyled mb-0">
                  <li>
                    <div class="d-flex align-items-center mt-4">
                      <div class="icon bg-soft-primary flex-shrink-0">
                        <i class="uil uil-envelope-alt"></i>
                      </div>
                      <div class="ms-3">
                        <h6 class="fs-14 mb-1">Email</h6>
                        <p class="text-muted mb-0">{{cand.user.email}}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center mt-4">
                      <div class="icon bg-soft-primary flex-shrink-0">
                        <i class="uil uil-map-marker"></i>
                      </div>
                      <div class="ms-3">
                        <h6 class="fs-14 mb-1">Adresse</h6>
                        <p class="text-muted mb-0">{{cand.region.nom}}, {{cand.ville}}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center mt-4">
                      <div class="icon bg-soft-primary flex-shrink-0">
                        <i class="uil uil-phone"></i>
                      </div>
                      <div class="ms-3">
                        <h6 class="fs-14 mb-1">Téléphone</h6>
                        <p class="text-muted mb-0">{{cand.tel}}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!--end candidate-overview-->
            </div>
            <!--end card-->
          </div>
          <!--end col-->

          <div class="col-lg-8">
            <div class="card candidate-details ms-lg-4 mt-4 mt-lg-0">
              <div class="card-body p-4 candidate-personal-detail">
                <div>
                  <h6 class="fs-17 fw-semibold mb-3">About Me</h6>
                  <p class="text-muted mb-2">
                   {{cand.bio}}
                  </p>
                </div>
                <div class="candidate-education-details mt-4 pt-3">
                  <h6 class="fs-17 fw-bold mb-0"><i
                        class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                      ></i
                      >Education</h6>
                  <div class="candidate-education-content mt-4 d-flex"  v-for="forma in formations"
                      :key="forma.id"
                      :value="forma.id">
                    <div class="ms-4">
                      <h6 class="fs-16 mb-1">
                        <span style="margin-right:5px">&#8226;</span>{{forma.diplome}}
                      </h6>
                      <p class="mb-2 text-muted">
                       {{forma.etablissement}}
                      </p>
                      <p class="mb-2 text-muted">
                      ({{forma.date_debut}}, {{forma.date_fin}})
                      </p>
                    </div>
                  </div>
                 
                </div>
                <!--end candidate-education-details-->
                <div class="candidate-education-details mt-4 pt-3">
                  <h6 class="fs-17 fw-bold mb-0"> <i
                        class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                      ></i
                      >Experience</h6>
                  <div class="candidate-education-content mt-4 d-flex" v-for="exp in experiences"
                      :key="exp.id"
                      :value="exp.id">
                      
                    <div class="ms-4">
                      <h6 class="fs-16 mb-1"> <span style="margin-right:5px">&#8226;</span>{{exp.poste}}</h6>
                      <p class="mb-2 text-muted">{{exp.nom_societe}}</p>
                      <p>
({{exp.date_debut}},{{exp.date_fin}})
                      </p>
                      <p class="text-muted mb-0">
                       {{exp.description}}
                      </p>
                    </div>
                    
                  </div>
                  
                </div>
                <!--end candidate-portfolio-->
              </div>
              <!--end card-body-->
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
  data(){
    return{
   condidat:[],
   formations:{},
   experiences:{},
    }
  },
  components: { Navbar },
  created(){
    this.axios
      .get(
        "http://127.0.0.1:8000/api/condidat/" + this.$route.params.id
      )
      .then((res) => {
        this.condidat = res.data.condidat;
      
        console.log(this.condidat);
        this.axios
      .get("http://127.0.0.1:8000/api/expC/" + this.$route.params.id)
      .then((res) => {
        this.experiences = res.data.experience;
        console.log(this.experiences);
      });
    this.axios
      .get("http://127.0.0.1:8000/api/formC/" + this.$route.params.id)
      .then((res) => {
        this.formations = res.data.formation;
        console.log(this.formations);
      });
      });
      
  }
};
</script>

<style>
.candidate-education-content .circle {
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 40px;
}
.flex-shrink-0 {
  -ms-flex-negative: 0 !important;
  flex-shrink: 0 !important;
}

.bg-soft-primary {
  background-color: rgba(118, 109, 244, 0.15) !important;
  color: #766df4 !important;
}
.fw-semibold {
  font-weight: 600;
}
.fs-17 {
  font-size: 17px;
}
.candidate-profile-overview li label,
.profile-contact li label {
  min-width: 118px;
  font-weight: 500;
}
.candidate-profile-overview li,
.profile-contact li {
  padding: 10px 0;
}
p {
  text-align: left;
}
h6 {
  text-align: left;
}

</style>
