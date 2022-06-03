<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
       <div class="file-upload">
                                    <input type="file" name="file" id="file" class="inputfile" />
                                    <label for="file"><i class="ri-upload-2-line"></i> Upload Photo</label>
                                </div>
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{currentUser.nom}}</h6>
      <h4 class="card-title">{{currentUser.prenom}}</h4>
      <p class="card-description">
        {{currentUser.description}}
      </p>

    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg"),
    },
    entreprise: [],
  },
  data() {
    return {};
  },
   computed: {
    currentUser() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>
<!--<style lang="scss" src="../../assets/scss/material-dashboard.scss" ></style>
