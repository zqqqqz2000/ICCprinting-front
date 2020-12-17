<template>
    <div class="header">
        <div v-if="isLogin">Hi, {{ username }}</div>
        <div v-else>临时用户: {{ username }}</div>
        <div>注册</div>
        <div>登录</div>
        <div style="float: right">投诉</div>
    </div>
</template>

<script>
export default {
    name: "PageHeader",
    data() {
        return {
            isLogin: this.$cookies.get("isLogin"),
            username: this.$cookies.get("username"),
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    width: 100vw;
    height: 60px;
    padding: 15px;
    background: rgba($color: #000000, $alpha: 0.3);
    color: white;
}

a {
    outline: none;
    text-decoration: none;
}

.header > * {
    display: inline-block;
    margin-right: 50px;
}
</style>
