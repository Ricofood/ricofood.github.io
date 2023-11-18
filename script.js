* {
    box-sizing: border-box;
}
body {
    background-image: url('rico-tile.png');
    background-repeat: repeat;
    margin: 0;
    padding: 0;
    background-color: navajowhite;
}
.enlace {
    position: absolute;
    padding: 5px 40px;
}

.logo {
    width: 100px;
}
nav {
    background-color: #00583d;
    height: 80px;
    width: 100%;
    box-shadow: 0 6px 4px -1px rgba(0, 0, 0, 0.4);
}
nav ul{
    float: right;
    margin-right: 20px;
    list-style: none;
    text-decoration: none;
}
    nav ul li {
        display: inline-block;
        line-height: 44px;
        margin: 0 5px;
        text-decoration: none;
    }
        nav ul li a {
            color: #FFF;
            font-size: 18px;
            padding: 7px 13px;
            color: #FFF;
            font-family: 'Roboto Mono',sans-serif;
            font-weight: bold;
        }
li a:hover {
    color: #808080;
}
#toggle-menu-button{
    font-size: 30px;
    color: #FFF;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}
#toggle-menu{
    display: none;
}



#pedir-ahora {
    font-family: 'Roboto Mono',sans-serif;
    font-weight: bolder;
    font-size: 16pt;
    color: goldenrod;
    -webkit-text-stroke: 0.04px white;
}

#aviso-menu {
    margin-top: 30px;
    font-family: 'Roboto Mono',sans-serif;
    text-align: center;
    font-size: 16pt;
    font-weight: bolder;
    text-decoration: underline;
}
.tab-panel {
    border: 3px solid #00583d;
    border-radius: 10px;
    width: 500px;
    margin: 20px auto;
    background-color: ivory;
    color: #06170a;
    box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.4);
}

.tab-buttons {
    display: flex;
    justify-content: space-between;
}

.tab-button {
    flex: 1;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    background-color: #00583d;
    color: #FFF;
    font-weight: bold;
    font-size: 14pt;
}
    .tab-button.active {
        background-color: ivory; /* Color de fondo activo */
        color: #06170a; /* Color de texto activo */
    }
#tab1 {
    border-top-left-radius: 3px;
    border-bottom-right-radius: 10px;
    font-family: 'Roboto Mono',sans-serif;
    padding: 10px;
}
    #tab1.active {
        border-top-left-radius: 15px;
    }
#tab2 {
    border-top-right-radius: 3px;
    border-bottom-left-radius: 10px;
    font-family: 'Roboto Mono',sans-serif;
}
    #tab2.active {
        border-top-right-radius: 15px;
    }
#menu {
    margin-top: 40px;
}

    #menu p {
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-size: 16pt;
        font-weight: bold;
    }

#postres h1 {
    margin-top: 30px;
    margin-bottom: 25px;
    text-align: center;
    font-family: 'Roboto Mono',sans-serif;
    text-decoration: underline;
}

#postres p {
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 16pt;
    font-weight: bold;
}


.info-principal {
    display: flex;
    align-items: center;
    justify-content: center;
}
.precio{
    color: darkred;
}
/*ALMUERZOS*/


#espacio-menu1 {
    margin-top: 15px;
}

    #espacio-menu1 .info-principal .guion {
        margin-right: 50px;
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #espacio-menu1 .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #espacio-menu1 .info-principal .precio {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 88px;
    }

    #espacio-menu1 .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-right: 105px;
        font-size: 12pt;
    }


#espacio-menu2 {
    margin-top: 15px;
}

    #espacio-menu2 .info-principal .guion {
        margin-right: 42px;
        margin-bottom: 0px;
        margin-top: 0px;
        padding-left: 0px;
    }

    #espacio-menu2 .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #espacio-menu2 .info-principal .precio {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 85px;
    }

    #espacio-menu2 .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-right: 100px;
        font-size: 12pt;
    }

/*POSTRES*/

#espacio-postre1 {
    margin-top: 15px;
}

    #espacio-postre1 .info-principal .guion {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 0px;
    }

    #espacio-postre1 .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 40px;
    }

    #espacio-postre1 .info-principal .precio {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 67px;
    }

    #espacio-postre1 .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-right: 85px;
        font-size: 12pt;
    }


