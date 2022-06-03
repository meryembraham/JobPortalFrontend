<template>
  <div class="container-fluid">
    <h2 style="text-align: center; font-weight: bold">
      Gérer les utilisateurs
    </h2>

    <div class="table-responsive">
      <div class="table-wrapper">
       
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              
              <th>ID</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Status</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="use in users" :key="use.id" :value="use.id">
              
              <td>{{use.id}}</td>
              <td>{{ use.nom }}</td>
              <td>{{ use.prenom }}</td>
              <td>
                <span v-if="use.status=='active'" class="status text-success">&bull;</span>
                <span v-if="use.status=='blocked'" class="status text-danger">&bull;</span>{{ use.status }}
              </td>
              <td>{{ use.role }}</td>
              <td style="display: flex">
                <button
                  type="button"
                  class="btn btn-link shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#showUser"
                  @click="showUser(use.id)"
                >
                  <a
                    ><i
                      class="material-icons"
                      style="color: #03a9f4; margin-right: -12px"
                      >&#xE417;</i
                    ></a
                  >
                </button>

                <button
                  type="button"
                  class="btn btn-link shadow-none"
                  
                  @click="blockUser(use.id)"
                >
                  <a
                    ><i style='font-size:19px;color:red' class='fas'>&#xf4fa;</i></a
                  >
                </button>

                <button
                  type="button"
                  class="btn btn-link shadow-none"
            
                  @click="unblockUser(use.id)"
                >
                  <a
                    ><i style='font-size:19px;color:green' class='fas'>&#xf4fc;</i></a
                  >
                </button>
            
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    </div>
 <div
      class="modal fade"
      id="showUser"
      tabindex="-1"
      role="dialog"
      aria-labelledby="showuserLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="showUser"
              style="margin-left: auto; font-size: 37px; font-family: revert"
            >
              Détails utilisateur
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="row" style="text-align:initial;">
              <div ><h3 style="font-weight:bold">Nom:</h3>
              <p>{{ user.nom }}</p></div>
              <div><h3 style="font-weight:bold">Prénom:</h3>
              <p>{{ user.prenom }}</p></div>
              <div><h3 style="font-weight:bold">Email:</h3>
              <p>{{ user.email }}</p></div>
              <div><h3 style="font-weight:bold">Role:</h3>
              <p>{{ user.role }}</p></div>
              <div> <h3 style="font-weight:bold">Status:</h3>
               <p>{{ user.status }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: [],
      form: {},
      user: {},
    };
  },
  created() {
    const token = JSON.parse(localStorage.getItem("token"));
    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    this.user = JSON.parse(localStorage.getItem("user"));

    this.axios.get("http://127.0.0.1:8000/api/users").then((res) => {
      this.users = res.data.users;
    });
  },
  methods: {
    
    blockUser(id) {
      this.axios
        .put(`http://127.0.0.1:8000/api/block/${id}`)
        .then((response) => {
          console.log(response);
        });
    },
    unblockUser(id) {
      this.axios
        .put(`http://localhost:8000/api/unblock/${id}`)
        .then((response) => {
          console.log(response);
        });
    },
    showUser(id) {
      this.axios
        .get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
          this.user = response.user.data;
          console.log(response);
        });
    },
  },
};
</script>
<style>
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  min-width: 1000px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #435d7d;
  color: #fff;
  padding: 16px 30px;
  min-width: 100%;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
.table-title .btn {
  color: #fff;
  float: right;
  font-size: 13px;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
.status {
  font-size: 30px;
  margin: 2px 2px 0 0;
  display: inline-block;
  vertical-align: middle;
  line-height: 10px;
}
.text-success {
  color: #10c469;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table td:last-child {
  width: 130px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
  outline: none !important;
}
table.table td a:hover {
  color: #2196f3;
}
table.table td a.view {
  color: #03a9f4;
}
table.table td button a.edit {
  color: #ffc107;
}
table.table td button a i:active {
  border: none;
}
table.table td a.delete {
  color: #f44336;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a,
.pagination li.active a.page-link {
  background: #03a9f4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
/* Custom checkbox */
.custom-checkbox {
  position: relative;
}
.custom-checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  margin: 5px 0 0 3px;
  z-index: 9;
}
.custom-checkbox label:before {
  width: 18px;
  height: 18px;
}
.custom-checkbox label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  background: white;
  border: 1px solid #bbb;
  border-radius: 2px;
  box-sizing: border-box;
  z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  left: 6px;
  top: 3px;
  width: 6px;
  height: 11px;
  border: solid #000;
  border-width: 0 3px 3px 0;
  transform: inherit;
  z-index: 3;
  transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
  border-color: #03a9f4;
  background: #03a9f4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
  border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
  color: #b8b8b8;
  cursor: auto;
  box-shadow: none;
  background: #ddd;
}
/* Modal styles */
.modal .modal-dialog {
  max-width: 900px;
}
.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
  padding: 20px 30px;
}
.modal .modal-content {
  border-radius: 3px;
  font-size: 14px;
}
.modal .modal-footer {
  background: #ecf0f1;
  border-radius: 0 0 3px 3px;
}
.modal .modal-title {
  display: inline-block;
}
.modal .form-control {
  border-radius: 2px;
  box-shadow: none;
  border-color: #dddddd;
}
.modal textarea.form-control {
  resize: vertical;
}
.modal .btn {
  border-radius: 2px;
  min-width: 50px;
}
.modal form label {
  font-weight: normal;
}
.contrat {
  height: 26px;
  border: none;
  overflow: hidden;
}
.contrat::-moz-focus-inner {
  border: 0;
}
.contrat:focus {
  outline: none;
}
.contrat option {
  width: 57px;
  font-size: 1em;
  padding: 1px;
  text-align: center;
  margin-right: 20px;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  color: black;
}
.rythme {
  height: 26px;
  border: none;
  overflow: hidden;
}
.date_debut {
  height: 26px;
  border: none;
  overflow: hidden;
}
.date_debut::-moz-focus-inner {
  border: 0;
}
.date_debut:focus {
  outline: none;
}
.date_debut option {
  width: 105px;
  font-size: 1em;
  padding: 1px;
  text-align: center;
  margin-right: 20px;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  color: black;
}
.experience {
  height: 26px;
  border: none;
  overflow: hidden;
}
.rythme::-moz-focus-inner {
  border: 0;
}
.rythme:focus {
  outline: none;
}
.experience::-moz-focus-inner {
  border: 0;
}
.experience:focus {
  outline: none;
}
.rythme option {
  width: 98px;
  font-size: 1em;
  padding: 1px;
  text-align: center;
  margin-right: 20px;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  color: black;
}
.experience option {
  width: 95px;
  font-size: 1em;
  padding: 0px;
  text-align: center;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  color: black;
}
option:checked {
  border: none;
  background: #0397d6;
  color: white;
}

input::placeholder {
  color: rgb(0, 0, 0);
  font-size: 1.1em;
  font-weight: bold;
}
.competences input[type="checkbox"] {
  display: none;
  border: none;
}

.competences span {
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  color: black;
  margin: 10px;
}
.competences input[type="checkbox"]:checked + span {
  background: #0397d6;
  color: white;
  padding-left: 17px;
  padding-right: 17px;
  padding: 2px;
  margin: 10px;
}
</style>
