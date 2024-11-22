<template>
  <div>
    <header><navbar /></header>
    <div class="bradcam_area bradcam_bg_1">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="bradcam_text">
              <h3>Mon Compte</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ui-bg-overlay-container">
      <div class="ui-bg-overlay opacity-25"></div>
      <ul
        class="nav nav-tabs tabs-alt justify-content-center border-transparent"
      >
        <li class="nav-item">
          <button
            class="nav-link active"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="true"
          >
            Profile
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            id="candidature-tab"
            data-bs-toggle="tab"
            data-bs-target="#candidature"
            type="button"
            role="tab"
            aria-controls="candidature"
            aria-selected="true"
          >
            Candidatures
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            id="message-tab"
            data-bs-toggle="tab"
            data-bs-target="#message"
            type="button"
            role="tab"
            aria-controls="message"
            aria-selected="true"
          >
            Messages
          </button>
        </li>
        <button
          class="nav-link"
          id="document-tab"
          data-bs-toggle="tab"
          data-bs-target="#document"
          type="button"
          role="tab"
          aria-controls="document"
          aria-selected="true"
        >
          Documents
        </button>
      </ul>
    </div>
    <!---
    ---- start tab Profile
    ----->

    <div class="tab-content mt-5" id="myTab" style="background-color: white">
      <div
        class="tab-pane fade show active"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <vue-html2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="false"
          :paginate-elements-by-height="1400"
          filename="cv"
          :pdf-quality="2"
          :manual-pagination="false"
          pdf-format="a4"
          margin="10px"
          pdf-orientation="portrait"
          pdf-content-width="800px"
          @hasStartedGeneration="hasStartedGeneration()"
          @hasGenerated="hasGenerated($event)"
          ref="html2Pdf"
          ><section slot="pdf-content">
            <div
              class="w3-content w3-margin-top"
              style="max-width: 800px; margin-left: 20px; margin-right: 20px"
            >
              <!-- The Grid -->
              <div class="w3-row-padding">
                <!-- Left Column -->
                <div class="w3-third">
                  <div class="w3-white w3-text-grey w3-card-4">
                    <div class="w3-display-container">
                      <div
                        class="w3-display-bottomleft w3-container w3-text-black"
                      >
                        <h2>{{ user.nom }} {{ user.prenom }}</h2>
                      </div>
                    </div>
                    <div class="w3-container">
                      <p>
                        <i
                          class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"
                        ></i
                        >{{ condidat.secteur.nom }}
                      </p>
                      <p>
                        <i
                          class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"
                        ></i
                        >{{ condidat.region.nom }}{{ condidat.ville }}
                      </p>
                      <p>
                        <i
                          class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"
                        ></i
                        >{{ user.email }}
                      </p>
                      <p>
                        <i
                          class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"
                        ></i
                        >{{ condidat.tel }}
                      </p>
                      <hr />
                      <div>
                        <p>{{ condidat.bio }}</p>
                      </div>
                      <p class="w3-large">
                        <b
                          ><i
                            class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"
                          ></i
                          >Compétences</b
                        >
                      </p>
                      <p>{{ condidat.competences }}</p>

                      <br />

                      <p class="w3-large w3-text-theme">
                        <b
                          ><i
                            class="fa fa-globe fa-fw w3-margin-right w3-text-teal"
                          ></i
                          >Langues</b
                        >
                      </p>
                      <p>{{ condidat.langues }}</p>

                      <br />
                    </div>
                  </div>
                  <br />

                  <!-- End Left Column -->
                </div>

                <!-- Right Column -->
                <div class="w3-twothird">
                  <div class="w3-container w3-card w3-white w3-margin-bottom">
                    <h2 class="w3-text-grey w3-padding-16">
                      <i
                        class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                      ></i
                      >Experiences
                    </h2>

                    <div
                      class="w3-container"
                      v-for="exp in experiences"
                      :key="exp.id"
                      :value="exp.id"
                    >
                      <h3>{{ exp.nombre_annee }}</h3>
                      <h5 class="w3-opacity">
                        <b>{{ exp.poste }}</b>
                      </h5>
                      <h6 class="w3-text-teal">
                        <i class="fa fa-calendar fa-fw w3-margin-right"></i
                        >{{ exp.date_debut }}->
                        <span class="w3-tag w3-teal w3-round">{{
                          exp.date_fin
                        }}</span>
                      </h6>
                      <p>
                        {{ exp.description }}
                      </p>
                      <hr />
                    </div>
                  </div>

                  <div class="w3-container w3-card w3-white">
                    <h2 class="w3-text-grey w3-padding-16">
                      <i
                        class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                      ></i
                      >Education
                    </h2>
                    <div
                      class="w3-container"
                      v-for="forma in formations"
                      :key="forma.id"
                      :value="forma.id"
                    >
                      <h5 class="w3-opacity">
                        <b>{{ forma.etablissement }}</b>
                      </h5>
                      <h6 class="w3-text-teal">
                        <i class="fa fa-calendar fa-fw w3-margin-right"></i
                        >{{ forma.date_debut }}->
                        <span class="w3-tag w3-teal w3-round">{{
                          forma.date_fin
                        }}</span>
                      </h6>
                      <p>{{ forma.diplome }}</p>
                      <hr />
                    </div>
                  </div>

                  <!-- End Right Column -->
                </div>

                <!-- End Grid -->
              </div>

              <!-- End Page Container -->
            </div>
          </section>
        </vue-html2pdf>
        <div class="container" style="text-align: initial; display: block">
          <div class="col-lg-12">
            <h3 class="text-dark">Informations Générales</h3>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="job-detail mt-2 p-4">
                <div class="custom-form">
                  <form>
                    <div class="row">
                      <div class="col-md-8">
                        <div class="form-group app-label mb-5">
                          <label for="bio" class="text-muted">Bio</label>
                          <textarea
                            v-model="condidat.bio"
                            rows="5"
                            class="form-control resize-v post-area"
                            placeholder="Share your thoughts...."
                          ></textarea>
                        </div>
                      </div>
                      <!--<div class="col-md-4">
                        <div class="file-field" style="text-align: center">
                          <div class="mb-4">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                              class="rounded-circle z-depth-1-half avatar-pic"
                              alt="example placeholder avatar"
                            />
                          </div>
                          <div class="d-flex justify-content-center">
                            <div
                              class="btn btn-mdb-color btn-rounded float-left"
                            >
                              <span>Add photo</span>
                              <input
                                type="file"
                                class="form-control"
                                v-on:change="createAttachImage()"
                                ref="createImage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>-->
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="frist-name" class="text-muted">Nom</label>
                          <input
                            v-model="user.nom"
                            type="text"
                            class="form-control resume"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="surname-name" class="text-muted"
                            >Prénom</label
                          >
                          <input
                            v-model="user.prenom"
                            type="text"
                            class="form-control resume"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 18px">
                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="date-of-birth" class="text-muted"
                            >Date de naissance</label
                          >
                          <input
                            v-model="condidat.date_de_naissance"
                            id="date-of-birth"
                            type="date"
                            class="form-control resume"
                            placeholder="13-02-1999"
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="General" class="text-muted"
                            >Civilité</label
                          >
                          <div class="form-button">
                            <select
                              class="nice-select"
                              style="width: 100%"
                              v-model="condidat.civilite"
                            >
                              <option value="homme">
                                {{
                                  condidat.civilite == "homme"
                                    ? "Homme"
                                    : "Homme"
                                }}
                              </option>
                              <option value="femme">
                                {{
                                  condidat.civilite == "femme"
                                    ? "Femme"
                                    : "Femme"
                                }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="company-name" class="text-muted"
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <h3 class="text-dark">Informations de contact</h3>
            </div>
          </div>

          <div class="row" style="margin-bottom: -40px">
            <div class="col-lg-12">
              <div class="job-detail mt-2 p-4">
                <div class="custom-form">
                  <form>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="frist-name" class="text-muted"
                            >Ville</label
                          >
                          <input
                            v-model="condidat.ville"
                            type="text"
                            class="form-control resume"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="gouvernorat" class="text-muted"
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

                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="phone" class="text-muted"
                            >Numéro de téléphone</label
                          >
                          <input
                            v-model="condidat.tel"
                            type="text"
                            class="form-control resume"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group app-label">
                          <label for="e-mail" class="text-muted">E-mail</label>
                          <input
                            v-model="user.email"
                            type="text"
                            class="form-control resume"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-4">
              <h3 class="text-dark">Compétences</h3>
            </div>
            <div class="col-lg-4">
              <h3 class="text-dark">
                Education
                <a
                  type="button"
                  class="btn icon-btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addedu"
                  data-bs-whatever="@edu"
                  href="#"
                >
                  <span
                    class="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"
                  ></span>
                  +
                </a>
              </h3>
            </div>
            <div class="col-lg-4">
              <h3 class="text-dark">
                Experience
                <a
                  type="button"
                  class="btn icon-btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addexp"
                  data-bs-whatever="@exp"
                  href="#"
                >
                  <span
                    class="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"
                  ></span>
                  +
                </a>
              </h3>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="job-detail mt-2 p-4">
                <div class="custom-form">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group app-label">
                          <label for="skills" class="text-muted"
                            >Compétences</label
                          >
                          <input
                            v-model="condidat.competences"
                            type="text"
                            class="form-control resume"
                            placeholder="HTML, CSS, PHP, javascript, ..."
                          />
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="form-group app-label">
                          <label for="skill proficiency" class="text-muted"
                            >langues</label
                          >
                          <input
                            v-model="condidat.langues"
                            type="text"
                            class="form-control resume"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-----
          ------ start education form-----
          ------>

          <!------- 
          --------- start education modal--------
          --------->

          <div
            class="row modal fade"
            id="addedu"
            tabindex="-1"
            aria-labelledby="addeduLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="addeduLabel">
                    Ajouter vos formations
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="col-lg-12">
                  <div class="job-detail mt-2 p-4">
                    <div class="custom-form">
                      <form>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group app-label">
                              <label for="graduation" class="text-muted"
                                >Diplome</label
                              >
                              <input
                                v-model="education.diplome"
                                type="text"
                                class="form-control resume"
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group app-label">
                              <label for="university/college" class="text-muted"
                                >Etablissement</label
                              >
                              <input
                                v-model="education.etablissement"
                                type="text"
                                class="form-control resume"
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group app-label">
                                  <label for="date-from" class="text-muted"
                                    >Date Début</label
                                  >
                                  <input
                                    v-model="education.date_debut"
                                    type="date"
                                    class="form-control resume"
                                  />
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="form-group app-label">
                                  <label for="date-from" class="text-muted"
                                    >Date Fin</label
                                  >
                                  <input
                                    v-model="education.date_fin"
                                    type="date"
                                    class="form-control resume"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="createEdu()"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!------------
----------- end education modal
----------->

          <!--------------
          ----------   start experience modal
          ------>
          <div
            class="row modal fade"
            id="addexp"
            tabindex="-1"
            aria-labelledby="addexpLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="addexpLabel">
                    Ajouter vos expériences
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="col-lg-12">
                  <div class="job-detail mt-2 p-4">
                    <div class="custom-form">
                      <form>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group mt-3" style="display: flex">
                              <label for="company-name" class="text-muted"
                                >Niveau d'experience Professionelles :</label
                              >
                              <select
                                class="ml-3"
                                style="margin-top: -9px"
                                v-model="condidat.niveau"
                              >
                                <option :value="undefined" disabled>
                                  Niveau
                                </option>
                                <option value="0">Etudiant</option>
                                <option value="1">Débutant</option>
                                <option value="2">
                                  Avec Expérience (Non-Manager)
                                </option>
                                <option value="3">Responsable (Manager)</option>
                                <option value="4">
                                  Je suis au chômage et je cherche un travail
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group mt-3" style="display: flex">
                              <label for="company-name" class="text-muted"
                                >Nombre d'année :</label
                              >
                              <select
                                style="margin-left: 5px"
                                class="experience"
                                v-model="selectedExperience"
                                multiple
                              >
                                <option value="0" style="width: 95px">
                                  Débutant
                                </option>
                                <option value="1an">+ de 1 an</option>
                                <option value="2ans">+ de 2 ans</option>
                                <option value="3ans">+ de 3 ans</option>
                                <option value="5ans">+ de 5 ans</option>
                                <option value="10ans">+ de 10 ans</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group app-label">
                              <label for="company-name" class="text-muted"
                                >Nom de la société</label
                              >
                              <input
                                v-model="experience.nom_societe"
                                type="text"
                                class="form-control resume"
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group app-label">
                              <label for="job-position" class="text-muted"
                                >Titre de poste/mission</label
                              >
                              <input
                                v-model="experience.poste"
                                type="text"
                                class="form-control resume"
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group app-label">
                                  <label for="date-from" class="text-muted"
                                    >Date Début</label
                                  >
                                  <input
                                    v-model="experience.data_debut"
                                    type="date"
                                    class="form-control resume"
                                  />
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="form-group app-label">
                                  <label for="date-to" class="text-muted"
                                    >Date fin</label
                                  >
                                  <input
                                    v-model="experience.date_fin"
                                    type="date"
                                    class="form-control resume"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="form-group app-label">
                              <label for="addition-information-1"
                                >Description</label
                              >
                              <textarea
                                v-model="experience.description"
                                rows="4"
                                class="form-control resume"
                                placeholder=""
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-success"
                            @click="createExp()"
                          >
                            Ajouter
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--------------
          ----------   end experience modal
          ------>

          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <input
                  type="submit"
                  name="send"
                  class="submitBnt btn btn-primary mt-5"
                  value="Créer Cv"
                  @click="updateCV(condidat)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <!--  <button
        v-on:click="exportPdf()"
        class="submitBnt btn btn-primary mt-5"
        id="btn"
      >
        pdf
      </button>-->
    </div>

    <!---
    ---- end tab Profile
    ----->
    <!---
    ---- start tab Candidatures
    ----->
    <div
      class="tab-pane fade"
      id="candidature"
      role="tabpanel"
      aria-labelledby="candidature-tab"
    >
      <div
        class="table"
        style="width: 70%;margin: 0 auto !important;
}"
      >
        <div class="table-wrapper">
          <table class="table table-striped table-hover mt-3">
            <thead>
              <tr>
                <th style="width: 24%">Offre</th>
                <th>Nom de l'entreprise</th>
                <th>Etat Demande</th>
                <th>Date d'envoi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cand in candidatures" :key="cand.id">
                <td>
                  <a :href="`/detailsOffre/` + cand.offre.id">{{
                    cand.offre.titre
                  }}</a>
                </td>
                <td>{{ cand.offre.entreprise.nom_entreprise }}</td>
                <td>{{ cand.status }}</td>
                <td>02-02-22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!---
    ---- end tab Candidatures
    ----->
    <!---
    ---- start tab Documents
    ----->
    <div
      class="tab-pane fade"
      id="document"
      role="tabpanel"
      aria-labelledby="document-tab"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="mb-4">
              <label
                class="form-label"
                for="inputGroupFile01"
                style="display: flex"
                >Attacher votre cv</label
              >

              <div class="imag">
                <img class="imageDisplay" src="" ref="displayImage" />
              </div>
              <input
                type="file"
                class="form-control"
                v-on:change="createAttachFile()"
                ref="createfile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---
    ---- end tab Documents
    ----->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import jsPDF from "jspdf";
