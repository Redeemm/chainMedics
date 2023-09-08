<template>
    <div class="home mt-16 pt-16">
        <v-row>
            <v-col>
                <v-container>
                    <h2 class="text-center text-uppercase">welcome to chain medics</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur molestiae. Magni,
                        dignissimos.
                        Hic ullam ut at sed distinctio nam a eos maxime, vitae, sint aliquid dolorem aperiam ipsam cumque.
                    </p>
                    <br>
                    <v-row>
                        <v-col cols="3">
                            <v-btn to="/start">Start Now</v-btn>
                        </v-col>
                        <v-col cols="3">
                            <v-btn>About</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col>
                <img src="~/assets/landing1.png" height="400" alt="">
            </v-col>
        </v-row>
    </div>
</template>
<style>
.home {
    width: 100%;
    height: 100%;
    /* background: rgba(144, 230, 244, 0.721) url("/assets/bg-img.png") no-repeat cover; */
}
</style>