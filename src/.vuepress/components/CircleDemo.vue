<template>
    <svg width="400"
        height="400">
        <g transform="translate(200, 200)">
            <circle v-for="[x, y] of points"
                :cx="x"
                :cy="y"
                r="2"/>
        </g>
    </svg>
</template>

<script>
export default {

    data() {
        return {
            points: [],
        };
    },

    mounted() {
        window.addEventListener('message', this.onMessage);
    },

    unmounted() {
        window.removeEventListener('message', this.onMessage);
    },

    methods: {

        onMessage(ev) {
            try {
                const data = JSON.parse(ev.data);
                console.log('>>>', data);
                if (data.embedId === 'circle' && Array.isArray(data.result)) {
                    this.points = data.result;
                }
            } catch (error) {}
        }

    }
}
</script>
