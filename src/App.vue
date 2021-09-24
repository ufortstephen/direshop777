<template>
  <div id="app">
    <!-- <appheader /> -->

    <router-view />
    <!-- <appFooter /> -->
    <button class="btn btn-dark modal__btn" id="modal__btn">
      O <br />
      P <br />E <br />
      N
    </button>
  </div>
</template>


<script>
import appFooter from "./views/Footer.vue";
import appheader from "./views/Header.vue";
export default {
  name: "App",
  components: {
    appheader,
    appFooter,
  },
};
</script>

<style>
:root {
  --bg-blue: #00b6f0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Lora", serif;
}

body {
  /* background-color: var(--bg-blue); */
  background-blend-mode: overlay;
  /* background-color: rgb(0, 0, 0); */
  /* z-index: 99999999999999; */
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 217, 0, 0.515);
}

button {
  border: none;
  outline: none;
  background-color: transparent;
}

button:focus {
  outline: none;
  border: none;
}

.header {
  background-color: var(--bg-blue);
  display: none;
}

.header ul {
  margin-bottom: 0;
}

.header li {
  display: inline-block;
  list-style: none;
  margin-right: 1rem;
  font-size: medium;
  padding: 0.7rem 1rem;
  color: #fff;
}

.header__socials li {
  cursor: pointer;
}

.header__socials li:hover {
  color: rgba(255, 255, 255, 0.699);
}

.header__dropdowns {
  margin-left: auto;
}

.header__dropdowns li {
  margin-right: 0;
  cursor: pointer;
  border-left: 1px solid #6795a357;
  padding: 0.7rem 1rem;
}

.header__dropdowns li:hover {
  background-color: rgba(255, 255, 255, 0.699);
  color: var(--bg-blue);
}

.header__dropdowns__country {
  width: 150px;
  position: relative;
  text-align: left;
  color: #fff;
}

.dropdown-toggle::after {
  position: absolute;
  right: 0;
  top: 0.6rem;
}

.header__dropdowns__country__content {
  display: flex;
  gap: 30px;
}

.header__dropdowns__country__content li {
  color: #000;
  padding: 0;
  list-style: square;
  width: max-content;
  border: none;
  padding: 0.3rem 0.6rem;
  margin-bottom: 0.4rem;
  font-size: small;
}

.header__dropdowns__country__content li:hover,
.header__dropdowns__country__content li:hover > .fa {
  color: #00b6f0;
  background-color: #c5c5c57c;
}

.header__dropdowns__country__content li .fa {
  color: #dcdcdc;
  font-size: xx-small;
}

.dropdown-menu {
  padding: 0.5rem;
  left: -12.4rem !important;
  top: 0.5rem !important;
}

.dropdown__text {
  border-bottom: 1px solid #c5c5c5;
  padding: 0.4rem;
}

.navbar {
  padding: 0.4rem 0;
}

.navbar li,
.navbar button {
  margin-bottom: 0.4rem;
  /* text-align: center; */
}

.navbar-brand img {
  width: 20%;
}

.nav-link {
  font-size: medium;
  font-weight: bold;
  color: #00b6f0 !important;
}

.nav-link:hover {
  color: #00b4f09b !important;
  cursor: pointer !important;
}

.fa-search {
  font-weight: lighter;
  cursor: pointer;
}

.search__display {
  top: 0;
  position: fixed;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.816);
  z-index: 1;
}

.search_input_container {
  width: 100%;
}

.cancel-search-display {
  position: fixed;
  bottom: 2%;
  right: 2%;
}

