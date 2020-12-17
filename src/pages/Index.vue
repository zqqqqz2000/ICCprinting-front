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
                <div>
                    <div class="title">冰淇淋🍨学院自助打印店</div>
                    <div class="search-area">
                        <b-form-input placeholder="打印单号"></b-form-input>
                        <b-button variant="success">搜索</b-button>
                    </div>
                    <time-line />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rope from "../components/Rope";
import PageHeader from "../components/Header";
import TimeLine from "../components/TimeLine";

export default {
    name: "Index",
    components: {
        Rope,
        "page-header": PageHeader,
        "time-line": TimeLine,
    },
};

TimeLine;
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

.search-area {
    margin-top: 20px;
}

.search-area > input {
    width: calc(100% - 65px);
    display: inline;
    vertical-align: middle;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.search-area > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 65px !important;
}
</style>