import html2PDF from "jspdf-html2canvas";
import VueHtml2pdf from "vue-html2pdf";

export default {
  props: {
    htmlToPdfOptions: {
      margin: 50,

      filename: `cv`,

      image: {
        type: "jpeg",
        quality: 0.98,
      },

      enableLinks: false,

      html2canvas: {
        scale: 1,
        useCORS: true,
      },

      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    },
  },
  data() {
    return {
      form: {},
      user: {},
      regions: [],
      secteurs: [],
      selectedExperience: [],
      selectedNiveau: [],
      experience: {},
      education: {},
      selectedSecteur: [],
      candidatures: [],
      condidat: {},
      document: {},
      experiences: {},
      formations: {},
    };
  },

  computed: {
    currentUser() {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    createEdu() {
      const Eduformdata = new FormData();

      Eduformdata.append("diplome", this.education.diplome);
      Eduformdata.append("etablissement", this.education.etablissement);
      Eduformdata.append("date_debut", this.education.date_debut);
      Eduformdata.append("date_fin", this.education.date_fin);

      // console.log(Eduformdata);
      this.axios
        .post("http://127.0.0.1:8000/api/addEdu", Eduformdata)
        .then((response) => {
          //  console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    updateCV(condidat) {
      const CVupformdata = new FormData();

      CVupformdata.append("region_id", this.form.region);
      CVupformdata.append("competences", this.condidat.competences);
      CVupformdata.append("ville", this.condidat.ville);
      CVupformdata.append("bio", this.condidat.bio);
      CVupformdata.append("secteur_id", this.form.secteur);
      CVupformdata.append("niveau", this.condidat.niveau);
      CVupformdata.append("tel", this.condidat.tel);
      CVupformdata.append("langues", this.condidat.langues);
      CVupformdata.append("civilite", this.condidat.civilite);
      CVupformdata.append("date_de_naissance", this.condidat.date_de_naissance);

      this.axios
        .post(`http://localhost:8000/api/updateCV/` + condidat.id, CVupformdata)
        .then((response) => {
          console.log(response);
        });
    },
    createExp() {
      const Expformdata = new FormData();

      Expformdata.append("condidat_id", this.condidat.id);

      Expformdata.append("nom_societe", this.experience.nom_societe);
      Expformdata.append("nombre_annee", this.selectedExperience);
      Expformdata.append("poste", this.experience.poste);
      Expformdata.append("date_fin", this.experience.date_fin);
      Expformdata.append("date_debut", this.experience.date_debut);
      Expformdata.append("description", this.experience.description);
      console.log(this.experience.nom_societe);
      console.log(this.experience.data_debut);
      console.log(this.experience.date_fin);
      console.log(this.experience.poste);
      console.log(this.experience.description);
      console.log(this.experience.nombre_annee);

      this.axios
        .post("http://127.0.0.1:8000/api/addExp", Expformdata)
        .then((response) => {
          //  console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    exportPdf() {
      this.$refs.html2Pdf.generatePdf();
    },
    download: async function () {
      const datahtml = document.getElementById("pageAdherentPDF");
      console.log(datahtml);
      html2PDF(datahtml).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("pdfdown.pdf");
      });
    },
    /*createAttachImage() {
      this.condidat.avatar = this.$refs.createImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.displayImage.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.condidat.avatar);
      console.log(this.condidat.avatar);
    },*/
    createAttachFile() {
      this.document.cv = this.$refs.createImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.displayImage.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.document.cv);
      console.log(this.document.cv);
    },
  },
  components: { Navbar, VueHtml2pdf },

  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    //console.log(this.form);

    const token = JSON.parse(localStorage.getItem("token"));

    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    //   console.log(this.axios.defaults.headers.common["Authorization"]);
    this.axios
      .get(`http://127.0.0.1:8000/api/candidatdata/${this.user.id}`)
      .then((res) => {
        this.condidat = res.data.candidat[0];
        console.log(this.condidat);
      });
    this.axios.get("http://127.0.0.1:8000/api/regions").then((res) => {
      this.regions = res.data.regions;
    });
    this.axios.get("http://127.0.0.1:8000/api/secteurs").then((res) => {
      this.secteurs = res.data.secteurs;
    });
    this.axios.get("http://127.0.0.1:8000/api/demandeCondidat").then((res) => {
      this.candidatures = res.data;
      //  console.log(this.candidatures);
    });
    this.axios
      .get("http://127.0.0.1:8000/api/expU/" + this.user.id)
      .then((res) => {
        this.experiences = res.data.experience;
        console.log(this.experiences);
      });
    this.axios
      .get("http://127.0.0.1:8000/api/formU/" + this.user.id)
      .then((res) => {
        this.formations = res.data.formation;
        console.log(this.formations);
      });
  },
};
</script>

<style scoped>
.text-white {
  color: #fff !important;
}
.ui-bg-overlay-container,
.ui-bg-video-container {
  position: relative;
}
.ui-bg-cover {
  background-position: center center;
  background-size: cover;
  background-image: url("@/assets/banner.png");
}
.ui-bg-overlay-container .ui-bg-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
}
.resize-v {
  resize: vertical;
}
.opacity-50 {
  opacity: 0.5 !important;
}