#espacio-postre2 {
    margin-top: 15px;
}

    #espacio-postre2 .info-principal .guion {
        margin-left: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        padding-left: 0px;
    }

    #espacio-postre2 .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 103px;
    }

    #espacio-postre2 .info-principal .precio {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 106px;
    }

    #espacio-postre2 .info-secundaria p {
        margin-bottom: 45px;
        margin-top: 0px;
        margin-right: 60px;
        font-size: 12pt;
    }

/*MENU SEMANAL*/
#menu-semanal{
    display: none;
}
#menu-semanal h1 {
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16pt;
}
    #menu-semanal p {
        text-align: left;
        font-family: 'Raleway', sans-serif;
    }
.contenido-menu-semanal {
    display: flex;
    justify-content: space-between;
}
    .contenido-menu-semanal .platos .info-principal {
        justify-content: left;
        font-size: 12pt;
        font-weight: bold;
    }
        .contenido-menu-semanal .platos .info-secundaria {
            justify-content: left;
            font-size: 9pt;
            font-weight: bold;
            margin-bottom: 10px;
        }
    .contenido-menu-semanal .postres{
        margin-top: 4pt;
    }
        .contenido-menu-semanal .postres .info-principal {
            justify-content: left;
            font-size: 10pt;
        }
        .contenido-menu-semanal .postres .info-secundaria {
            font-size: 7pt;
            margin-bottom: 7px;
        }
            
 /*LUNES*/
 #menu-lunes {
     margin-top: 15px;
 }
 #menu-lunes .platos{
     margin-left: 50px;
 }
    #menu-lunes .info-principal .guion {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #menu-lunes .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 10px;
    }
    #menu-lunes .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 27px;
    }
#menu-lunes .postres{
    margin-right: 50px;
}
    #menu-lunes .postres .plato {
        margin-left: 7px;
    }
    #menu-lunes .postres .info-secundaria p {
        margin-left: 18px;
    }

/*MARTES*/
#menu-martes {
    margin-top: 15px;
}

    #menu-martes .platos {
        margin-left: 50px;
    }

    #menu-martes .info-principal .guion {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #menu-martes .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 10px;
    }

    #menu-martes .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 27px;
    }
#menu-martes .postres {
    margin-right: 90px;
}
    #menu-martes .postres .plato {
        margin-left: 7px;
    }

    #menu-martes .postres .info-secundaria p {
        margin-left: 18px;
    }

/*MIERCOLES*/
#menu-miercoles {
    margin-top: 15px;
}

    #menu-miercoles .platos {
        margin-left: 50px;
    }

    #menu-miercoles .info-principal .guion {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #menu-miercoles .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 10px;
    }

    #menu-miercoles .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 27px;
    }

    #menu-miercoles .postres {
        margin-right: 15px;
    }

        #menu-miercoles .postres .plato {
            margin-left: 7px;
        }

        #menu-miercoles .postres .info-secundaria p {
            margin-left: 18px;
        }

/*JUEVES*/

#menu-jueves {
    margin-top: 15px;
}

    #menu-jueves .platos {
        margin-left: 50px;
    }

    #menu-jueves .info-principal .guion {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #menu-jueves .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 10px;
    }

    #menu-jueves .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 27px;
    }

    #menu-jueves .postres {
        margin-right: 73px;
    }

        #menu-jueves .postres .plato {
            margin-left: 7px;
        }

        #menu-jueves .postres .info-secundaria p {
            margin-left: 18px;
        }

/*VIERNES*/

#menu-viernes {
    margin-top: 15px;
}

    #menu-viernes .platos {
        margin-left: 50px;
    }

    #menu-viernes .info-principal .guion {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    #menu-viernes .info-principal .plato {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 10px;
    }

    #menu-viernes .info-secundaria p {
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 27px;
    }

    #menu-viernes .postres {
        margin-right: 73px;
    }

        #menu-viernes .postres .plato {
            margin-left: 7px;
        }

        #menu-viernes .postres .info-secundaria p {
            margin-left: 18px;
        }



#wsp-icon {
    background-color: #25d366;
    color: #FFF;
    padding: 2px 8px;
    border-radius: 50%;
    font-size: 35px;
    position: fixed;
    bottom: 110px;
    right: 30px;
    text-align: center;
    z-index: 999;
}
    #wsp-icon i {
        margin-top: 5px;
        margin-right: 0px;
        margin-left: 0px;
    }
