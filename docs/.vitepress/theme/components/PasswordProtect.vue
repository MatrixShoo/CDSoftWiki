<template>
  <div class="password-protect">
    <div v-if="passwordChecked">
      <slot></slot>
    </div>
    <div v-else class="password-form">
      <h2>加密文章请输入密码验证</h2>
      <form @submit.prevent="checkPassword">
        <input type="password" v-model="password" placeholder="请输入密码" />
        <button type="submit">提交</button>
      </form>
      <div v-if="passwordError" class="error">密码错误，请重新尝试。</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordChecked: false,
      passwordError: false,
    };
  },
  methods: {
    checkPassword() {
      if (this.password === '5829303') { // Password check logic
        this.passwordChecked = true;
        this.passwordError = false;
      } else {
        this.passwordError = true;
      }
    }
  }
};
</script>

<style scoped>
.password-protect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.password-form {
  background: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  width: 400px; /* 增大整个表单框的宽度 */
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px 15px; /* 增加内边距 */
  
  border-radius: 8px; /* 圆角边框 */
}

input[type="password"] {
  width: calc(100% - 20px);
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 18px;
}
</style>