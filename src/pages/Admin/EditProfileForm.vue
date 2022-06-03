<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
         

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="form.nom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Prenom</label>
              <md-input v-model="form.prenom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Adresse Email</label>
              <md-input v-model="form.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Mot de passe</label>
              <md-input v-model="form.password" type="email"></md-input>
            </md-field>
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
    };
  },
   editProfile(adm) {
      this.form = { ...adm };
    },
    updateProfile(form) {
      this.axios
        .put(`http://localhost:8000/api/updateadmin/` + form.id)
        .then((response) => {
          console.log(response);
        });
    },
};
</script>
<style></style>