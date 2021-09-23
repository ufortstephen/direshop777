<template>
  <div>
    <div
      class="text-center my-0 my-md-3 header"
      :style="{
        backgroundImage: 'url(' + require('@/assets/' + img + '.jpg') + ')',
      }"
    >
      <h1>Beauty Store</h1>
      <p>Absolute Quality, Absolute Price</p>
    </div>

    <div class="my-5 container">
      <!-- {{ beautyStore }} -->

      <el-row class="row">
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
      <!-- <div class="text-center mb-5">
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
      beautyStore: "",
      images: [
        "https://media.istockphoto.com/photos/set-of-decorative-cosmetic-picture-id493029628?k=20&m=493029628&s=612x612&w=0&h=5mU5Zh62ALWfhCciWpyHveY2PYw146tQjytYNvC7UFI=",
        "https://media.istockphoto.com/photos/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves-picture-id1136422297?s=612x612",
        "https://media.istockphoto.com/photos/keep-your-skin-healthy-picture-id883019542?s=612x612",
        "https://media.istockphoto.com/photos/beauty-products-isolated-on-white-background-picture-id1249579132?s=612x612",
        "https://media.istockphoto.com/photos/spa-products-for-home-skin-care-picture-id1141698953?s=612x612",
        "https://media.istockphoto.com/photos/woman-cosmetologist-cosmetics-testing-natural-organic-cosmetics-serum-picture-id1164263699?s=612x612",
      ],
      img: "buauty",
    };
  },

  methods: {
    async getBeautyStoreProducts() {
      try {
        const response = await api.beautyStoreProducts();
        console.log(response);
        this.beautyStore = response;
      } catch (error) {
        console.log(error.response);
      }
    },
    rowClicked(e, details) {
      e = e - 1;
      //   console.log(id);
      this.$router.push({
        path: `beauty_store/${details}/${e}`,
      });
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
.header {
  /* background-image: url(https://media.istockphoto.com/photos/set-of-decorative-cosmetic-picture-id493029628?k=20&m=493029628&s=612x612&w=0&h=5mU5Zh62ALWfhCciWpyHveY2PYw146tQjytYNvC7UFI=); */
  background-repeat: no-repeat;
  background-size: cover;
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