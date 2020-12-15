<template>
    <div>
        <div class="background" />
        <div class="cover" />
        <div class="fix-full">
            <div class="rope-container">
                <rope><strong>打印</strong></rope>
            </div>
            <page-header />
            <div class="middle-container main-container">
                <div class="title">冰淇淋🍨学院自助打印店</div>
            </div>
        </div>
    </div>
</template>

<script>
import Rope from "../components/Rope";
import PageHeader from "../components/Header";

export default {
    name: "Index",
    components: {
        Rope,
        "page-header": PageHeader,
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/style";

.background {
    @include background("../assets/img/index/background.jpg", 2px);
}

.cover {
    @include cover(0.7);
}

.rope-container {
    position: fixed;
    left: 20%;
    top: -5px;
}

.main-container {
    margin-top: 50px;
}
</style>
