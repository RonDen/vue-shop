<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像框 -->
      <div class="avatar_box">
        <img src="../assets/head.jpg" alt />
      </div>
      <div>
        <!-- 登录表单区域 -->
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          class="login_form"
        >
          <!-- 用户名输入框 -->
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <!-- 用户密码输入框 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              type="password"
            ></el-input>
          </el-form-item>
          <!-- 用户按钮区域 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456"
      },
      // 验证表单是否合法规则对象
      loginFormRules: {
        // 用户名与密码合法性规则，类型为对象数组
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    // 点击登录按钮，进行表单验证和登录
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (valid) {
          // 验证成功，使用axios发送登录请求
          const { data: res } = await this.$http.post("login", this.loginForm);
          console.log(res);
          if (res.meta.status !== 200) {
            return this.$message.error("登录失败，请检查用户名密码是否正确");
          } else {
            /**
             * 1. 登录成功后，将 token 信息保存到客户端的 sessionStorage 中
             * 这样确保了项目中的其他需要登录状态的API接口能够使用
             * token只应该在网站打开期间生效，因此保存在 sessionStorage 中
             * 2. 通过编程式导航对象，跳转到主页
             */
            window.sessionStorage.setItem("token", res.data.token);
            this.$message({ message: "登录成功", type: "success" });
            this.$router.push("/home");
          }
        } else {
          console.log("登录表单验证失败");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      height: 100%;
      widows: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
