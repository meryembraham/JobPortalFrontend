<template>
  <div class="page-content">
    <div
      id="error"
      style="width: 29%; top: 2%; position: absolute; display: none"
      class="alert alert-danger"
      role="alert"
    ></div>
    <div class="form-v4-content register container">
      <div class="row" style="width: -webkit-fill-available">
        <b-tabs style="padding: 10px; margin-top: 3%">
          <b-tab
            title="Candidat"
            style="
              background-color: transparent;
              border: none;
              margin-right: 13px;
              text-align: center;
            "
          >
            <h3 class="register-heading" style="text-align: center">
              Inscription Candidat
            </h3>
            <div class="row register-form">
              <div class="col-md-6">
                <b-form-group
                  style="border: none"
                  label-class="font-weight-bold pt-0"
                  class="mb-0"
                >
                  <b-form-group
                    style="text-align: initial; border: none"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Nom:"
                  >
                    <b-form-input
                      id="nomC"
                      v-model="form.nom"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    style="border: none; text-align: initial"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Email:"
                  >
                    <b-form-input
                      id="emailC"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    style="border: none; text-align: initial"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Mot de passe"
                  >
                    <b-form-input
                      id="passwordC"
                      v-model="form.password"
                      type="password"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    style="border: none; text-align: initial"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Confirmation:"
                  >
                    <b-form-input
                      id="password_confirmation_C"
                      v-model="form.password_confirmation"
                      type="password"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    style="border: none; text-align: initial; width: auto"
                    label-for="tel"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Numéro de téléphone:"
                  >
                    <b-form-input
                      v-model="form.tel"
                      type="tel"
                      style="width: 100%"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  style="border: none"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label="Prénom:"
                >
                  <b-form-input
                    id="prenomC"
                    v-model="form.prenom"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group style="border: none">
                  <b-form-group
                    style="border: none; width: auto"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Date de naissance:"
                  >
                    <input
                      type="date"
                      v-model="form.date_de_naissance"
                      style="width: 100%; height: 36px"
                    />
                  </b-form-group>
                  <b-form-group style="border: none">
                    <b-form-select
                      v-model="form.civilite"
                      class="mb-3 mt-4 col-md-6"
                      style="width: 100%; height: 34px; color: #495057"
                    >
                      <b-form-select-option disabled
                        >Civilité</b-form-select-option
                      >
                      <b-form-select-option value="homme"
                        >Homme</b-form-select-option
                      >
                      <b-form-select-option value="femme"
                        >Femme</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                  <b-form-group style="border: none">
                    <b-form-select
                      v-model="form.region"
                      class="mt-2"
                      style="
                        margin-top: 24px;
                        width: 100%;
                        height: 34px;
                        color: #495057;
                      "
                    >
                      <b-form-select-option disabled
                        >Gouvernorat</b-form-select-option
                      >
                      <b-form-select-option
                        v-for="reg in regions"
                        :key="reg.id"
                        :value="reg.id"
                        >{{ reg.nom }}</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                  <b-form-group style="border: none">
                    <b-form-select
                      v-model="form.secteur"
                      class="mb-4 mt-3 col-md-6"
                      style="
                        width: 100%;
                        height: 34px;
                        color: #495057;
                        border: 1;
                      "
                    >
                      <b-form-select-option disabled
                        >Secteur</b-form-select-option
                      >
                      <b-form-select-option
                        v-for="sec in secteurs"
                        :key="sec.id"
                        :value="sec.id"
                        >{{ sec.nom }}</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </div>
            </div>
            <b-button
              block
              @click.prevent="
                (event) => {
                  onSubmit(event, 'candidat');
                }
              "
              variant="primary"
              class="mt-3 btnRegister"
              >S'inscrire</b-button
            >
          </b-tab>
          <b-tab title="Entreprise">
            <h3 class="register-heading">Inscription Entreprise</h3>
            <div class="row register-form">
              <div class="col-md-6">
                <b-form-group
                  style="border: none"
                  label-cols-lg="3"
                  label-size="lg"
                  label-class="font-weight-bold pt-0"
                  class="mb-0"
                >
                  <b-form-group
                    style="border: none; text-align: initial; width: auto"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Nom:"
                  >
                    <b-form-input
                      style="border: none"
                      id="nom"
                      v-model="form.nom"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    style="border: none; text-align: initial; width: auto"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Nom de l'organisation:"
                  >
                    <b-form-input
                      style="border: none"
                      id="nom_entreprise"
                      v-model="form.nom_entreprise"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    style="border: none; text-align: initial; width: auto"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Email:"
                  >
                    <b-form-input
                      style="border: none"
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    style="border: none; text-align: initial; width: auto"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Mot de passe:"
                  >
                    <b-form-input
                      style="border: none"
                      id="password"
                      v-model="form.password"
                      type="password"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    style="border: none; text-align: initial; width: auto"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Confiramtion:"
                  >
                    <b-form-input
                      style="border: none"
                      id="password_confirmation"
                      v-model="form.password_confirmation"
                      type="password"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  style="border: none; text-align: initial; width: auto"
                  label-cols-lg="3"
                  label-size="lg"
                  label-class="font-weight-bold pt-0"
                  class="mb-0"
                >
                  <b-form-group
                    style="border: none; text-align: initial; width: auto"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Prénom:"
                  >
                    <b-form-input
                      style="border: none"
                      id="prenom"
                      v-model="form.prenom"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-for="tel"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label="Numéro de téléphone"
                    style="
                      width: auto;
                      border: none;
                      text-align: initial;
                      width: auto;
                    "
                  >
                    <b-form-input
                      style="border: none"
                      id="tel"
                      v-model="form.tel"
                      type="tel"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group style="border: none">
                    <b-form-select
                      required
                      v-model="form.region"
                      class="mt-3 col-md-6"
                      style="
                        margin-top: 24px;
                        width: 100%;
                        height: 34px;
                        color: #495057;
                      "
                    >
                      <b-form-select-option disabled
                        >Gouvernorat</b-form-select-option
                      >
                      <b-form-select-option
                        v-for="reg in regions"
                        :key="reg.id"
                        :value="reg.id"
                        >{{ reg.nom }}</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                  <b-form-group style="border: none">
                    <b-form-select
                      v-model="form.secteur"
                      class="mb-4 mt-3 col-md-6"
                      style="
                        width: 100%;
                        height: 34px;
                        color: #495057;
                        border: 1;
                      "
                    >
                      <b-form-select-option disabled
                        >Secteur</b-form-select-option
                      >
                      <b-form-select-option
                        v-for="sec in secteurs"
                        :key="sec.id"
                        :value="sec.id"
                        >{{ sec.nom }}</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </div>
            </div>
            <b-button
              block
              @click.prevent="
                (event) => {
                  onSubmit(event, 'entreprise');
                }
              "
              variant="primary"
              class="mt-3 btnRegister"
              >S'inscrire</b-button
            >
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "vue-phone-number-input/dist/vue-phone-number-input.css";
export default {
  data() {
    return {
      form: {},
      select: null,
      secteurs: [],
      regions: [],
    };
  },
  created() {
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
      //console.log(this.secteurs);
    });
    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
      //console.log(this.regions);
    });
  },
  methods: {
    onSubmit(event, role) {
      event.preventDefault();
      this.form.role = role;
      console.log(this.form);
      this.axios
        .post("http://127.0.0.1:8000/api/register", this.form)
        .then((res) => console.log(res))
        .catch((res) => {
          console.log(res.response.data);
          document.getElementById("error").innerHTML = "";
          document.getElementById("error").style.display = "block";
          if (res.response.data.email) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              res.response.data.email[0];
          }
          if (res.response.data.nom) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.nom[0];
          }
          if (res.response.data.password) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.password[0];
          }
          if (res.response.data.prenom) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.prenom[0];
          }
          if (res.response.data.password_confirmation) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.password_confirmation[0];
          }
          if (res.response.data.civilite) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.civilite[0];
          }
          if (res.response.data.date_de_naissance) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.date_de_naissance[0];
          }
          if (res.response.data.region) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.region[0];
          }
          if (res.response.data.tel) {
            document.getElementById("error").innerHTML =
              document.getElementById("error").innerHTML +
              "<br>" +
              res.response.data.tel[0];
          }
        });
    },
    onReset(event) {
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
.page-content {
  width: 100%;
  margin: 0 auto;
  background-image: url("@/assets/banner.png");
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
}
.form-v4-content {
  background: #fff;
  width: 46%;
  /*height: 100%;*/
  border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  margin: 175px 0;
  position: relative;
  display: flex;
  display: -webkit-flex;
}
.form-v4-content h2 {
  font-weight: 700;
  font-size: 20px;
  padding: 6px 0 0;
  margin-bottom: 34px;
}
/* Responsive */
@media screen and (max-width: 991px) {
  .form-v4-content {
    margin: 180px 20px;
    flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
  }
}

.register >>> .register-form {
  padding: 3%;
}

.btnRegister {
  align-content: center;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  background: #007bff;
  color: #fff;
  font-weight: 500;
  width: 30%;
  cursor: pointer;
}

.register >>> .nav-tabs {
  border: none;
  background: #007bff;
  border-radius: 1.5rem;

  float: right;
  margin-top: 1%;
  margin-right: 15px;
}

.register >>> .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  width: 121px;
}

.register >>> .nav-tabs .nav-link:hover {
  border: none;
}

.register >>> .nav-tabs .nav-link.active {
  background-color: #fff;
  color: #007bff;
  border: 2px solid #007bff;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057;

  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.tab-content > .active {
  display: block;
}
.fade {
  transition: opacity 0.15s linear;
}

.register-heading {
  text-align: center;
  margin-top: 61px;
  color: #495057;
}
.btnLogin {
  margin-top: 15px;
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  background: #007bff;
  color: #fff;
  font-weight: 600;
  width: 59%;
  cursor: pointer;
}
::placeholder {
  color: gray;
}
</style>
