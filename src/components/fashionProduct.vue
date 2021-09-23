<template>
  <div
    style="background-color: #dce1e1 !important"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
    class="my-0 my-md-5"
  >
    <div class="container mb-5 pt-5">
      <h4 class="mb-2">
        {{ product.product_description }}
      </h4>

      <p>Fashion. Step Out in Style.</p>
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
            v-for="(product, index) in fashionProduct"
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
export default {
  data() {
    return {
      loading: false,
      fashionProduct: "",
      product: "",
      images: [
        "https://st2.depositphotos.com/3200863/7800/i/950/depositphotos_78006782-stock-photo-woman-things.jpg",
        "https://st2.depositphotos.com/1177973/6080/i/950/depositphotos_60801173-stock-photo-women-bag-stuff.jpg",
        "https://st4.depositphotos.com/2964705/19705/i/1600/depositphotos_197057616-stock-photo-little-girl-stuff-princess-woman.jpg",
        "https://st.depositphotos.com/1224365/4009/i/950/depositphotos_40095003-stock-photo-outfit-of-business-man.jpg",
        "https://st.depositphotos.com/1224365/4126/i/950/depositphotos_41266061-stock-photo-outfit-of-business-woman-in.jpg",
      ],
    };
  },
  methods: {
    async getfashionProductProducts() {
      try {
        this.loading = false;
        const num = +this.$route.params.e;
        const response = await api.fashionStoreProducts();
        this.fashionProduct = response;
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
      this.getfashionProductProducts();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },

  created() {
    this.getfashionProductProducts();
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