import React from 'react'

export const SecPlataforma = () => {
    return (
        <>

            <div className="et_pb_section et_pb_section_3 et_pb_section_parallax et_pb_with_background et_pb_fullwidth_section et_section_regular">
                <span className="et_parallax_bg_wrap">
                    <span className="et_parallax_bg" style={{ backgroundImage: "url(img/480.jpg)" }}></span>
                </span>
                <section className="et_pb_module et_pb_fullwidth_header et_pb_fullwidth_header_0 et_hover_enabled et_pb_header_with_image et_pb_text_align_left et_pb_bg_layout_dark">
                    <div className="et_pb_fullwidth_header_container left">
                        <div className="header-content-container center">
                            <div className="header-content">
                                <h2 className="et_pb_module_header">Creamos un sistema para que pueda concentrarse con nosotros</h2>
                                <div className="et_pb_header_content_wrapper">
                                    <p>Mediante nuestra plataforma web, puede imprimir su boleta de servicio, acceder a información de contacto, escribirnos y tener acceso a las ultimas noticias desde nuestro blog.
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

        </>
    )
}
