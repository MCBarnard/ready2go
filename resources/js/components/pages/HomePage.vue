<template>
    <div class="containing-wrapper">
        <div class="home-section">
            <div class="home-section__content">
                <span>Simple Mass Marketing</span>
                <h1>Welcome blah blah</h1>
                <hr>
                <p>
                    here we do this this and this a few times more this this and that too. here we
                    do this this and this a few times more this this and that too here we do this this
                    and this a few times more this this and that too
                </p>
                <br>
                <span class="action-btn"><router-link to="/">Some Random Button</router-link></span>
            </div>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_Ns4TLz.json" background="transparent"  speed="1"  style="width: 500px; height: 500px;" loop autoplay></lottie-player>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped lang="scss">

    .containing-wrapper {
        max-width: 1200px;
        margin: auto;
    }
    .home-section{
        display: flex;
        justify-content: space-between;
        margin-top: 100px;

        &__content {
            max-width: 450px;

            span {
                color: #f857a6;
                font-size: 16px;
                font-weight: 600;
            }
            .action-btn {

                a {
                    padding: 9px 12px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: #FFF;
                    background: #f857a6; /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.1);

                    &:hover {
                        text-decoration: none;
                        box-shadow: 0px 5px 13px rgba(248, 87, 166, 0.4);
                    }
                }
            }
            h1 {
                font-family: Lato;
                font-size: 58px;
            }
            p {
                font-size: 18px;
            }
        }
    }
</style>
