<template>
    <div>
        <!-- 时间轴主体 -->
        <div class="timeline-header"></div>
        <div class="segment">
            <div class="timeline-date">日期</div>
            <div class="timeline-line"></div>
            <div class="timeline-container">内容</div>
        </div>
        <div class="segment">
            <div class="timeline-date">日期</div>
            <div class="timeline-line"></div>
            <div class="timeline-container">内容</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TimeLine",
};
</script>

<style lang="scss" scoped>
$datewidth: 50px;

@mixin timeline-element {
    display: inline-block;
}

.timeline-header {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 2px solid green;
    margin-left: $datewidth - 5px;
}

.timeline-date {
    width: $datewidth;
    @include timeline-element();
}

.timeline-container {
    @include timeline-element();
    margin-left: 20px;
}

.timeline-date::after {
    content: "";
    display: inline-block;
    right: -14.5px;
    width: 8px;
    height: 8px;
    position: relative;
    border-radius: 50%;
    background: orange;
    z-index: 2;
}

.timeline-container::before {
    content: "";
    display: inline-block;
    left: -20px;
    top: -4px;
    width: 19px;
    height: 1px;
    position: relative;
    background: orange;
}

.timeline-line {
    border-left: 1px solid yellowgreen;
    height: 4em;
    @include timeline-element();
    position: relative;
}

.segment ~ .segment {
    margin-top: -5px;
}
</style>