.carousel-div {
  min-height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.carousel-div-one {
  background-image: url(../src/assets/one.jpeg);
  background-size: 100% 100%;
}

.carousel-div-two {
  background-image: url(../src/assets/four.jpeg);
  background-size: 100% 100%;
}

.carousel-div-three {
  background-image: url(../src/assets/one.jpeg);
  background-size: 100% 100%;
}

.cards__section {
  margin: 5rem auto;
  /* width: max-content; */
  overflow: auto;
  overflow: auto !important;
}

.card {
  width: 100%;
  padding: 2rem 1rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
  cursor: pointer;
}

.card p {
  margin-top: 1rem;
}

.card .fa {
  font-size: medium;
}

.support {
  background-color: #c5c5c5;
  padding: 2rem 0;
  /* margin-bottom: 5rem; */
  /* color: #fff; */
}

.support__header {
  position: relative;
  width: max-content;
  margin: 0px auto;
}

.support__header::after {
  position: absolute;
  content: "";
  width: 50%;
  height: 3px;
  background-color: #00b6f0;
  left: 20%;
  bottom: -0.8rem;
}

.support__number {
  color: #00b6f0;
  font-size: x-large;
}

.footer {
  /* background-color: #929292; */
  /* margin-top: 1.9rem; */
  text-align: center;
  padding-top: 2rem;
  /* position: relative; */
  top: 0.7rem;
}

.footer__links {
  text-align: left;
  margin: 1rem 0;
}

.footer__links__header {
  padding: 1rem;
}

.footer__links li {
  list-style: none;
  margin-bottom: 1rem;
}

.footer__links li .fa {
  color: #fff !important;
}

.footer__grid a {
  color: #929292 !important;
}

.footer__grid li:hover > a {
  color: #00b6f0 !important;
}

.footer__copyright {
  padding: 1rem 1rem;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.289);
  text-align: center;
  margin: 0;
  font-size: small;
  /* background-color: #00B6F0; */
}

.modal__btn {
  display: none;
}

.carousel__modal__container {
  display: none;
}

/* ANIMATIOMS */

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

@keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.store__top {
  padding-top: 3rem;
  margin-top: 1rem;
}

/* MEDIA QUERIES */

@media (min-width: 767px) {
  .navbar {
    padding: 1rem 1rem;
  }
  .navbar > * {
    margin-bottom: 0rem;
    text-align: center;
  }
  .search_input_container {
    width: 50%;
    margin: 0px auto;
  }
  #carouselId .carousel-control-next {
    position: absolute;
    top: 41%;
    left: 87%;
    width: max-content;
    height: max-content;
    padding: 1rem;
    border: 2px solid #fff;
    border-radius: 50%;
  }
  #carouselId a.carousel-control-prev {
    position: absolute;
    top: 55%;
    left: 87%;
    width: max-content;
    height: max-content;
    padding: 1rem;
    border: 2px solid #fff;
    border-radius: 50%;
  }
  .carousel__text {
    color: #fff;
    display: flex;
    height: max-content;
    position: absolute;
    top: 30%;
    background-blend-mode: overlay;
    /* background-color: rgba(0, 0, 0, 0.357); */
  }
  .carousel__text h1 {
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    color: #fff;
  }
  .carousel__text > * {
    margin-bottom: 1rem;
    /* color: #00B6F0; */
    color: rgba(255, 255, 255, 0.61);
  }
  .cards__section {
    width: max-content;
  }
  .card {
    width: 330px;
    padding: 2rem 1rem;
    text-align: center;
  }
  .card .fa {
    font-size: x-large;
  }
  .card p {
    font-size: larger;
  }
  .support__header {
    font-size: x-large;
  }
  .support__number {
    font-size: xx-large;
    letter-spacing: 0.3rem;
  }
  .footer__grid {
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
    text-align: left !important;
    gap: 30px;
  }
  .modal__btn {
    display: block;
    position: fixed;
    top: 40%;
    right: 0;
  }
  .modal__btn:hover {
    padding-right: 1.5rem;
  }
  .carousel__modal__container {
    position: fixed;
    top: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.775);
    width: 100%;
    z-index: 2;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-item img {
    height: 600px;
    margin: 5rem 0;
    width: 100%;
  }
  .carousel__btn__close {
    position: absolute;
    top: 3%;
    right: 6.6%;
  }
}

@media (min-width: 992px) {
  .header {
    display: block;
  }
}
@media (min-width: 768px) {
  .store__top {
    padding-top: 13rem;

    margin-top: 1rem;
  }
}
</style>
