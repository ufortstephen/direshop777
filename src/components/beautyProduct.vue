<template>
  <div
    style="background-color: #dce1e1 !important"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
    class="my-0 my-md-5"
  >
    <appheader />
    <div class="container mb-5 store__top" >
      <h4 class="mb-2">
        {{ product.product_description }}
      </h4>

      <p>Make-Up, Beauty Product, Beauty, Merchandise, Nature</p>
      <div class="row">
        <div class="col-md-8">
          <el-card :body-style="{ padding: '0px' }" class="my-4">
            <div class="text-center">
              <img
                :src="images[$route.params.e]"
                class="image w-90 ml-auto mr-auto text-center"
                style="height: 400px"
              />
            </div>
          </el-card>
          <div class="mb-5">
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <p>Description :</p>
              <p>{{ product.product_description }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="my-4">
            <h5>{{ product.product_name }}</h5>
            <h6>Product Name : {{ product.product_name }}</h6>
            <h6>Price : NGN {{ product.product_price }}</h6>
            <h6>Description : {{ product.product_description }}</h6>
            <button class="btn w-100 my-4 py-3 purchase__btn">
              Continue with purchase
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5" style="background-color: #dce1e1 !important">
      <div class="container">
        <h6>Similar Products</h6>
        <el-row class="row mt-5">
          <div
            class="col-12 col-md-4 products"
            :span="6"
            v-for="(product, index) in beautyStore"
            :key="index"
            :offset="index > 0 ? 2 : 2"
          >
            <el-card :body-style="{ padding: '0px' }" class="mb-5">
              <img
                :src="images[index]"
                class="image w-100"
                style="height: 200px"
              />
              <div style="padding: 14px">
                <span> {{ product.product_name }} </span>
                <p class="font-italic text-muted">
                  {{ product.product_description }}
                </p>

                <!-- <p>Price: {{ product.product_price }}</p> -->
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button
                    type="text"
                    class="button"
                    @click="rowClicked(product.id, product.product_description)"
                    id="index"
                    >View More
                    <i class="fa fa-caret-right ml-2" aria-hidden="true"></i
                  ></el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../helpers/helpers";
import appFooter from "../views/Footer.vue";
import appheader from "../views/Header.vue";
export default {
  title: "Dire Beauty Store Products",
  components: {
    appFooter,
    appheader,
  },
  data() {
    return {
      loading: false,
      beautyStore: "",
      product: "",
      images: [
        "https://media.istockphoto.com/photos/set-of-decorative-cosmetic-picture-id493029628?k=20&m=493029628&s=612x612&w=0&h=5mU5Zh62ALWfhCciWpyHveY2PYw146tQjytYNvC7UFI=",
        "https://media.istockphoto.com/photos/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves-picture-id1136422297?s=612x612",
        "https://media.istockphoto.com/photos/keep-your-skin-healthy-picture-id883019542?s=612x612",
        "https://media.istockphoto.com/photos/beauty-products-isolated-on-white-background-picture-id1249579132?s=612x612",
        "https://media.istockphoto.com/photos/spa-products-for-home-skin-care-picture-id1141698953?s=612x612",
        "https://media.istockphoto.com/photos/woman-cosmetologist-cosmetics-testing-natural-organic-cosmetics-serum-picture-id1164263699?s=612x612",
      ],
    };
  },
  methods: {
    async getBeautyStoreProducts() {
      try {
        this.loading = false;
        const num = +this.$route.params.e;
        const response = await api.beautyStoreProducts();
        this.beautyStore = response;
        const beauty_product = response.find((item, index) => num == item.id);
        this.product = beauty_product;
        this.loading = false;
      } catch (error) {
        console.log(error.response);
        this.loading = false;
      }
    },
    rowClicked(e, details) {
      e = e - 1;
      //   console.log(id);
      this.$router.push({
        path: `/beauty_store/${details}/${e}`,
      });
      this.getBeautyStoreProducts();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },

  created() {
    this.getBeautyStoreProducts();
  },
};
</script>

<style scoped>
.purchase__btn {
  background-color: #fe423f;
  border: 1px solid #fe231f;
  border-radius: 4px;
  box-shadow: inset 0 0 2px 0 rgb(255 255 255 / 50%);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 0 20px;
  padding: 0.9375rem 30px 1rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s linear;
}
</style>