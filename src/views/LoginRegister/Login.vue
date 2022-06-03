<template>
  <div
    class="container register mb-50"
    style="width: 75%; margin-top: 20px; background-color: #fff"
  >
    <div class="row">
      <div class="col-md-7 register-left">
        <img src="@/assets/log.jpg" alt="" class="img-fluid" />
      </div>
      <div class="col-md-5 register-right" style="justify-content: center">
        <div class="row register-form" style="justify-content: center">
          <div class="mb-4">
            <h3>Connectez-vous à votre compte</h3>
          </div>
          <form action="#" method="post">
            <div class="form-group first">
              <input
                required
                type="text"
                class="form-control"
                v-model="form.email"
                placeholder="Email"
                style="line-height: 2.0rem;
    margin-bottom: 24px;
}"
              />
            </div>
            <div class="form-group last mb-4">
              <input
                required
                type="password"
                class="form-control"
                v-model="form.password"
                placeholder="Mot de passe"
                style="line-height: 2.0rem;
    margin-bottom: 24px;
}"
              />
            </div>

            <div
              class="d-flex mb-5 align-items-center"
              style="justify-content: space-between"
            >
              <label class="control control--checkbox"
                ><span class="caption">Memoriser</span>
                <input
                  type="checkbox"
                  checked="checked"
                  style="float: left; margin: 5px"
                />
                <div class="control__indicator"></div>
              </label>
              <span class="ml-auto" style="float: right"
                ><a href="#" class="forgot-pass">Mot de passe oublié</a></span
              >
            </div>
            <b-button
              class="mt-3 btnLogin"
              @click.prevent="
                (event) => {
                  onSubmit(event);
                }
              "
              >Se connecter</b-button
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
export default {
  name: "App",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.axios
        .post("http://127.0.0.1:8000/api/login", this.form)
        .then((resultat) => {
          localStorage.setItem("user", JSON.stringify(resultat.data.user));
          localStorage.setItem("role", JSON.stringify(resultat.data.user.role));
          window.localStorage.setItem(
            "token",
            JSON.stringify(resultat.data.token)
          );
          if (resultat.data.role == "candidat") {
            this.$router.push({ path: "/candidat/profile" });
          } else if (resultat.data.role == "entreprise") {
            this.$router.push({ path: "/entreprise/dashboard" });
          } else if (resultat.data.role == "admin") {
            this.$router.push({ path: "/admin/dashboard" });
          } else {
            this.$router.push({ name: "home" });
          }
        })
        .catch((err) => console.log(err));
    },
    onReset(event) {
      event.preventDefault();
    },
  },
};
</script>
<style scoped>
.register {
  padding: 3%;
  border: #383d41;
}

.register-left {
  text-align: center;
  color: #fff;
}

.register-left >>> input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 50%;
  background: #f8f9fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 0%;
  margin-bottom: 3%;
  cursor: pointer;
}

.register-right {
  margin: auto;
  justify-content: center;
}

.register-left >>> img {
  width: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #007bff;
  box-shadow: 1rem black;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20px);
  }
}

@keyframes mover {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20px);
  }
}

.register-left >>> p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}

.register >>> .register-form {
  padding: 7%;
  margin-top: 10%;
}
.content .bg {
  background-size: cover;
  background-position: center;
}

.content a {
  color: #888;
  text-decoration: underline;
}

.content .btn {
  height: 54px;
  padding-left: 30px;
  padding-right: 30px;
}

.forgot-pass {
  position: relative;
  top: 2px;
  font-size: 14px;
}
.btnLogin {
  background: #007bff;
  color: #fff;
  display: inline-block;
  padding: 10px 29px 10px 29px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  text-align: center;
  color: #fff !important;
  text-transform: capitalize;
  transition: 0.3s;
  cursor: pointer;
}
.btnLlogin:hover {
  color: #00d363 !important;
  border: 1px solid #00d363;
  background: transparent;
}
.btnRegister {
  margin-top: 15px;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #ff9f01;
  color: #fff;
  font-weight: 600;
  width: 59%;
  cursor: pointer;
}

.fade {
  transition: opacity 0.15s linear;
}

.register-heading {
  text-align: center;
  color: #495057;
}
</style>
