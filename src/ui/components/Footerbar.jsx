import React from 'react'

import {  ListStickey } from './components'

export const Footerbar = () => {
  return (
    <>
    
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

    </>
  )
}
