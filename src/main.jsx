import React from 'react'
import ReactDOM from 'react-dom/client'



import { SitioApp } from './SitioApp'



import './styles.css'
import { Footerbar, Header, ListStickey, MenuApp, Modal, Access, SecPlataforma, Esferas, Acercade } from './components'


import { BrowserRouter } from 'react-router-dom'

const mStyleContainer = {
    padding_top: "135px",
    overflow_y: "hidden",
    margin_top: "-1px"
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
                                    <div className="et_pb_section et_pb_section_0 et_animated et_pb_section_parallax et_pb_with_background et_pb_fullwidth_section et_section_regular">
                                        <span className="et_parallax_bg_wrap">
                                            <span 
                                                className="et_parallax_bg" style={{ backgroundImage: "url(img/logo.svg)" }}>
                                            </span>
                                        </span>
                                        <div className="et_pb_module et_pb_fullwidth_image et_pb_fullwidth_image_0">
                                            <img width="1040" height="552" src="img/1040.jpg" alt=""
                                                title="Cooperativa Norte Chaqueño"
                                                srcSet="img/1040.jpg 1040w, img/1040.jpg 980w, img/1040.jpg 480w"
                                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1040px, 100vw"
                                                className="wp-image-231" />
                                        </div>
                                    </div>

                                    < Access />

                                    < MenuApp />
                                    {/*                                     
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
                                                            href="#"><span
                                                                className="et_pb_image_wrap"><span
                                                                    className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon"></span></span></a>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><a
                                                                href="#">Servicio de
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


                                    </div> */}

                                    < SecPlataforma />

                                    <Esferas />

                                    < Acercade/>


                                </div>
                            </div>
                        </div>


                    </div>



                </div>


                <span className="et_pb_scroll_top et-pb-icon"></span>

                < Footerbar />

                {/* <footer id="main-footer">

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

                    < ListStickey />



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
                                    <a href="#" className="icon">
                                        <span>RSS</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </footer>
                 */}
            </div>

        </div>



        <Modal />
    </React.StrictMode>

)