.ui-bg-overlay-container > *,
.ui-bg-video-container > * {
  position: relative;
}

@media (min-width: 992px) {
  .container,
  .container-fluid {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
.avatar-pic {
  width: 114px;
}
.media,
.media > :not(.media-body),
.jumbotron,
.card {
  -ms-flex-negative: 1;
  flex-shrink: 1;
}
.d-flex,
.d-inline-flex,
.media,
.media > :not(.media-body),
.jumbotron,
.card {
  -ms-flex-negative: 1;
  flex-shrink: 1;
}
.ui-w-100 {
  width: 100px !important;
  height: auto;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.opacity-75 {
  opacity: 0.75 !important;
}
.tabs-alt.nav-tabs .nav-link.active,
.tabs-alt.nav-tabs .nav-link.active:hover,
.tabs-alt.nav-tabs .nav-link.active:focus,
.tabs-alt > .nav-tabs .nav-link.active,
.tabs-alt > .nav-tabs .nav-link.active:hover,
.tabs-alt > .nav-tabs .nav-link.active:focus {
  -webkit-box-shadow: 0 -2px 0 #26b4ff inset;
  box-shadow: 0 -2px 0 #26b4ff inset;
}

.nav-tabs:not(.nav-fill):not(.nav-justified) .nav-link,
.nav-pills:not(.nav-fill):not(.nav-justified) .nav-link {
  margin-right: 0.125rem;
}
.nav-tabs.tabs-alt .nav-link,
.tabs-alt > .nav-tabs .nav-link {
  border-width: 0 !important;
  border-radius: 0 !important;
  background-color: transparent !important;
}
.nav-tabs .nav-link.active {
  border-bottom-color: #fff;
}
.form-group select {
  -webkit-appearance: progress-bar;
  -moz-appearance: none;
  appearance: revert;
}
select {
  -webkit-appearance: progress-bar;
  -moz-appearance: none;
  appearance: revert;
}
.nice-select {
  border-color: gray;
}
</style>
