<template>
    <div class="main-nav">
        <div class="main-nav__logo-container">

            <div class="main-nav__logo-container__logo">
                <h1><router-link to="/">CleanLogo</router-link></h1>
            </div>
            <div class="main-nav__logo-container__inner">
                <div @mouseleave="hideDropDown('offers')" @mouseover="showDropDown('offers')" class="main-nav__logo-container__inner__item">
                    <router-link  to="/what-we-offer">What We Offer</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                    <div id="offers" class="dropdown-menu-container">
                        <div>
                            <router-link to="/" class="dropdown-menu-container__item">Donate</router-link>
                            <router-link to="/" class="dropdown-menu-container__item">Competitions</router-link>
                            <router-link to="/" class="dropdown-menu-container__item">Rewards</router-link>
                            <router-link to="/" class="dropdown-menu-container__item">Online Courses</router-link>
                        </div>
                    </div>
                </div>
                <div @mouseleave="hideDropDown('features')" @mouseover="showDropDown('features')" class="main-nav__logo-container__inner__item">
                    <router-link to="/features">Special Features</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                    <div id="features" class="dropdown-menu-container">
                        <div>
                            <router-link to="/" class="dropdown-menu-container__item">Donate</router-link>
                            <router-link to="/" class="dropdown-menu-container__item">Competitions</router-link>
                            <router-link to="/" class="dropdown-menu-container__item">Rewards</router-link>
                            <router-link to="/" class="dropdown-menu-container__item">Online Courses</router-link>
                        </div>
                    </div>
                </div>
                <div class="main-nav__logo-container__inner__item">
                    <router-link to="/contact">Contact Us</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                </div>
                <div class="main-nav__logo-container__inner__item">
                    <router-link to="/about">About Us</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                </div>
                <div class="main-nav__logo-container__inner__item">
                    <router-link id="getStarted" to="/get-started">Get Started</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {
            showDropDown(id) {
                document.getElementById(id).style.display = "block";
            },
            hideDropDown(id) {
                document.getElementById(id).style.display = "";
            }
        }
    }
</script>

<style scoped lang="scss">
    .dropdown-menu-container {
        display: none;
        position: absolute;
        width: 150px;
        /*background: #f857a6;  !* fallback for old browsers *!*/
        /*background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  !* Chrome 10-25, Safari 5.1-6 *!*/
        /*background: linear-gradient(to right, #ff5858, #f857a6); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!*/
        top: 50px;
        left: -12px;
        z-index: 10;
        padding: 2px;
        border-radius: 12px;

        div {
            background: #FFFFFF;
            border-radius: 8px;
            padding: 3px;
        }

        &__item {
            display: block;
            color: #1d2124;

            &:hover {
                background: #f5f5f5;
            }
        }
    }

    .main-nav {
        width: 100%;
        min-height: 50px;
        padding-top: 25px;

        &__logo-container {
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            margin: auto;

            &__logo {
                h1 a{
                    font-family: 'Fredoka One', cursive;
                    font-weight: bold;
                    color: #000;
                    text-decoration: none;

                    &:hover {
                        text-decoration: none;
                        color: #000;
                    }
                }
            }

            &__inner {
                display: flex;
                justify-content: space-between;
                padding-top: 2px;
                &__item {
                    position: relative;
                    display: block;
                    font-size: 18px;
                    text-align: center;
                    margin: 0 16px;
                    padding-top: 9px;
                    a, a:hover {
                        text-decoration: none;
                        color: #000;
                    }

                }
                #getStarted {
                    padding: 9px 12px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: #FFF;
                    background: red;
                    /*background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  !* Chrome 10-25, Safari 5.1-6 *!*/
                    /*background: linear-gradient(to right, #ff5858, #f857a6); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!*/
                    /*box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.1);*/

                    &:hover {
                        text-decoration: none;
                        box-shadow: 0px 5px 13px rgba(248, 87, 166, 0.4);
                    }
                }
            }
        }
    }

    .router-link-active ~.main-nav__logo-container__inner__item__line {
            width: 100%;
            height: 3px;
            border-radius: 5px;
        background: red;
            /*background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  !* Chrome 10-25, Safari 5.1-6 *!*/
            /*background: linear-gradient(to right, #ff5858, #f857a6); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!*/
    }
</style>
