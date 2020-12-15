<template>
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div>
                                                                <div>
                                                                    <div>
                                                                        <div>
                                                                            <div>
                                                                                <div>
                                                                                    <div>
                                                                                        <div>
                                                                                            <div>
                                                                                                <div>
                                                                                                    <div>
                                                                                                        <div>
                                                                                                            <div>
                                                                                                                <div>
                                                                                                                    <div>
                                                                                                                        <div
                                                                                                                            class="card"
                                                                                                                        >
                                                                                                                            <slot />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Rope",
};
</script>

<style lang="scss" scoped>
$swing-angle: 1deg;
$rope-segment: 5px;
$rope-width: 1px;
$segment-scale: 0.95;
$swing-speed: 7s;

div {
    background: #ccc;
    width: 1px;
    height: 1px;
    position: relative;
    border-radius: 50%;
}

div > div {
    position: absolute;
    background-color: red;
    border-bottom: 1px solid red;
    width: $rope-width;
    height: $rope-segment;
    border-radius: 0;
    transform-origin: top center;
    animation: pendulum $swing-speed infinite;
    animation-timing-function: ease-out;
}

div > div > div {
    top: $rope-segment * (1 / $segment-scale);
    left: 0;
}

@keyframes pendulum {
    0% {
        transform: rotate(-$swing-angle);
    }
    25% {
        transform: rotate(-$swing-angle / 2);
    }
    50% {
        transform: rotate(-$swing-angle / 1.5);
    }
    75% {
        transform: rotate(-$swing-angle / 1.7);
    }
    100% {
        transform: rotate(-$swing-angle);
    }
}

.card {
    background-color: goldenrod;
    background-image: url("../assets/img/rope/wood.png");
    background-size: 100% 100%;
    display: inline-block;
    width: 20px;
    height: 40px;
    left: -10px;
    border: 0;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    vertical-align: middle;
    line-height: 20px;
    text-align: center;
    padding-top: 5px;
    font-size: 0.5em;
    font-weight: 3000;
    letter-spacing: 5px;
    font-family: "SimSun";
    margin-top: -2px;
    cursor: pointer;
    border-radius: 2px;
}

.card::after {
    content: "";
    display: inline-block;
    background-color: white;
    height: 4px;
    width: 4px;
    position: absolute;
    top: 2px;
    left: 8px;
    border-radius: 50%;
    z-index: 0;
}

.card::before {
    content: "";
    display: inline-block;
    background-color: red;
    width: $rope-width + 1;
    height: 3px;
    position: absolute;
    top: 0;
    left: 9px;
    z-index: 1;
}
</style>