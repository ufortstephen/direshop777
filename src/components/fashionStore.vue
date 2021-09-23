<template>
  <div>
    <div class="text-center my-md-3 my-0 header__store">
      <h1>Fashion Store</h1>
      <p>Absolute Quality, Absolute Price</p>
    </div>

    <div class="my-5 container">
      <!-- {{ fashionProduct }} -->

      <el-row class="row">
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

              <p>Price: {{ product.product_price }}</p>
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
      <!-- <div class="text-center">
        <button class="btn btn-dark">View All</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import api from "../helpers/helpers";
export default {
  data() {
    return {
      currentDate: new Date(),
      fashionProduct: "",
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
        const response = await api.fashionStoreProducts();
        console.log(response);
        this.fashionProduct = response;
      } catch (error) {
        console.log(error.response);
      }
    },
    rowClicked(e, details) {
      e = e - 1;
      //   console.log(id);
      this.$router.push({
        path: `fashion_store/${details}/${e}`,
      });
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
.products .fa {
  display: none;
}
.products img:hover {
  cursor: pointer;
}
.products:hover ~ .button {
  display: none !important;
  color: red !important;
}
.header__store {
  background-image: url(https://static.fibre2fashion.com/articleresources/images/23/2287/fashion-big_Big.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 400px;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.426);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>