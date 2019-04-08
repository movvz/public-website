<template>
    <div id="pricing" class="container-offset">
        <v-layout
            text-xs-center
            wrap
            class="pt-5"
        >
            <v-flex xs12>
                <p class="pitch-main">
                    Pricing
                </p>
            </v-flex>
            <v-flex xs12 class="pt-4">
                <v-layout row>
                    <v-flex xs4 class="card-offset">
                        <v-card class="primary card-layout">
                            <p>price 1</p>
                            <p>price descriptions 1</p>
                        </v-card>
                    </v-flex>
                    <v-flex xs4 class="card-offset">
                        <v-card class="primary card-layout">
                            <p>price 2</p>
                            <p>price descriptions 2</p>
                        </v-card>
                    </v-flex>
                    <v-flex xs4 class="card-offset">
                        <v-card class="primary card-layout">
                            <p>price 3</p>
                            <p>price descriptions 3</p>
                        </v-card>
                    </v-flex>
                </v-layout>
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
.card-offset {
    padding: 0 30px;
}
.card-layout {
    border-radius: 10px;
    padding: 20px 15px;
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