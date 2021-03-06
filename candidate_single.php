<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>METAL</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="CreativeLayers">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap-grid.css"/>
    <link rel="stylesheet" href="css/icons.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/responsive.css"/>
    <link rel="stylesheet" type="text/css" href="css/chosen.css"/>
    <link rel="stylesheet" type="text/css" href="css/colors/colors.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>

</head>
<body>

<div class="page-loading">
    <img src="images/loader.gif" alt="" />
    <span>Skip Loader</span>
</div>

<div class="theme-layout" id="scrollup">
    <?php include "php/mail.php"; ?>
    <div class="responsive-header">
        <div class="responsive-menubar">
            <div class="res-logo"><a href="index.html" title=""><img src="images/resource/logo.png" alt=""/></a></div>
            <div class="menu-resaction">
                <div class="res-openmenu">
                    <img src="images/icon.png" alt=""/> Menu
                </div>
                <div class="res-closemenu">
                    <img src="images/icon2.png" alt=""/> Cerrar
                </div>
            </div>
        </div>
        <div class="responsive-opensec">
            <div class="btn-extars">
                <a id="mobile-a-publicar-trabajo" hidden href="publicar_trabajo.html" title="" class="post-job-btn"><i class="fas fa-feather-alt"></i>Publicar</a>
                <ul class="account-btns">
                    <li id="mobile-li-sign-in" class="signup-popup"><a title="" href="signup.html"><i class="fas fa-key"></i> Sign Up</a></li>
                    <li id="mobile-li-login" class="signin-popup"><a title=""><i class="fas fa-sign-in-alt"></i> Login</a></li>
                    <li id="mobile-li-sign-out" hidden class="signin-popup"><a onclick="signOut();" title=""><i class="fas fa-sign-in-alt"></i>Sign Out</a></li>
                </ul>
            </div><!-- Btn Extras -->
            <form class="res-search">
                <input type="text" placeholder="Posiciones o palabras clave"/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
            <div class="responsivemenu">
                <ul>

                    <li class="">
                        <a href="index.html" title="">Home</a>
                    </li>
                    <li class="">
                        <a href="job_list.html" title="">Vacantes</a>
                    </li>
                    <li hidden id="mobile-li-candidatos" class="">
                        <a href="candidates.html" title="">Candidatos</a>
                    </li>
                    <li id="mobile-li-mi-cv"class="">
                        <a href="mycv.html" title="">Tu CV</a>
                    </li>
                    <li class="">
                        <a href="#" title="">Conoce Extrategia</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <header class="stick-top">
        <div class="menu-sec">
            <div class="container">
                <div class="logo">
                    <a href="index.html" title=""><img class="hidesticky" src="images/resource/logo.png" alt=""/><img
                            class="showsticky" src="images/resource/logo10.png" alt=""/></a>
                </div><!-- Logo -->
                <div class="btn-extars">
                    <a id="a-publicar-trabajo" hidden href="publicar_trabajo.html" title="" class="post-job-btn"><i class="fas fa-feather-alt"></i>Publicar</a>
                    <ul class="account-btns">
                        <li id="li-sign-in" class="signup-popup"><a title="" href="signup.html"><i class="fas fa-key"></i> Sign Up</a></li>
                        <li id="li-login" class="signin-popup"><a title=""><i class="fas fa-sign-in-alt"></i> Login</a></li>
                        <li id="li-sign-out" hidden class="signin-popup"><a onclick="signOut();" title=""><i class="fas fa-sign-in-alt"></i>Sign Out</a></li>
                    </ul>
                </div><!-- Btn Extras -->
                <nav>
                    <ul>
                        <li class="">
                            <a href="index.html" title="">Home</a>
                        </li>
                        <li class="">
                            <a href="job_list.html" title="">Vacantes</a>
                        </li>
                        <li hidden id="li-candidatos" class="">
                            <a href="candidates.html" title="">Candidatos</a>
                        </li>
                        <li id="li-mi-cv"class="">
                            <a href="mycv.html" title="">Tu CV</a>
                        </li>
                        <li class="">
                            <a href="#" title="">Conoce Extrategia</a>
                        </li>
                    </ul>
                </nav><!-- Menus -->
            </div>
        </div>
    </header>

    <section class="overlape">
        <div class="block no-padding">
            <div data-velocity="-.1" style="background: url(images/resource/metal1.png) repeat scroll 50% 422.28px transparent;" class="parallax scrolly-invisible no-parallax"></div><!-- PARALLAX BACKGROUND IMAGE -->
            <div class="container fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner-header">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div id="div-especialidades" class="skills-btn"></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-inner">
                                            <div class="action-inner">
                                                <a href="#" title="" id="a-eliminar"><i class="far fa-times-circle"></i><span id="span-elimimar"></span></a>
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
    </section>

    <section class="overlape">
        <div class="block remove-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cand-single-user">
                            <div class="share-bar circle">
                                <a href="#" id="a-linkedin" title="" class="share-twitter"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" id="a-facebook" title="" class="share-fb"><i class="fa fa-facebook"></i></a>
                                <a href="#" id="a-twitter" title="" class="share-twitter"><i class="fa fa-twitter"></i></a>
                            </div>
                            <div class="can-detail-s">
                                <div class="cst"><img id="img-perfil"src="" alt="" /></div>
                                <h3 id="h3-nombre"></h3>
                                <span><i id="i-perfil"></i></span>
                                <p><i class="fas fa-map-marker"></i><span id="span-ubicacion"></span></p>
                            </div>
                            <div class="download-cv">
                            </div>
                        </div>
                        <ul class="cand-extralink">
                            <li><a href="#about" title="">Acerca</a></li>
                            <li><a href="#seccion-educacion" title="">Educación</a></li>
                            <li><a href="#seccion-experiencia" title="">Experiencia</a></li>
                            <li><a href="#seccion-skills" title="">Skills</a></li>
                            <li><a href="#seccion-ingles" title="">Inglés</a></li>
                        </ul>
                        <div class="cand-details-sec">
                            <div class="row">
                                <div class="col-lg-8 column">
                                    <div class="cand-details" id="about">
                                        <h2>Acerca del Candidato</h2>
                                        <p id="p-acerca"></p>
                                        <div class="edu-history-sec" id="seccion-educacion">
                                            <h2>Educación</h2>
                                        </div>
                                        <div class="edu-history-sec" id="seccion-experiencia">
                                            <h2>Trabajo & Experiencia</h2>
                                        </div>
                                        <div class="progress-sec" id="seccion-skills">
                                            <h2>Skills</h2>
                                        </div>
                                        <div class="edu-history-sec" id="seccion-ingles">
                                            <h2>Inglés</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 column">
                                    <div class="job-overview">
                                        <h3>Overview</h3>
                                        <ul>
                                            <li><i class="fas fa-money-bill-wave-alt"></i><h3>Último sueldo</h3><span id="span-sueldo"></span></li>
                                            <li><i class="fas fa-mars-double"></i><h3>Género</h3><span id="span-genero"></span></li>
                                            <li><i class="fas fa-thumb-tack"></i><h3>Rotación en años</h3><span id="span-rotacion"></span></li>
                                            <li><i class="fas fa-baby-carriage"></i><h3>Edad</h3><span id="span-edad">2 Years</span></li>
                                        </ul>
                                    </div><!-- Job Overview -->
                                    <div class="quick-form-job">
                                        <h3>Contacto</h3>
                                        <form action="php/mail.php" method="post">
                                            <input type="text" name="input-nombre" placeholder="Nombre" />
                                            <input type="text" name="input-correo-transmisor" placeholder="Correo" />
                                            <input type="text" name="input-correo-receptor" id="input-correo-receptor" hidden/>
                                            <input type="text" name="input-telefono" placeholder="Número de teléfono" />
                                            <textarea name="input-cuerpo" placeholder="Cuerpo del mensaje"></textarea>
                                            <button name="submit" class="submit">Mandar Correo</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-storage.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
<script src="js/firebase.js" type="text/javascript"></script>
<script src="js/candidate_single.js" type="text/javascript"></script>

<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/modernizr.js" type="text/javascript"></script>
<script src="js/script.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/wow.min.js" type="text/javascript"></script>
<script src="js/slick.min.js" type="text/javascript"></script>
<script src="js/parallax.js" type="text/javascript"></script>
<script src="js/select-chosen.js" type="text/javascript"></script>

</body>
</html>

