<template>
    <div>
        <!-- 时间轴主体 -->
        <div class="timeline-header"></div>
        <div>
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
}

.timeline-line {
    border-left: 1px solid yellowgreen;
    height: 1em;
    @include timeline-element();
    position: relative;
}
</style>