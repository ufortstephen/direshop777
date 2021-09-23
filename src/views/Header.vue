<template>
  <div class="app__header">
    <!-- Header -->
    <header class="header">
      <div class="px-md-5">
        <div class="d-flex">
          <div class="header__socials">
            <ul>
              <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
              <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
              <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
              <li>Welcome to Direshop777</li>
            </ul>
          </div>
          <div class="header__dropdowns">
            <ul>
              <li>At.G</li>
              <li>
                <i class="fa fa-play mr-2" aria-hidden="true"></i>DIRESHOP
              </li>
              <li class="">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle header__dropdowns__country"
                    type="button"
                    id="triggerId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    USA
                  </button>
                  <div class="dropdown-menu" aria-labelledby="triggerId">
                    <div class="mb-4">
                      <h6 class="dropdown__text">Asia Pacific</h6>
                      <div class="header__dropdowns__country__content">
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Australia
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              India
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Malaysia
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Singapore
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Thailand
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Cambodia
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Indonesia
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              New Zealand
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              South Korea (HQ)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Cambodia
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Indonesia
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              New Zealand
                            </li>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              South Korea (HQ)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="dropdown__text">North America</h6>
                      <div class="header__dropdowns__country__content">
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Canada
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              USA(English)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              USA(Espanol)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="my-4">
                      <h6 class="dropdown__text">Latin America</h6>
                      <div class="header__dropdowns__country__content">
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Columbia
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Mexico
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul></ul>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <h6 class="dropdown__text">Europe</h6>
                      <div class="header__dropdowns__country__content">
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Russia
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              Turkey
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <li>
                              <i
                                class="fa fa-circle mr-2"
                                aria-hidden="true"
                              ></i>
                              United Kingdom
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <i class="fa fa-bell-o" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- Header -->

    <!-- Navbar -->
    <section class="bg-dark px-3 px-md-5">
      <nav class="navbar navbar-expand-sm navbar-light px-0">
        <a class="navbar-brand" href="#"
          ><img src="@/assets/logo (2).png" alt="" @click="goHome()" />

          <br />
        </a>
        <button
          class="navbar-toggler d-lg-none"
          id="navToggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-ato ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <span class="nav-link links">
                <el-dropdown>
                  <span
                    class="el-dropdown-link"
                    style="font-size: medium; color: #00b6f0"
                  >
                    COMPANY<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="dropdown__box">
                    <span
                      ><el-dropdown-item
                        >Mission and Vision
                      </el-dropdown-item></span
                    >
                    <span
                      ><el-dropdown-item>Why Direshop? </el-dropdown-item></span
                    >
                    <span
                      ><el-dropdown-item>Meet the Team </el-dropdown-item></span
                    >
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sr-only">(current)</span></span
              >
            </li>

            <li class="nav-item">
              <span class="nav-link links">
                <el-dropdown>
                  <span
                    class="el-dropdown-link"
                    style="font-size: medium; color: #00b6f0"
                  >
                    PRODUCTS<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="dropdown__box">
                    <span @click="goToBeautyStore()"
                      ><el-dropdown-item>Beauty </el-dropdown-item></span
                    >
                    <span @click="goToFashionStore()"
                      ><el-dropdown-item>Fashion </el-dropdown-item></span
                    >
                    <span @click="goToMachineStore()"
                      ><el-dropdown-item>Machine </el-dropdown-item></span
                    >
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sr-only">(current)</span></span
              >
            </li>

            <li class="nav-item">
              <a class="nav-link links" style="color: #00b6f0" href="#">SHOP</a>
            </li>
            <li class="nav-item">
              <button class="links nav-link" style="color: #00b6f0">
                LOGIN/CONTACT US
              </button>
            </li>
          </ul>

          <!-- <div class="">
            <i
              class="fa fa-search links navbar__search"
              id="search_icon"
              aria-hidden="true"
            ></i>
          </div> -->
        </div>
      </nav>
    </section>
    <!-- Navbar -->
    <!-- Hidden Search Display -->
    <section class="search__display d-none slideInDown" id="search__display">
      <div class="container">
        <div class="input-group mb-3 search_input_container">
          <input
            type="text"
            class="form-control"
            placeholder="Search Here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <span
              class="input-group-text btn-success bg-success border-none"
              id="basic-addon2"
              ><i class="fa fa-search" aria-hidden="true"></i
            ></span>
          </div>
        </div>
        <button
          class="btn btn-danger cancel-search-display"
          id="cancel_search_display"
        >
          &times;
        </button>
      </div>
    </section>
    <!-- Hidden Search Display -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToBeautyStore() {
      this.$router.push("/beauty_store");
    },
    goToMachineStore() {
      this.$router.push("/machine_store");
    },
    goToFashionStore() {
      this.$router.push("/fashion_store");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.app__header {
  /* background-color: rgb(0, 0, 0); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.el-dropdown-link:hover {
  cursor: pointer;
  color: #00b4f09b !important;
}
.navbar-expand-sm .navbar-nav {
  gap: 1rem;
}
.dropdown__box {
  width: 200px;
}
</style>