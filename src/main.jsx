import React from 'react'
import ReactDOM from 'react-dom/client'



import { SitioApp } from './SitioApp'



import './styles.css'
import { Header } from './components'


import { BrowserRouter } from 'react-router-dom'

const mStyleContainer = {
    padding_top: "135px",
    overflow_y: "hidden",
    margin_top:"-1px"
}
const mStyle = {
    width: "25px",
    position: "relative"
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        {/* 
    <BrowserRouter>
      <SitioApp />
    </BrowserRouter> 
    */}


        <div id="page-container" style={mStyleContainer} className="et-animated-content">
       
            < Header />


            <div id="et-main-area">

                <div id="main-content">



                    <div id="post-2" className="post-2 page type-page status-publish hentry">


                        <div className="entry-content">
                            <div className="et-l et-l--post">
                                <div className="et_builder_inner_content et_pb_gutters3">
                                    <div
                                        className="et_pb_section et_pb_section_0 et_animated et_pb_section_parallax et_pb_with_background et_pb_fullwidth_section et_section_regular">

                                        <span className="et_parallax_bg_wrap"><span className="et_parallax_bg"
                                            style={{ backgroundImage: "url(img/coop.jpg)" }}
                                        >
                                        </span>
                                        </span>




                                        <div className="et_pb_module et_pb_fullwidth_image et_pb_fullwidth_image_0">




                                            <img width="1040" height="552" src="img/1040.jpg" alt=""
                                                title="cosap"
                                                srcSet="img/1040.jpg 1040w, 
                                  img/1040.jpg 980w, 
                                  img/1040.jpg 480w"
                                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1040px, 100vw"
                                                className="wp-image-231" />

                                        </div>


                                    </div>
                                    <div className="et_pb_section et_pb_section_1 et_section_specialty et_section_transparent">





                                        <div className="et_pb_row et_pb_gutters2">
                                            <div
                                                className="et_pb_column et_pb_column_1_2 et_pb_column_0    et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_0 et_animated et_clickable  et_pb_text_align_right  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">

                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><a
                                                                href="#">boletas de servicios</a></h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_1_2 et_pb_column_1   et_pb_specialty_column  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div className="et_pb_row_inner et_pb_row_inner_0">
                                                    <div
                                                        className="et_pb_column et_pb_column_1_4 et_pb_column_inner et_pb_column_inner_0">




                                                        <div
                                                            className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
                                                            <a className="et_pb_button et_pb_button_0 et_animated et_hover_enabled et_pb_bg_layout_light"
                                                                href="#">Noticias</a>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="et_pb_column et_pb_column_1_4 et_pb_column_inner et_pb_column_inner_1 et-last-child et_pb_column_empty">





                                                    </div>




                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="et_pb_section et_pb_section_2 et_section_regular">






                                        <div className="et_pb_row et_pb_row_0 et_animated">
                                            <div
                                                className="et_pb_column et_pb_column_1_3 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_1 et_animated et_clickable  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span
                                                            className="et_pb_image_wrap"><span
                                                                className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Agua Potable</span></h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_1_3 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_2 et_animated et_clickable  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span
                                                            className="et_pb_image_wrap"><span
                                                                className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Club Beneficios</span>
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_1_3 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div
                                                    className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_3 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><a
                                                            href="index.php/sepelio-2/index.html"><span
                                                                className="et_pb_image_wrap"><span
                                                                    className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span></a>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><a
                                                                href="index.php/sepelio-2/index.html">Servicio de
                                                                Sepelio</a></h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                        <div className="et_pb_row et_pb_row_1">
                                            <div
                                                className="et_pb_column et_pb_column_1_2 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_4 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span
                                                            className="et_pb_image_wrap"><span
                                                                className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Camping El Malha</span>
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_1_2 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_5 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span
                                                            className="et_pb_image_wrap"><span
                                                                className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Nosotros</span></h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>


                                    </div>
                                    <div
                                        className="et_pb_section et_pb_section_3 et_pb_section_parallax et_pb_with_background et_pb_fullwidth_section et_section_regular">

                                        <span className="et_parallax_bg_wrap"><span className="et_parallax_bg"
                                            style={{ backgroundImage: "url(img/480.jpg)" }}
                                        ></span></span>




                                        <section
                                            className="et_pb_module et_pb_fullwidth_header et_pb_fullwidth_header_0 et_hover_enabled et_pb_header_with_image et_pb_text_align_left et_pb_bg_layout_dark">




                                            <div className="et_pb_fullwidth_header_container left">
                                                <div className="header-content-container center">
                                                    <div className="header-content">

                                                        <h2 className="et_pb_module_header">Creamos un sistema para que pueda
                                                            concentrarse con nosotros</h2>

                                                        <div className="et_pb_header_content_wrapper">
                                                            <p>Mediante nuestra plataforma web, puede imprimir su boleta de
                                                                servicio, acceder a información de contacto, escribirnos y
                                                                tener acceso a las ultimas noticias desde nuestro blog.
                                                            </p>
                                                        </div>
                                                        <a className="et_pb_button et_pb_more_button et_pb_button_one"
                                                            href="#">Blog de noticias</a>
                                                    </div>
                                                </div>
                                                <div className="header-image-container center">
                                                    <div className="header-image">
                                                        <img width="540" height="540"
                                                            src="img/480.jpg"
                                                            alt="" title=""
                                                            srcSet="img/480.jpg 540w, img/480.jpg 480w"
                                                            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 540px, 100vw"
                                                            className="wp-image-24" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="et_pb_fullwidth_header_overlay"></div>
                                            <div className="et_pb_fullwidth_header_scroll"></div>
                                        </section>


                                    </div>
                                    <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_specialty">





                                        <div className="et_pb_row">
                                            <div
                                                className="et_pb_column et_pb_column_1_4 et_pb_column_7    et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">




                                                    <div className="et_pb_text_inner">
                                                        <h2>Cinco esferas una misión.</h2>
                                                        <p>Tenemos en cuenta cada una de ellas para garantizar y optimizar
                                                            el servicio que brindamos a nuestros clientes.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_3_4 et_pb_column_8   et_pb_specialty_column  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div className="et_pb_row_inner et_pb_row_inner_1 et_pb_gutters2">
                                                    <div
                                                        className="et_pb_column et_pb_column_1_4 et_pb_column_inner et_pb_column_inner_2">




                                                        <div
                                                            className="et_pb_module et_pb_blurb et_pb_blurb_6 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                            <div className="et_pb_blurb_content">
                                                                <div className="et_pb_main_blurb_image"><span
                                                                    className="et_pb_image_wrap"><span
                                                                        className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                                </div>
                                                                <div className="et_pb_blurb_container">
                                                                    <h4 className="et_pb_module_header"><span>seguridad</span>
                                                                    </h4>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="et_pb_column et_pb_column_1_4 et_pb_column_inner et_pb_column_inner_3">




                                                        <div
                                                            className="et_pb_module et_pb_blurb et_pb_blurb_7 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                            <div className="et_pb_blurb_content">
                                                                <div className="et_pb_main_blurb_image"><span
                                                                    className="et_pb_image_wrap"><span
                                                                        className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                                </div>
                                                                <div className="et_pb_blurb_container">
                                                                    <h4 className="et_pb_module_header">
                                                                        <span>mantenimiento</span></h4>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="et_pb_column et_pb_column_1_4 et_pb_column_inner et_pb_column_inner_4 et-last-child">




                                                        <div
                                                            className="et_pb_module et_pb_blurb et_pb_blurb_8 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                            <div className="et_pb_blurb_content">
                                                                <div className="et_pb_main_blurb_image"><span
                                                                    className="et_pb_image_wrap"><span
                                                                        className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                                </div>
                                                                <div className="et_pb_blurb_container">
                                                                    <h4 className="et_pb_module_header"><span>soporte</span>
                                                                    </h4>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>




                                                </div>
                                                <div className="et_pb_row_inner et_pb_row_inner_2 et_pb_gutters2">
                                                    <div
                                                        className="et_pb_column et_pb_column_3_8 et_pb_column_inner et_pb_column_inner_5">




                                                        <div
                                                            className="et_pb_module et_pb_blurb et_pb_blurb_9 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                            <div className="et_pb_blurb_content">
                                                                <div className="et_pb_main_blurb_image"><span
                                                                    className="et_pb_image_wrap"><span
                                                                        className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                                </div>
                                                                <div className="et_pb_blurb_container">
                                                                    <h4 className="et_pb_module_header">
                                                                        <span>conectividad</span></h4>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="et_pb_column et_pb_column_3_8 et_pb_column_inner et_pb_column_inner_6 et-last-child">




                                                        <div
                                                            className="et_pb_module et_pb_blurb et_pb_blurb_10 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">




                                                            <div className="et_pb_blurb_content">
                                                                <div className="et_pb_main_blurb_image"><span
                                                                    className="et_pb_image_wrap"><span
                                                                        className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                                </div>
                                                                <div className="et_pb_blurb_container">
                                                                    <h4 className="et_pb_module_header"><span>monitoreo</span>
                                                                    </h4>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>




                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">






                                        <div className="et_pb_row et_pb_row_2 et_pb_gutters3">
                                            <div
                                                className="et_pb_column et_pb_column_1_3 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_11 et_animated  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span
                                                            className="et_pb_image_wrap"><span
                                                                className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Nuestras Oficinas</span>
                                                            </h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p>Dr. Vazquez <br />Juan José Castelli, Chaco</p>
                                                                <p>CP 3705</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_1_3 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_12 et_animated  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span
                                                            className="et_pb_image_wrap"><span
                                                                className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Horarios de
                                                                Atencion</span></h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p>Lunes a Viernes de:</p>

                                                                {/* <p style={{textAlign:"left"}}
                        
                                                  >7 a 12 y 16 a 19 hs</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_1_3 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_13 et_animated  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span
                                                            className="et_pb_image_wrap"><span
                                                                className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Nuestras Oficinas</span>
                                                            </h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p>Dr. Vazquez <br />Juan José Castelli, Chaco</p>
                                                                <p>CP 3705</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                        <div className="et_pb_row et_pb_row_3">
                                            <div
                                                className="et_pb_column et_pb_column_4_4 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div
                                                    className="et_pb_module dsm_typing_effect dsm_typing_effect_0 et_pb_bg_layout_light ">






                                                    <div className="et_pb_module_inner">
                                                        <h3 className="dsm-typing-effect et_pb_module_header"><span
                                                            className="dsm-typing"
                                                            data-dsm-typing-strings="CONSEJO DE ADMINISTRACIÓN"
                                                            data-dsm-typing-speed="100ms"
                                                            data-dsm-typing-backspeed="50ms"
                                                            data-dsm-typing-backdelay="700ms"
                                                            data-dsm-typing-loop="true" >
                                                        </span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                        <div className="et_pb_row et_pb_row_4">
                                            <div
                                                className="et_pb_column et_pb_column_1_2 et_pb_column_13  et_pb_css_mix_blend_mode_passthrough">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_14 et_animated  et_pb_text_align_center  et_pb_blurb_position_left et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">

                                                        <div className="et_pb_blurb_container">

                                                            <div className="et_pb_blurb_description">
                                                                {/* <p style={{textAlign:"left"}}>
                                                      <strong><span>PRESIDENTE:</span></strong><span> Daniel
                                                          Agustín Detzel</span>
                                                  </p>
                                                  <p style={{textAlign:"left"}}>
                                                      <strong><span>VICEPRESIDENTE:</span></strong><span>
                                                          Víctor Hugo Richter</span>
                                                  </p>
                                                  <p style={{textAlign:"left"}}><strong><span>SECRETARIO:
                                                          </span></strong><span>Mirta Ortiz</span>
                                                  </p>
                                                  <p style={{textAlign:"left"}}><strong><span>PRO
                                                              SECRETARIO:</span></strong><span> Ofelia
                                                          Reyes</span></p>
                                                  <p style={{textAlign:"left"}}><strong><span>TESORERO:
                                                          </span></strong><span>Miguel Avelino Milar</span>
                                                  </p>
                                                  <p style={{textAlign:"left"}}><strong><span>PRO
                                                              TESORERO:</span></strong><span> Mercedes
                                                          Benitez</span></p>
                                                  <p style={{textAlign:"left"}}>
                                                    </p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="et_pb_column et_pb_column_1_2 et_pb_column_14  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_15 et_animated  et_pb_text_align_center  et_pb_blurb_position_left et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">

                                                        <div className="et_pb_blurb_container">

                                                            <div className="et_pb_blurb_description">
                                                                {/* <p style={{textAlign:"left"}}><strong><span>VOCALES
                                                              TITULARES</span></strong><span>: José María
                                                          Plaza Pulgar, Darío Frank, Andrea Redel, Héctor
                                                          Correa</span></p>
                                                  <p style={{textAlign:"left"}}><strong><span>VOCALES
                                                              SUPLENTES: </span></strong><span>Cesar Osvaldo
                                                          Fontana, Francisco Palavecino, Hofzetz, Romero
                                                        </span></p>
                                                  <p style={{textAlign:"left"}}><strong><span>SINDICO TITULAR:
                                                          </span></strong><span>Rita Acosta</span></p>
                                                  <p style={{textAlign:"left"}}><strong><span>SINDICO SUPLENTE:
                                                          </span></strong><span>Norma Ortega </span></p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                        <div className="et_pb_row et_pb_row_5">
                                            <div
                                                className="et_pb_column et_pb_column_4_4 et_pb_column_15  et_pb_css_mix_blend_mode_passthrough et-last-child">




                                                <div
                                                    className="et_pb_module et_pb_blurb et_pb_blurb_16 et_animated  et_pb_text_align_center  et_pb_blurb_position_left et_pb_bg_layout_dark">




                                                    <div className="et_pb_blurb_content">

                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Reseña histórica:</span>
                                                            </h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p style={{ textAlign: "justify" }} ><span>La Cooperativa de
                                                                    Provisión de Servicio s Públicos Contraalmirante
                                                                    Gregorio A. Portillo Ltda. nace el 17 de mayo de
                                                                    1953 con el nombre de Cooperativa de Luz y Fuerza e
                                                                    Industrias Anexas, cuando un grupo de ciudadanos se
                                                                    reúne para conformar una Asociación para lograr la
                                                                    provisión de energía eléctrica, a la que se agregó
                                                                    la venta de los insumos para las conexiones
                                                                    domiciliarias a precio de costo. Llegada la línea de
                                                                    alta tensión a ciudad, a cargo del Estado
                                                                    Provincial, la Cooperativa inicia su transformación
                                                                    para proveer de agua potable a los pobladores Juan
                                                                    José Castelli. En ese lapso pasó a denominarse
                                                                    Cooperativa de Luz y Fuerza, Agua Potable y otros
                                                                    Servicios. Ya en el año 1982 y solamente con el
                                                                    objetivo de proveer agua potable a sus socios es que
                                                                    adquiere el nombre que lleva en la
                                                                    actualidad.</span></p>
                                                                <p>&nbsp;</p>
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


                <span className="et_pb_scroll_top et-pb-icon"></span>


                <footer id="main-footer">

                    <div className="container">
                        <div id="footer-widgets" className="clearfix">
                            <div className="footer-widget">
                                <div id="block-5" className="fwidget et_pb_widget widget_block">
                                    <div className="wp-container-1 wp-block-group"></div>
                                </div>
                                <div id="block-6" className="fwidget et_pb_widget widget_block">
                                    <div className="wp-container-2 wp-block-group"></div>
                                </div>
                            </div>
                            <div className="footer-widget"></div>
                            <div className="footer-widget"></div>
                            <div className="footer-widget"></div>
                        </div>
                    </div>
                    <div className="ic-stickey">
                        <ul>
                            <li className="agua"><a href="#"><p className="aguap">Agua </p>
                                <img src="img/agua.png" style={mStyle} /></a></li>

                            <li className="malha"><a href="" className="entypo-malha" target="_blank" rel="noopener"><p className="malhap">El Malha </p>
                                <img src="img/camping.png" style={mStyle} /></a></li>

                            <li className="beneficios"><a href="#"><p className="beneficiosp">Beneficios</p>
                                <img src="img/beneficios.png" style={mStyle} /></a></li>

                            <li className="sepelio"><a href="#" className="entypo-beneficios" rel="noopener"><p className="sepeliop">Sepelio </p>
                                <img src="img/sepelio.png" style={mStyle} /></a></li>

                            <li className="boleta"><a href="#" className="entypo-beneficios" rel="noopener"><p className="boletap">Boletas </p>
                                <img src="img/boletas.png" style={mStyle} /></a></li>


                        </ul>
                    </div>


                    <div id="footer-bottom">
                        <div className="container clearfix">
                            <ul className="et-social-icons">

                                <li className="et-social-icon et-social-facebook">
                                    <a href="#" className="icon">
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="et-social-icon et-social-twitter">
                                    <a href="#" className="icon">
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li className="et-social-icon et-social-instagram">
                                    <a href="#" className="icon">
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li className="et-social-icon et-social-rss">
                                    <a href="index.php/feed/index.html" className="icon">
                                        <span>RSS</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </footer>
            </div>

        </div>




    </React.StrictMode>

)
