<template>
  <div class="container-fluid">
    <h2 style="text-align: center; font-weight: bold">Gérer les offres</h2>

    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <button
              style="float: right"
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#ajoutoffre"
            >
              <i class="material-icons">&#xE147;</i>
              <span>Ajouter une offre</span>
            </button>
            <button
              style="float: right; margin-right: 5px"
              href="#deleteEmployeeModal"
              class="btn btn-danger"
              data-toggle="modal"
              data-bs-target="#supprimeroffre"
            >
              <i class="material-icons">&#xE15C;</i> <span>Delete</span>
            </button>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span class="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label for="selectAll"></label>
                </span>
              </th>
              <th>Titre</th>
              <th>Type Contrat</th>
              <th>Status</th>
              <th>condidat</th>
              <th>Actions</th>
              <th>Candidatures</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="off in offres" :key="off.id" :value="off.id">
              <td>
                <span class="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="options[]"
                    value="1"
                  />
                  <label for="checkbox1"></label>
                </span>
              </td>
              <td><a :href="`/detailsOffre/` + off.id">{{ off.titre }}</a></td>
              <td>{{ off.type_contrat }}</td>
              <td>
                <span
                  v-if="off.etat_offre == 'active'"
                  class="status text-success"
                  >&bull;</span
                >
                <span
                  v-if="off.etat_offre == 'close'"
                  class="status text-danger"
                  >&bull;</span
                >{{ off.etat_offre }}
              </td>
              <td>{{ off.condidat_id }}</td>

              <td style="display: flex; justify-content: center">
                <button
                  type="button"
                  class="btn btn-link shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#viewoffre"
                  @click="showOffre(off.id)"
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
                  data-bs-toggle="modal"
                  data-bs-target="#editoffre"
                  @click="editOffre(off)"
                >
                  <a
                    ><i
                      class="material-icons edit"
                      style="color: #ffc107; margin-right: -12px"
                      data-toggle="tooltip"
                      >&#xE254;</i
                    ></a
                  >
                </button>

                <button
                  type="button"
                  class="btn btn-link shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteoffre"
                  @click="deleteOffre(off.id)"
                >
                  <a
                    ><i
                      class="material-icons"
                      data-toggle="tooltip"
                      title="Delete"
                      style="color: red"
                      >&#xE872;</i
                    ></a
                  >
                </button>
                <button
                  v-if="off.etat_offre == 'active'"
                  type="button"
                  class="btn btn-link shadow-none"
                  data-bs-target="#closeoffre"
                  @click="closeOffre(off.id)"
                >
                  <a
                    ><i style="font-size: 15px; color: black" class="fa"
                      >&#xf023;</i
                    ></a
                  >
                </button>
                <button
                  v-if="off.etat_offre == 'close'"
                  type="button"
                  class="btn btn-link shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#closeoffre"
                  @click="activeOffre(off.id)"
                >
                  <a
                    ><i style="font-size: 15px; color: black" class="fa"
                      >&#xf09c;</i
                    ></a
                  >
                </button>
              </td>
              <td>
                <button
                  style="
                    float: right;
                    font-size: 12px;
                    background-color: #00d363;
                    border: none;
                  "
                  href="#affichercandModal"
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#affichercand"
                  @click="getOffresDemandes(off.id)"
                >
                  <span>Consulter les candidatures</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="modal fade"
      id="ajoutoffre"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ajoutoffreLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="ajoutoffreLabel"
              style="margin-left: auto; font-size: 37px; font-family: revert"
            >
              Ajout offre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <form class="row">
              <div class="col-md-6" style="text-align: left">
                <div class="form-group">
                  <input
                    style="width: 100%"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Titre"
                    v-model="form.titre"
                  />
                </div>
                <div class="form-group mt-3">
                  <select
                    style="width: 100%"
                    class="form-select"
                    v-model="form.secteur"
                    aria-label="Default select example"
                  >
                    <b-form-select-option
                      style="color: rgb(0, 0, 0); font-size: 1em"
                      disabled
                      >Catégorie</b-form-select-option
                    >
                    <option
                      v-for="sec in secteurs"
                      :key="sec.id"
                      :value="sec.id"
                    >
                      {{ sec.nom }}
                    </option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <textarea
                    type="text"
                    style="width: 100%"
                    class="form-control"
                    required
                    placeholder="Avantages"
                    v-model="form.avantages"
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    type="text"
                    style="width: 100%"
                    class="form-control"
                    required
                    placeholder="Exigences"
                    v-model="form.exigences"
                  />
                </div>
              </div>
              <div class="col-md-6" style="text-align: left">
                <div class="form-group">
                  <input
                    style="width: 100%"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Diplome"
                    v-model="form.diplome"
                  />
                </div>
                <div class="form-group mt-3">
                  <select
                    style="width: 100%"
                    class="form-select"
                    name=""
                    v-model="form.region"
                    aria-label="Default select example"
                  >
                    <b-form-select-option
                      style="color: rgb(0, 0, 0); font-size: 1em"
                      disabled
                      >Région</b-form-select-option
                    >
                    <option
                      v-for="reg in regions"
                      :key="reg.id"
                      :value="reg.id"
                    >
                      {{ reg.nom }}
                    </option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <textarea
                    type="text"
                    style="width: 100%"
                    class="form-control"
                    required
                    placeholder="Outils /Logiciels"
                    v-model="form.outils"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    style="width: 100%"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Salaire"
                    v-model="form.salaire"
                  />
                </div>
              </div>

              <div class="form-group mt-3">
                <textarea
                  type="text"
                  style="width: 100%"
                  class="form-control"
                  required
                  placeholder="Description"
                  v-model="form.description"
                />
              </div>

              <div class="form-group mt-3" style="display: flex">
                <label for="rythme" style="font-size: 1em"
                  >Rythme de travail :
                </label>
                <select
                  style="margin-left: 5px"
                  v-model="selectedRythme"
                  class="rythme"
                  multiple
                >
                  <option value="temps plein">Temps plein</option>
                  <option value="temps partiel">Temps partiel</option>
                  <option value="alternance">Alternance</option>
                  <option value="saisonnier">Saisonnier</option>
                </select>
              </div>
              <div class="form-group mt-3" style="display: flex">
                <label for="contrat" style="font-size: 1em"
                  >Type de contrat :
                </label>
                <select
                  style="margin-left: 5px"
                  v-model="selectedContrat"
                  class="contrat"
                  multiple
                >
                  <option value="cdi">CDI</option>
                  <option value="cdd">CDD</option>
                  <option value="svip">SIVP</option>
                  <option value="karama">KARAMA</option>
                </select>
              </div>
              <div class="form-group mt-3" style="display: flex">
                <label
                  for="contrat"
                  style="width: 114px; margin-left: -15px; font-size: 1em"
                  >Expérience :
                </label>
                <select
                  style="margin-left: 5px"
                  class="experience"
                  v-model="selectedExperience"
                  multiple
                >
                  <option value="0" style="width: 191px">
                    Débutant(e) accepté(e)
                  </option>
                  <option value="1an">+ de 1 an</option>
                  <option value="2ans">+ de 2 ans</option>
                  <option value="3ans">+ de 3 ans</option>
                  <option value="5ans">+ de 5 ans</option>
                  <option value="10ans">+ de 10 ans</option>
                </select>
              </div>

              <div class="form-group mt-3" style="display: flex">
                <label
                  for="competences"
                  style="
                    width: 114px;
                    margin-top: 18px;
                    margin-left: 0px;
                    font-size: 1em;
                  "
                  >Compétences:
                </label>

                <div style="margin-left: 3px" class="competences">
                  <label>
                    <input
                      type="checkbox"
                      v-model="checked"
                      value="Engagement"
                    /><span> Engagement</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Motivation"
                    /><span>Motivation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Curiosité"
                    /><span>Curiosité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Esprit d'équipe"
                    /><span>Esprit d'équipe</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Organisation"
                    /><span>Organisation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Autonomie"
                    /><span>Autonomie</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Empathie"
                    /><span>Empathie</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Leadership"
                    /><span>Leadership</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Créativité"
                    /><span>Créativité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Negociation"
                    /><span>Negociation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Adaptation"
                    /><span>Adaptation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Humour"
                    /><span>Humour</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Honnêteté"
                    /><span>Honnêteté</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Enthousiasme"
                    /><span>Enthousiasme</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Écoute"
                    /><span>Écoute</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Jovialité"
                    /><span>Jovialité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Patience"
                    /><span>Patience</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Résilience"
                    /><span>Résilience</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Assertivité"
                    /><span>Assertivité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Optimisme"
                    /><span>Optimisme</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Rigueur"
                    /><span>Rigueur</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Passion"
                    /><span>Passion</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Courtoisie"
                    /><span>Courtoisie</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Esprit d'entreprendre"
                    /><span>Esprit d'entreprendre</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checked"
                      value="Ouverture d'esprit"
                    /><span>Ouverture d'esprit</span></label
                  >
                </div>
              </div>
              <div class="form-group mt-3" style="display: flex">
                <label for="contrat" style="font-size: 1em;margin"
                  >Date de début:
                </label>

                <input
                  type="date"
                  v-model="form.date_debut"
                  placeholder="Date de debut"
                  style="width: 26%; height: 33px; margin-left: 25px"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              style="width: 103px; margin-right: 50px; margin-bottom: 30px"
              type="submit"
              class="btn btn-success"
              @click="createOffre()"
              value="save"
            >
              créer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- start update offre -->
    <div
      class="modal fade"
      id="editoffre"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editoffreLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="editoffreLabel"
              style="margin-left: auto; font-size: 37px; font-family: revert"
            >
              Edit offre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <form class="row" @submit.prevent="updateOffre(form)">
              <div class="col-md-6" style="text-align: left">
                <div class="form-group">
                  <input
                    style="width: 100%"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Titre"
                    v-model="form.titre"
                  />
                </div>
                <div class="form-group mt-3">
                  <select
                    style="width: 100%"
                    class="form-select"
                    v-model="form.secteur"
                    aria-label="Default select example"
                  >
                    <b-form-select-option
                      style="color: rgb(0, 0, 0); font-size: 1em"
                      disabled
                      >Catégorie</b-form-select-option
                    >
                    <option
                      v-for="sec in secteurs"
                      :key="sec.id"
                      :value="sec.id"
                    >
                      {{ sec.nom }}
                    </option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <textarea
                    type="text"
                    style="width: 100%"
                    class="form-control"
                    required
                    placeholder="Avantages"
                    v-model="form.avantages"
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    type="text"
                    style="width: 100%"
                    class="form-control"
                    required
                    placeholder="Exigences"
                    v-model="form.exigences"
                  />
                </div>
              </div>
              <div class="col-md-6" style="text-align: left">
                <div class="form-group">
                  <input
                    style="width: 100%"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Diplome"
                    v-model="form.diplome"
                  />
                </div>
                <div class="form-group mt-3">
                  <select
                    style="width: 100%"
                    class="form-select"
                    name=""
                    v-model="form.region"
                    aria-label="Default select example"
                  >
                    <b-form-select-option
                      style="color: rgb(0, 0, 0); font-size: 1em"
                      disabled
                      >Région</b-form-select-option
                    >
                    <option
                      v-for="reg in regions"
                      :key="reg.id"
                      :value="reg.id"
                    >
                      {{ reg.nom }}
                    </option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <textarea
                    type="text"
                    style="width: 100%"
                    class="form-control"
                    required
                    placeholder="Outils /Logiciels"
                    v-model="form.outils"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    style="width: 100%"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Salaire"
                    v-model="form.salaire"
                  />
                </div>
              </div>

              <div class="form-group mt-3">
                <textarea
                  type="text"
                  style="width: 100%"
                  class="form-control"
                  required
                  placeholder="Description"
                  v-model="form.description"
                />
              </div>

              <div class="form-group mt-3" style="display: flex">
                <label for="rythme" style="font-size: 1em"
                  >Rythme de travail :
                </label>
                <select
                  style="margin-left: 5px"
                  v-model="selectedRythmeUpdate"
                  class="rythme"
                  multiple
                >
                  <option value="temps plein">Temps plein</option>
                  <option value="temps partiel">Temps partiel</option>
                  <option value="alternance">Alternance</option>
                  <option value="saisonnier">Saisonnier</option>
                </select>
              </div>
              <div class="form-group mt-3" style="display: flex">
                <label for="contrat" style="font-size: 1em"
                  >Type de contrat :
                </label>
                <select
                  style="margin-left: 5px"
                  v-model="selectedContratUpdate"
                  class="contrat"
                  multiple
                >
                  <option value="cdi">CDI</option>
                  <option value="cdd">CDD</option>
                  <option value="svip">SIVP</option>
                  <option value="karama">KARAMA</option>
                </select>
              </div>
              <div class="form-group mt-3" style="display: flex">
                <label
                  for="contrat"
                  style="width: 114px; margin-left: -15px; font-size: 1em"
                  >Expérience :
                </label>
                <select
                  style="margin-left: 5px"
                  class="experience"
                  v-model="selectedExperienceUpdate"
                  multiple
                >
                  <option value="0" style="width: 191px">
                    Débutant(e) accepté(e)
                  </option>
                  <option value="1">+ de 1 an</option>
                  <option value="2">+ de 2 ans</option>
                  <option value="3">+ de 3 ans</option>
                  <option value="5">+ de 5 ans</option>
                  <option value="10">+ de 10 ans</option>
                </select>
              </div>

              <div class="form-group mt-3" style="display: flex">
                <label
                  for="competences"
                  style="
                    width: 114px;
                    margin-top: 18px;
                    margin-left: 0px;
                    font-size: 1em;
                  "
                  >Compétences:
                </label>

                <div style="margin-left: 3px" class="competences">
                  <label>
                    <input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Engagement"
                    /><span> Engagement</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Motivation"
                    /><span>Motivation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Curiosité"
                    /><span>Curiosité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Esprit d'équipe"
                    /><span>Esprit d'équipe</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Organisation"
                    /><span>Organisation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Autonomie"
                    /><span>Autonomie</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Empathie"
                    /><span>Empathie</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Leadership"
                    /><span>Leadership</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Créativité"
                    /><span>Créativité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Negociation"
                    /><span>Negociation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Adaptation"
                    /><span>Adaptation</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Humour"
                    /><span>Humour</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Honnêteté"
                    /><span>Honnêteté</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Enthousiasme"
                    /><span>Enthousiasme</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Écoute"
                    /><span>Écoute</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Jovialité"
                    /><span>Jovialité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Patience"
                    /><span>Patience</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Résilience"
                    /><span>Résilience</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Assertivité"
                    /><span>Assertivité</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Optimisme"
                    /><span>Optimisme</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Rigueur"
                    /><span>Rigueur</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Passion"
                    /><span>Passion</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Courtoisie"
                    /><span>Courtoisie</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Esprit d'entreprendre"
                    /><span>Esprit d'entreprendre</span></label
                  >
                  <label
                    ><input
                      type="checkbox"
                      v-model="checkedUpdate"
                      value="Ouverture d'esprit"
                    /><span>Ouverture d'esprit</span></label
                  >
                </div>
              </div>
              <div class="form-group mt-3" style="display: flex">
                <label for="contrat" style="font-size: 1em;margin"
                  >Date de début:
                </label>

                <input
                  type="date"
                  v-model="form.date_debut"
                  placeholder="Date de debut"
                  style="width: 26%; height: 33px; margin-left: 25px"
                />
              </div>
              <div class="modal-footer">
                <button
                  style="width: 103px; margin-right: 50px; margin-bottom: 30px"
                  type="submit"
                  class="btn btn-success"
                  value="save"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- start show offre -->
    <div
      class="modal fade"
      id="viewoffre"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editoffreLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="viewoffreLabel"
              style="margin-left: auto; font-size: 37px; font-family: revert"
            >
              détails offre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="row" style="text-align:initial" >
              <h3>titre:{{ offre.titre }}</h3>
              <h3>description:{{ offre.description }}</h3>
              <h3>type de contrat:{{ offre.type_contrat}}</h3>
              <h3>rythme de travail:{{ offre.rythme}}</h3>
              <h3>region:{{ offre.region_id }}</h3>
              <h3>date de debut:{{ offre.date_debut }}</h3>
              <h3>diplome:{{ offre.diplome }}</h3>
              <h3>exigences:{{offre.exigences}}</h3>
              <h3>avantages:{{offre.avantages}}</h3>
              <h3>outils:{{offre.outils}}</h3>
              <h3>competences:{{offre.competences}}</h3>
              <h3>experience:{{offre.experience}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="affichercand"
      tabindex="-1"
      role="dialog"
      aria-labelledby="affichercandLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="container">
            <div class="table">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>ID</th>

                    <th>Candidat</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(dem, i) in demandes"
                    :key="dem.id"
                    :value="dem.id"
                  >
                    <td>
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox1"></label>
                      </span>
                    </td>
                    <td>{{ i + 1 }}</td>

                    <td>
                      <a  :href="`/detailsCandidat/` + dem.condidat.id">{{ dem.condidat.user.nom }} {{ dem.condidat.user.prenom }}</a>
                    </td>
                    <td>
                      <span
                        v-if="dem.status == 'en attente'"
                        class="status text-orange-500"
                        >&bull;</span
                      >
                      <span
                        v-if="dem.status == 'acceptée'"
                        class="status text-success"
                        >&bull;</span
                      >
                      <span
                        v-if="dem.status == 'refusée'"
                        class="status text-danger"
                        >&bull;</span
                      >{{ dem.status }}
                    </td>

                    <td style="display: flex">
                      <button
                        type="button"
                        class="btn btn-link shadow-none"
                        @click="rejectcand(dem.id)"
                      >
                        <a>
                          <i
                            data-toggle="tooltip"
                            style="
                              font-size: 17px;
                              color: red;
                              margin-right: -12p;
                            "
                            class="fa material-icons"
                            >&#xf00d;</i
                          ></a
                        >
                      </button>

                      <button
                        type="button"
                        class="btn btn-link shadow-none"
                        
                        @click="acceptcand(dem.id)"
                      >
                        <a>
                          <i
                            class="material-icons fas"
                            data-toggle="tooltip"
                            title="Delete"
                            style="color: green; font-size: 17px"
                            >&#xf058;</i
                          ></a
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
      offres: [],
      offre: {},
      checked: [],
      checkedUpdate: [],
      secteurs: [],
      regions: [],
      selectedExperience: [],
      selectedExperienceUpdate: [],
      selectedContrat: [],
      selectedContratUpdate: [],
      selectedRythme: [],
      selectedRythmeUpdate: [],
      selectedDate: [],
      demandes: [],
      form: {},
      user: {},
      selected: "selected",
      
    };
  },
  created() {
    const token = JSON.parse(localStorage.getItem("token"));
    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    this.user = JSON.parse(localStorage.getItem("user"));
    // console.log(this.user);

    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
      // console.log(this.regions);
    });
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
      //   console.log(this.categories);
    });
    this.axios
      .get(`http://127.0.0.1:8000/api/offreEntreprise`)
      .then((response) => {
        this.offres = response.data.offres;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    getOffresDemandes(id) {
      this.axios
        .get(`http://127.0.0.1:8000/api/Offredemandes/${id}`)
        .then((response) => {
          this.demandes = response.data.demandes;
          //console.log(this.demandes);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteOffre(id) {
      this.axios
        .delete(`http://127.0.0.1:8000/api/deleteoffre/${id}`)
        .then((response) => {
          let i = this.offres.map((data) => data.id).indexOf(id);
          this.offres.splice(i, 1);
          alert("offre supprimée");
        });
    },
     showOffre(id) {
      this.axios
        .get(`http://127.0.0.1:8000/api/offre/${id}`)
        .then((response) => {
          this.offre = response.data.offre;
          //console.log(this.demandes);
        })
        .catch((error) => {
          console.log(error);
        });
     },

    createOffre() {
      const offreformdata = new FormData();

      offreformdata.append("entreprise_id", this.user.id);
      offreformdata.append("titre", this.form.titre);
      offreformdata.append("region_id", this.form.region);
      offreformdata.append("experience", this.selectedExperience);
      offreformdata.append("competences", this.checked);
      offreformdata.append("type_contrat", this.selectedContrat);
      offreformdata.append("rythme", this.selectedRythme);
      offreformdata.append("description", this.form.description);
      offreformdata.append("diplome", this.form.diplome);
      offreformdata.append("secteur_id", this.form.secteur);
      offreformdata.append("date_debut", this.form.date_debut);
      offreformdata.append("salaire", this.form.salaire);
      offreformdata.append("outils", this.form.outils);
      offreformdata.append("avantages", this.form.avantages);
      offreformdata.append("exigences", this.form.exigences);
      console.log(offreformdata);
      this.axios
        .post("http://127.0.0.1:8000/api/addoffre", offreformdata)
        .then((response) => {
          document.getElementsByClassName("btn-close")[0].click();
          alert("offre ajoutée");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editOffre(off) {
      this.form = { ...off };
    },
    updateOffre(form) {
      const offreupformdata = new FormData();


      offreupformdata.append("titre", this.form.titre);
      offreupformdata.append("region_id", this.form.region);
      offreupformdata.append("experience", this.selectedExperienceUpdate);
      offreupformdata.append("competences", this.checkedUpdate);
      offreupformdata.append("type_contrat", this.selectedContratUpdate);
      offreupformdata.append("rythme", this.selectedRythmeUpdate);
      offreupformdata.append("description", this.form.description);
      offreupformdata.append("diplome", this.form.diplome);
      offreupformdata.append("secteur_id", this.form.secteur);
      offreupformdata.append("date_debut", this.form.date_debut);
      offreupformdata.append("salaire", this.form.salaire);
      offreupformdata.append("outils", this.form.outils);
      offreupformdata.append("avantages", this.form.avantages);
      offreupformdata.append("exigences", this.form.exigences);
      console.log(this.form.titre);
      this.axios
        .post(
          `http://localhost:8000/api/updateoffre/` + form.id,
          offreupformdata
        )
        .then((response) => {
            document.getElementsByClassName("btn-close")[0].click();
          alert("offre updated");
          console.log(response);
        });
    },
    showOffre(id) {
      this.axios
        .get(`http://localhost:8000/api/offre/${id}`)
        .then((response) => {
          this.offre = response.data.offre;
          
          console.log(response);
        });
    },
    closeOffre(id) {
      this.axios
        .put(`http://127.0.0.1:8000/api/closeoffre/${id}`)
        .then((response) => {
          alert("offre fermée");
          // console.log(response);
          window.location.href = "/entreprise/offre";
        });
    },
    activeOffre(id) {
      this.axios
        .put(`http://localhost:8000/api/activeoffre/${id}`)
        .then((response) => {
          alert("offre activée");
          window.location.href = "/entreprise/offre";
        });
    },
    acceptcand(id) {
      this.axios
        .put(`http://localhost:8000/api/acceptcand/${id}`)
        .then((response) => {
          alert("candidature acceptée");
          window.location.href = "/entreprise/offre";
        });
    },
     rejectcand(id) {
      this.axios
        .put(`http://localhost:8000/api/rejectcand/${id}`)
        .then((response) => {
          alert("candidature réfusée");
          window.location.href = "/entreprise/offre";
          
        });
    },
  },
};
</script>
<!--<style lang="scss" src="../../assets/scss/material-dashboard.scss"></style>-->
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
.mt-3 {
  margin-top: 4rem !important;
}
</style>
