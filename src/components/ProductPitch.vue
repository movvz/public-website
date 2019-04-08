<template>
    <div id="product-pitch" class="container-offset">
        <v-layout
            text-xs-center
            wrap
            class="pt-5"
        >
            <v-flex xs12>
                <v-img
                :src="require('@/assets/logo.svg')"
                class="my-3"
                contain
                height="200"
                ></v-img>
            </v-flex>
            <v-flex xs12 class="pt-4">
                <p class="pitch-main">
                    Delivery in trust, move with confidence
                    <br/>
                    <span class="pitch-caption secondaryDark--text">
                        - Delivery has never been more secure and easy!
                    </span>
                </p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container-offset {
    height: calc(100vh - 80px);
}
.business-name {
    font-size: 100px;
    font-weight: 700;
}
.pitch-main {
    font-size: 40px;
    font-weight: 700;
}
.pitch-caption {
    font-size: 24px;
    font-weight: 400;
    font-style: italic;
}
</style>