/*RESPONSIVE RESPONSIVE*/
@media (max-width: 952px) {
    .enlace {
        padding-left: 20px;
    }
    nav ul li a{
        font-size: 16px;
    }
    .tab-panel {
        width: 90%;
    }
}
@media (max-width: 858px) {
    #toggle-menu-button {
        display: block;
    }
    #wsp-icon {
        position: fixed;
        bottom: 80px;
        right: -30%;
        transition: all .5s;
    }
    ul {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #00583d;
        top: 80px;
        left: -110%;
        text-align: center;
        transition: all .5s;
    }
    nav ul li{
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
    nav ul li a {
        font-size: 20px;
    }
    #toggle-menu:checked ~ ul{
        left: 0;
    }
    #toggle-menu:checked ~ #wsp-icon {
        right: 165px;
        transition: all .5s;
    }
    .tab-panel {
        width: 90%;
    }
    #postres h1 {
        margin-top: 25px;
        font-size: 20pt;
    }

    #espacio-menu1 .info-principal .guion {
        margin-right: 7px;
    }

    #espacio-menu1 .info-principal .precio {
        margin-left: 40px;
    }

    #espacio-menu2 .info-principal .guion {
        margin-right: 8px;
    }

    #espacio-menu2 .info-principal .precio {
        margin-left: 28px;
    }

    #espacio-postre1 .info-principal .plato {
        margin-left: 7px;
    }

    #espacio-postre1 .info-principal .precio {
        margin-left: 16px;
    }

    #espacio-postre1 .info-secundaria p {
        margin-right: 70px;
    }

    #espacio-postre2 .info-principal .plato {
        margin-left: 17px;
    }

    #espacio-postre2 .info-principal .precio {
        margin-left: 105px;
    }

    #espacio-postre2 .info-secundaria p {
        margin-right: 77px;
    }

    .contenido-menu-semanal .platos .info-principal {
        font-size: 10pt;
    }

    .contenido-menu-semanal .platos .info-secundaria {
        font-size: 9pt;
    }

    .contenido-menu-semanal .postres .info-principal {
        font-size: 8pt;
    }

    .contenido-menu-semanal .postres .info-secundaria {
        font-size: 7pt;
    }
    /*LUNES*/
    #menu-lunes {
        margin-top: 15px;
    }

        #menu-lunes .platos {
            margin-left: 20px;
        }

        #menu-lunes .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-lunes .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-lunes .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 27px;
        }

        #menu-lunes .postres {
            margin-right: 14px;
        }

            #menu-lunes .postres .plato {
                margin-left: 7px;
            }

            #menu-lunes .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*MARTES*/
    #menu-martes {
        margin-top: 15px;
    }

        #menu-martes .platos {
            margin-left: 20px;
        }

        #menu-martes .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-martes .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-martes .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 27px;
        }

        #menu-martes .postres {
            margin-right: 42px;
        }

            #menu-martes .postres .plato {
                margin-left: 7px;
            }

            #menu-martes .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*MIERCOLES*/
    #menu-miercoles {
        margin-top: 15px;
    }

        #menu-miercoles .platos {
            margin-left: 20px;
        }

        #menu-miercoles .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-miercoles .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-miercoles .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 27px;
        }

        #menu-miercoles .postres {
            margin-right: 22px;
        }

            #menu-miercoles .postres .plato {
                margin-left: 7px;
            }

            #menu-miercoles .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*JUEVES*/

    #menu-jueves {
        margin-top: 15px;
    }

        #menu-jueves .platos {
            margin-left: 20px;
        }

        #menu-jueves .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-jueves .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-jueves .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 27px;
        }

        #menu-jueves .postres {
            margin-right: 25px;
        }

            #menu-jueves .postres .plato {
                margin-left: 7px;
            }

            #menu-jueves .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*VIERNES*/

    #menu-viernes {
        margin-top: 15px;
    }

        #menu-viernes .platos {
            margin-left: 20px;
        }

        #menu-viernes .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-viernes .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-viernes .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 27px;
        }

        #menu-viernes .postres {
            margin-right: 41px;
        }

            #menu-viernes .postres .plato {
                margin-left: 7px;
            }

            #menu-viernes .postres .info-secundaria p {
                margin-left: 18px;
            }
}
@media (max-width: 390px) {
    #toggle-menu-button {
        display: block;
    }
    #wsp-icon {
        position: fixed;
        bottom: 80px;
        right: -30%;
        transition: all .5s;
    }
    ul {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #00583d;
        top: 80px;
        left: -110%;
        text-align: center;
        transition: all .5s;
    }

    nav ul li {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }

        nav ul li a {
            font-size: 20px;
        }

    #toggle-menu:checked ~ ul  {
        left: 0;
    }
    #toggle-menu:checked ~ #wsp-icon {
        right: 165px;
        transition: all .5s;
    }

    #aviso-menu {
        font-size: 15pt;
    }

    .tab-panel {
        width: 90%;
    }


    #postres h1{
        margin-top: 25px;
        font-size: 20pt;
    }

    #espacio-menu1 .info-principal .guion {
        margin-right: 7px;
    }
    #espacio-menu1 .info-principal .precio {
        margin-left: 40px;
    }
    #espacio-menu2 .info-principal .guion {
        margin-right: 8px;
    }

    #espacio-menu2 .info-principal .precio {
        margin-left: 28px;
    }

    #espacio-postre1 .info-principal .plato {
        margin-left: 7px;
    }
    #espacio-postre1 .info-principal .precio {
        margin-left: 16px;
    }
    #espacio-postre1 .info-secundaria p{
        margin-right: 70px;
    }

    #espacio-postre2 .info-principal .plato {
        margin-left: 17px;
    }

    #espacio-postre2 .info-principal .precio {
        margin-left: 105px;
    }

    #espacio-postre2 .info-secundaria p {
        margin-right: 77px;
    }

    .contenido-menu-semanal .platos .info-principal {
        font-size: 10pt;
    }
    .contenido-menu-semanal .platos .info-secundaria {
        font-size: 9pt;
    }
    .contenido-menu-semanal .postres .info-principal {
        font-size: 8pt;
    }
    .contenido-menu-semanal .postres .info-secundaria {
        font-size: 7pt;
    }
    /*LUNES*/
    #menu-lunes {
        margin-top: 15px;
    }

        #menu-lunes .platos {
            margin-left: 20px;
        }

        #menu-lunes .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-lunes .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-lunes .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 22px;
        }

        #menu-lunes .postres {
            margin-right: 25px;
        }

            #menu-lunes .postres .plato {
                margin-left: 7px;
            }

            #menu-lunes .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*MARTES*/
    #menu-martes {
        margin-top: 15px;
    }

        #menu-martes .platos {
            margin-left: 20px;
        }

        #menu-martes .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-martes .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-martes .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 18px;
        }

        #menu-martes .postres {
            margin-right: 42px;
        }

            #menu-martes .postres .plato {
                margin-left: 7px;
            }

            #menu-martes .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*MIERCOLES*/
    #menu-miercoles {
        margin-top: 15px;
    }

        #menu-miercoles .platos {
            margin-left: 20px;
        }

        #menu-miercoles .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-miercoles .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-miercoles .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 9px;
        }

        #menu-miercoles .postres {
            margin-right: 22px;
        }

            #menu-miercoles .postres .plato {
                margin-left: 7px;
            }

            #menu-miercoles .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*JUEVES*/

    #menu-jueves {
        margin-top: 15px;
    }

        #menu-jueves .platos {
            margin-left: 20px;
        }

        #menu-jueves .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-jueves .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-jueves .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 27px;
        }

        #menu-jueves .postres {
            margin-right: 25px;
        }

            #menu-jueves .postres .plato {
                margin-left: 7px;
            }

            #menu-jueves .postres .info-secundaria p {
                margin-left: 18px;
            }

    /*VIERNES*/

    #menu-viernes {
        margin-top: 15px;
    }

        #menu-viernes .platos {
            margin-left: 20px;
        }

        #menu-viernes .info-principal .guion {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        #menu-viernes .info-principal .plato {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 10px;
        }

        #menu-viernes .info-secundaria p {
            margin-bottom: 0px;
            margin-top: 0px;
            margin-left: 14px;
        }

        #menu-viernes .postres {
            margin-right: 41px;
        }

            #menu-viernes .postres .plato {
                margin-left: 7px;
            }

            #menu-viernes .postres .info-secundaria p {
                margin-left: 18px;
            }
}

