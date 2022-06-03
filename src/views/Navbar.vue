<template>
   <div class="header-area">
        <div id="sticky-header" class="main-header-area">
          <div class="container-fluid">
            <div class="header_bottom_border">
              <div class="row align-items-center">
                <div class="col-xl-3 col-lg-2">
                  <div class="logo">
                    <a href="index.html">
                      <img src="@/assets/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                  <div class="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <router-link to="/jobboard">Accueil</router-link>
                        </li>
                        <li>
                          <a href=""
                            ><router-link to="/offres">Offres</router-link></a
                          >
                        </li>
                        <li>
                          <a href=""
                            ><router-link to="/candidats"
                              >Candidats</router-link
                            ></a
                          >
                        </li>
                        <li>
                          <a href=""
                            ><router-link to="/entreprises"
                              >Entreprises</router-link
                            ></a
                          >
                        </li>

                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div class="Appointment">
                    <div class="phone_num d-none d-xl-block">
                      <router-link to="/login" v-if="!currentUser"
                        >Login</router-link
                      >
                        <router-link to="/profile" v-if="currentUserCandidat"
                        >{{currentUser.nom}} {{currentUser.prenom}}</router-link
                      >
                      <router-link to="/entreprise" v-if="currentUserEntreprise"
                        >{{currentUser.nom}} {{currentUser.prenom}}</router-link
                      >
                    </div>
                    <div class="d-none d-lg-block">
                      <button class="boxed-btn3"  href="#" style="text-decoration:none">Post a Job</button>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  data(){
    return{
      user: {},
    }
  },
  name: "NavBar",
  computed: {
    currentUser() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return JSON.parse(localStorage.getItem("user"));
    },
    currentUserEntreprise() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return this.user && this.user.role == "entreprise";
    },
    currentUserCandidat() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      //console.log( JSON.parse(localStorage.getItem("user.role")));
      return this.user && this.user.role == "candidat";
    },
  },

};
</script>
<style scoped>
.bradcam_bg_1 {
  background-image: url(@/assets/banner/bradcam.png);
}
.owl-carousel .owl-nav div {
  background: transparent;
  height: 50px;
  left: 0px;
  position: absolute;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: 50px;
  color: #707070;
  background-color: transparent;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  left: 50px;
  font-size: 15px;
  line-height: 50px;
  border: 1px solid #4d6174;
  left: 150px;
  color: #fff;
}

/* line 249, ../../Arafath/CL/December/235. Job board/HTML/scss/theme-default.scss */
.owl-carousel .owl-nav div.owl-next {
  left: auto;
  right: 150px;
}

/* line 254, ../../Arafath/CL/December/235. Job board/HTML/scss/theme-default.scss */
.owl-carousel .owl-nav div.owl-next i {
  position: relative;
  right: 0;
}

/* line 261, ../../Arafath/CL/December/235. Job board/HTML/scss/theme-default.scss */
.owl-carousel .owl-nav div.owl-prev i {
  position: relative;
  top: 0px;
}

/* line 271, ../../Arafath/CL/December/235. Job board/HTML/scss/theme-default.scss */
.owl-carousel:hover .owl-nav div {
  opacity: 1;
  visibility: visible;
}

/* line 274, ../../Arafath/CL/December/235. Job board/HTML/scss/theme-default.scss */
.owl-carousel:hover .owl-nav div:hover {
  color: #fff;
  background: #fd8e5e;
  border: 1px solid transparent;
}
.boxed.btn3 {
    background: #00D363;
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


.slicknav_menu .slicknav_nav {
  background: #fff;
  float: right;
  margin-top: 0;
  padding: 0;
  width: 95%;
  padding: 0;
  border-radius: 0px;
  margin-top: 5px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 11px;
}

/* line 28, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
.slicknav_menu .slicknav_nav a:hover {
  background: transparent;
  color: #f91842;
}

/* line 32, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
.slicknav_menu .slicknav_nav a.active {
  color: #f91842;
}

@media (max-width: 767px) {
  /* line 35, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
  .slicknav_menu .slicknav_nav a i {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 35, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
  .slicknav_menu .slicknav_nav a i {
    display: none;
  }
}

/* line 44, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
.slicknav_menu .slicknav_nav .slicknav_btn {
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: -40px;
  position: relative;
  z-index: 99;
  border: 1px solid #ddd;
  top: 3px;
  right: 5px;
  top: -36px;
}

/* line 55, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
.slicknav_menu .slicknav_nav .slicknav_btn .slicknav_icon {
  margin-right: 6px;
  margin-top: 3px;
  position: relative;
  padding-bottom: 3px;
  top: -11px;
  right: -5px;
}

@media (max-width: 767px) {
  /* line 12, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
  .slicknav_menu {
    margin-right: 0px;
  }
}

/* line 72, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
.slicknav_nav .slicknav_arrow {
  float: right;
  font-size: 22px;
  position: relative;
  top: -9px;
}

/* line 78, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
.slicknav_btn {
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  position: relative;
  z-index: 99;
  border: none;
  border-radius: 3px;
  top: 5px;
  padding: 5px;
  right: 5px;
  margin-top: -5px;
  top: -31px;
}

/* line 92, ../../Arafath/CL/December/235. Job board/HTML/scss/_slick-nav.scss */
.slicknav_btn {
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  position: relative;
  z-index: 99;
  border: none;
  border-radius: 3px;
  top: 5px;
  padding: 5px;
  right: 0;
  margin-top: -5px;
  top: -33px;
}
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

</style>
