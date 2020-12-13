<template>
    <div class="header">
        <div v-if="isLogin">Hi, {{ username }}</div>
        <div v-else>临时用户: {{ username }}</div>
        <a href="#">注册</a>
        <a href="#">登录</a>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isLogin: this.$cookies.get("isLogin"),
            username: this.$cookies.get("username"),
        };
    },
};
</script>

<style lang="scss">
.header {
    width: 100vw;
}
</style>