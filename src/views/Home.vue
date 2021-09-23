<template>
  <div class="home">
    <main>
      <!-- <section class="carousel-div p-5"></section> -->
      <div id="carouselId" class="carousel slide" data-ride="carousel">
        <!-- <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol> -->
        <div class="carousel-inner" role="listbox" style="height: 100%">
          <div
            class="carousel-item active carousel-div carousel-div-one"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/' + imgThree + '.jpeg') + ')',
            }"
          >
            <div class="container">
              <div class="carousel__text d-none d-md-block"></div>
            </div>
          </div>
          <div
            class="carousel-item carousel-div carousel-div-two"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/' + imgTwo + '.jpeg') + ')',
            }"
          ></div>
          <div
            class="carousel-item carousel-div carousel-div-three"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/' + imgThree + '.jpeg') + ')',
            }"
          ></div>
        </div>
        <div class="d-flex">
          <a
            class="carousel-control-prev"
            href="#carouselId "
            role="button "
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true "></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselId "
            role="button "
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true "></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <!-- FeelIt Now -->
      <div class="container">
        <div class="row my-5">
          <div class="col-md-12 text-center">
            <!-- <img
              src="https://web.quiari.com/images/home/feel-it-now-green-dcd83ab8b94b543b911c6358a75c8345.jpg?vsn=d"
              alt=""
              style="width: 10%"
            /> -->

            <h4>Our Products</h4>
          </div>
          <div class="col-md-12 px-4 px-md-0">
            <div class="row">
              <el-card class="box-card col-md-5 offset-md-1 my-4">
                <div>
                  <h5>Breakthrough Products</h5>
                  <p>
                    The hottest breakthrough nutritional products, featuring the
                    world’s new #1 superfruit, Direshop. Our products are
                    scientifically formulated to help you: Lose Weight, Increase
                    Energy & Feel Great!
                  </p>
                </div>
              </el-card>
              <el-card class="box-card col-md-5 offset-md-1 my-4">
                <div>
                  <h5>Global Business Opportunity</h5>
                  <p>
                    We’ve covered the globe. We ship products and pay
                    commissions in 6 continents, 200+ countries, and have
                    offices worldwide!
                  </p>
                </div>
              </el-card>
            </div>
            <div class="row">
              <el-card class="box-card col-md-5 offset-md-1 my-4">
                <div>
                  <h5>One Family</h5>
                  <p>
                    At Direshop, we are united as one. We support each other via
                    Opportunity Presentations, Live Corporate Broadcasts, and we
                    are always just a phone call or email away with our
                    exceptional customer support.
                  </p>
                </div>
              </el-card>
              <el-card class="box-card col-md-5 offset-md-1 my-4">
                <div>
                  <h5>Get Paid in 5</h5>
                  <p>
                    With the #1 fastest-paying Compensation Plan in the industry
                    with real-time commission notifications on your Direshop
                    Mobile App.
                  </p>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-center mt-5 mb-4">
          <h4>Visit Our Store</h4>
        </div>
        <div class="row mx-0">
          <div class="col-md-4 px-0">
            <div
              class="
                beauty__products
                d-flex
                align-items-center
                justify-content-center
              "
              :style="{
                backgroundImage:
                  'url(' + require('@/assets/' + beautyImg + '.jpg') + ')',
              }"
              @click="goToBeautyStore()"
            >
              <h4 style="color: #000" class="font-weight-bold">Beauty Store</h4>
            </div>
          </div>
          <div class="col-md-4 px-0">
            <div
              class="
                fashion__products
                d-flex
                align-items-center
                justify-content-center
              "
              @click="goToFashionStore()"
            >
              <h4 style="color: #000" class="font-weight-bold">
                Fashion Store
              </h4>
            </div>
          </div>
          <div class="col-md-4 px-0">
            <div
              class="
                machine__products
                d-flex
                align-items-center
                justify-content-center
              "
              :style="{
                backgroundImage:
                  'url(' + require('@/assets/' + machineImg + '.jpg') + ')',
              }"
              @click="goToMachineStore()"
            >
              <h4 style="color: #000" class="font-weight-bold">
                Machine Store
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Fixed Elements -->

    <!-- Carousel Modal -->
    <!-- <div class="carousel__modal__container" id="carousel__modal">
      <div id="carouselId2" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId2" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId2" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner mx-5" role="listbox">
          <div class="carousel-item active">
            <div
              class="ml-0"
              style="display: grid; grid-template-columns: 1fr 1fr 1fr"
            >
              <img
                src="/images/WhatsApp Image 2021-08-19 at 9.45.42 PM.jpeg"
                alt=""
              />

              <img
                src="/images/WhatsApp Image 2021-08-19 at 9.45.40 PM.jpeg"
                alt=""
              />
              <img
                src="/images/WhatsApp Image 2021-08-19 at 9.46.34 PM.jpeg"
                alt=""
                style="width: 75%"
              />
            </div>
          </div>

          <div class="carousel-item mr0">
            <div
              class="mx-3"
              style="display: grid; grid-template-columns: 1fr 1fr 1fr"
            >
              <img
                src="/images/WhatsApp Image 2021-08-19 at 9.45.40 PM (1).jpeg"
                alt=""
              />

              <img
                src="/images/WhatsApp Image 2021-08-19 at 9.46.35 PM.jpeg"
                alt=""
              />
              <img
                src="/images/WhatsApp Image 2021-08-19 at 9.45.41 PM.jpeg"
                alt=""
                style="width: 75%"
              />
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselId2"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselId2"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <button
        class="btn btn-light carousel__btn__close"
        id="carousel__btn__close"
      >
        CLOSE
      </button>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import appFooter from "./Footer.vue";
import appheader from "./Header.vue";

export default {
  name: "Home",
  components: {
    appheader,
    appFooter,
  },
  data() {
    return {
      img: "one",
      imgTwo: "one",
      imgThree: "four",
      beautyImg: "buauty",
      machineImg: "machine",
    };
  },
  methods: {
    goToBeautyStore() {
      this.$router.push("/beauty_store");
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    goToMachineStore() {
      this.$router.push("/machine_store");
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    goToFashionStore() {
      this.$router.push("/fashion_store");
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>


<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.box-card:hover {
  cursor: pointer;
  background-color: #c5c5c533;
  box-shadow: none !important;
}
.beauty__products {
  /* background-image: url(https://media.istockphoto.com/photos/set-of-decorative-cosmetic-picture-id493029628?k=20&m=493029628&s=612x612&w=0&h=5mU5Zh62ALWfhCciWpyHveY2PYw146tQjytYNvC7UFI=); */
  height: 300px;
}
.fashion__products {
  background-image: url(https://static.fibre2fashion.com/articleresources/images/23/2287/fashion-big_Big.jpg);
  height: 300px;
}
.machine__products {
  /* background-image: url(https://media.istockphoto.com/photos/woman-steaming-milk-for-cappuccino-on-professional-espresso-machine-picture-id804426098?k=20&m=804426098&s=612x612&w=0&h=a7RilOYloE7K98HnONUzsqpV7wtJuYcWIcN8yQ0IZOk=); */
  height: 300px;
}
.beauty__products:hover,
.machine__products:hover,
.fashion__products:hover {
  cursor: pointer;
  background-blend-mode: overlay;
  background-color: #40a0ff51;
  /* background-color: #929922; */
  transform: scale(1.01);
}
.machine__products:hover {
  transform: scale(0.98) !important;
}
</style>
