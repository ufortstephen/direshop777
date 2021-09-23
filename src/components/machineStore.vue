<template>
  <div>
    <div class="text-center my-0 my-md-3 header">
      <h1>Machine Store</h1>
      <p>Absolute Quality, Absolute Price</p>
    </div>

    <div class="my-5 container">
      <!-- {{ machineStore }} -->

      <el-row class="row">
        <div
          class="col-12 col-md-4 products"
          :span="6"
          v-for="(product, index) in machineStore"
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
import postProduct from "./postProducts.vue";
export default {
  components: {
    postProduct,
  },
  data() {
    return {
      currentDate: new Date(),
      machineStore: "",
      images: [
        "https://media.istockphoto.com/photos/coffee-blender-and-boiler-machine-in-kitchen-interior-picture-id524908249?s=612x612",
        "https://media.istockphoto.com/photos/woman-steaming-milk-for-cappuccino-on-professional-espresso-machine-picture-id804426098?k=20&m=804426098&s=612x612&w=0&h=a7RilOYloE7K98HnONUzsqpV7wtJuYcWIcN8yQ0IZOk=",
        "https://media.istockphoto.com/photos/hand-holding-a-paper-glass-to-pour-the-lemonade-soda-soft-drink-in-a-picture-id1163129182?k=20&m=1163129182&s=612x612&w=0&h=RVY8b3L_N5503-S04C9CUjsp_voM1vapRrgFLPpwxs0=",
      ],
    };
  },

  methods: {
    async getMachineStoreProducts() {
      try {
        const response = await api.machineStoreProducts();
        console.log(response);
        this.machineStore = response;
      } catch (error) {
        console.log(error.response);
      }
    },
    rowClicked(e, details) {
      e = e - 1;
      //   console.log(id);
      this.$router.push({
        path: `machine_store/${details}/${e}`,
      });
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },

  created() {
    this.getMachineStoreProducts();
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
  margin-top: 3rem;
  background-image: url(https://media.istockphoto.com/photos/hand-holding-a-paper-glass-to-pour-the-lemonade-soda-soft-drink-in-a-picture-id1163129182?k=20&m=1163129182&s=612x612&w=0&h=RVY8b3L_N5503-S04C9CUjsp_voM1vapRrgFLPpwxs0=);
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>