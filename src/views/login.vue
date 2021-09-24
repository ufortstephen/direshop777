<template>
  <div class="row p-0 m-0 login__page">
    <div class="col-md-8 p-0 m-0 bg-dark">
      <video
        x-ref="video"
        style="width: 100%"
        autoplay=""
        playsinline=""
        muted=""
        loop=""
        preload="auto"
        poster="https://corporate.cdn.quiari.com/media/videos/quiari-main-website-720p-poster.png"
      >
        <source
          src="https://corporate.cdn.quiari.com/media/videos/quiari-main-website-720p.webm"
          type="video/webm"
          class="embed-responsive-item"
        />
        <source
          src="https://corporate.cdn.quiari.com/media/videos/quiari-main-website-720p-optimized.mp4"
          type="video/webm"
          class="embed-responsive-item"
        />
      </video>
    </div>
    <div class="col-md-4 text-center">
      <div class="container">
        <img src="@/assets/logo2.png" alt="" style="width: 60%" />
      </div>

      <h5 class="mb-5">
        Congratulations on your decision to become a QuiAri Promoter. You're
        joining the fastest-growing global home-based business opportunity in
        the world. You’re well on your way to getting paid in 5 minutes every
        time you inspire others to purchase products or join your team.
      </h5>

      <!-- UI Form -->
      <el-card>
        <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="120px"
          class="demo-dynamic mt-5"
          :rules="rules"
        >
          <!-- Form Email -->
          <el-form-item
            prop="email"
            label="Email"
            :rules="[
              {
                required: true,
                message: 'Please input email address',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>

          <!-- FormPassword -->
          <el-form-item
            label="Password"
            prop="password"
            :rules="[
              {
                required: true,
                message: 'Please input your password',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              type="password"
              v-model="dynamicValidateForm.password"
              autocomplete="off"
              placeholder="Password"
              class="my-2"
            ></el-input>
          </el-form-item>
          <!-- <div class="text-left">
              <el-checkbox v-model="checked" class="d-flex"
                >By creating an account you hereby agree to our
                <span>Terms and Conditions</span> and our
                <span> Privacy Policy</span></el-checkbox
              >
            </div> -->

          <!-- Form Login Button -->
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('dynamicValidateForm')"
              class="sign__in--btn"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
        <p class="mt-1">
          New to DiireShop? &nbsp;
          <span
            @click="gotoOrganizerLogin"
            style="
              color: #000;

              text-decoration: underline;
              cursor: pointer;
            "
            >Register Here</span
          >
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
import api from "@/helpers/helpers";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.dynamicValidateForm.password !== "") {
          this.$refs.dynamicValidateForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      dynamicValidateForm: {
        email: "",
        password: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    async login() {
      try {
        const response = await api.login(this.dynamicValidateForm);
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },

    goHome() {
      this.$router.push("/");
    },

    gotoSignup() {
      this.$router.push("/");
    },
    gotoOrganizerLogin() {
      this.$router.push("/login/organizer");
    },
  },
};
</script>

<style>
.login__page {
  min-height: 100vh;
}
.fan__signin .background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.837);
  width: 100%;
  height: calc(100vh - calc(100vh - 100%));
  overflow: hidden;
  /* opacity: 0.8; */
}

.form__content {
  background-color: #fff;
  text-align: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
  top: 0rem;

  padding: 1rem;
}
h3 {
  font-weight: bold;
}
p {
  font-weight: 300;
}
.form__img {
  position: relative;
  top: 2rem;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.logo__img {
  width: 40%;
}
.form__content > * {
  margin-bottom: 1rem;
}
.el-form-item__label {
  display: none !important;
}
.el-form-item__content {
  margin-left: 0 !important;
}
.sign__in--btn {
  width: 100%;
  padding: 1rem 0 !important;
  background-color: #2019e4 !important;
  font-size: larger !important;
  font-weight: bold !important;
}
.close__btn {
  position: absolute;
  top: 3rem;
  right: 1rem;
  width: 7%;
  cursor: pointer;
}
.el-checkbox,
.el-checkbox__input {
  white-space: revert !important;
}
.el-checkbox__label {
  font-size: 10px I !important;
}
.el-checkbox__input {
  align-self: center;
}

@media (max-width: 769px) {
  .el-card.is-always-shadow {
    box-shadow: none;
  }
  .el-card {
    border: none;
  }
}

@media (min-width: 998px) {
  .fan__signin .form {
    width: 35%;
    margin: 0px auto;
    bottom: 2rem;
    left: 33%;
  }
  .form__content {
    border-radius: 30px;
    position: relative;
    top: -6rem;
    padding: 3rem;
    padding-top: 2rem;
    /* padding-bottom: 7rem; */
  }
  .form__img {
    top: 0rem;
  }
  .close__btn {
    top: 1rem;
  }
}
</style>