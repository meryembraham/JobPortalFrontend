<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Editer Profil</h4>
        
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nom de l'organisation</label>
              <md-input v-model="entreprise.nom_entreprise"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="user.nom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Prenom</label>
              <md-input v-model="user.prenom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Adresse Email</label>
              <md-input v-model="user.email" type="email"></md-input>
            </md-field>
          </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Catégorie</label>
              <md-input v-model="form.categorie" type="text"></md-input>
            </md-field>
          </div>
         
            <div class="col-md-4">
                        <div class="form-group">
                          <label style="font-size: 0.6875rem;    float: left;
    margin-left: 17px;"
                            >Domaines d'activités:</label
                          >
                          <select
                            style="width: 100%"
                            class="nice-select ml-3"
                            v-model="form.secteur"
                          >
                            <option :value="undefined" disabled>
                              Domaine d'activité
                            </option>
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
          
         
            <div class="col-md-4">
                        <div class="form-group app-label">
                          <label  style="font-size: 0.6875rem;    float: left;
    margin-left: 17px;"
                            >Gouvernorat</label
                          >
                          <div class="form-button">
                            <select
                              class="nice-select"
                              v-model="form.region"
                              style="width: 100%"
                            >
                              <option :value="undefined" disabled>
                                Gouvernorat
                              </option>
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
                      </div>
 <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Site Web</label>
              <md-input v-model="form.site" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Téléphone</label>
              <md-input v-model="entreprise.tel" type="text"></md-input>
            </md-field>
          </div>
     <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Adresse</label>
              <md-input v-model="form.adresse" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Description</label>
              <md-textarea v-model="form.description"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="updateEN(entreprise)">Edit Profile</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      form:{},
      entreprise:{},
      regions:[],
      secteurs:[]
    };
  },
  created(){
     this.user = JSON.parse(localStorage.getItem("user"));
    //console.log(this.form);

    const token = JSON.parse(localStorage.getItem("token"));

    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    //   console.log(this.axios.defaults.headers.common["Authorization"]);
 this.axios
      .get(`http://127.0.0.1:8000/api/entreprisedata/${this.user.id}`)
      .then((res) => {
        this.entreprise = res.data.entreprise[0];
        console.log(this.entreprise);
      });
        this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
    });
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
    });
  },
  methods:{

  
   editProfile(ent) {
      this.form = { ...ent };
    },
    updateEN(entreprise) {
      const upformdata = new FormData();

      upformdata.append("region_id", this.form.region);
      upformdata.append("nom_entreprise", this.entreprise.nom_entreprise);
      upformdata.append("description", this.form.description);
      upformdata.append("categorie", this.form.categorie);
      upformdata.append("secteur_id", this.form.secteur);
      upformdata.append("site", this.form.site);
      upformdata.append("tel", this.entreprise.tel);
      upformdata.append("adresse", this.form.adresse);

      

      this.axios
        .put(`http://localhost:8000/api/updateEntreprise/` + entreprise.id, upformdata)
        .then((response) => {
          console.log(response);
        });
    },}
};
</script>
 
<!--<style lang="scss" src="../../assets/scss/material-dashboard.scss" ></style>