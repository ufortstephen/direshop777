<template>
  <div>
    <div class="form-group">
      <label class="custom-file">
        <input
          type="file"
          name=""
          id=""
          placeholder=""
          class="custom-file-input"
          aria-describedby="fileHelpId"
          
        />
        <span class="custom-file-control"></span>
      </label>
    </div>
  </div>
</template>

<script>
import api from "@/helpers/helpers.js";
export default {
  data() {
    return {
      productDetails: {
        product_name: "Leveluk JRIV",
        product_image: "",
        product_description: "",
        product_price: "20,000",
      },
    };
  },
  methods: {
    postMachine() {
      try {
        let response = api.postMachineProducts(this.productDetails);
      } catch (error) {}
    },
  },
};
</script>

<style>
.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  opacity: 1;
}
</style>