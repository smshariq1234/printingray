import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MobileMenu extends Component{

    state = {
        active : false
    }

    toggleMobileMenu = () => {
        this.setState({
            active: !this.state.active
        })
    }

    componentDidMount(){
        var offCanvasNav = document.getElementById('offcanvas-navigation');
        var offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');

        for (let i = 0; i<offCanvasNavSubMenu.length; i++){
           offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
        }

        var menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
        var numMenuExpand = menuExpand.length;

        function sideMenuExpand() {

            if(this.parentElement.classList.contains('active') === true) {
                this.parentElement.classList.remove('active');
            } else {
                for (let i = 0; i < numMenuExpand; i++) {
                    menuExpand[i].parentElement.classList.remove('active');
                }
                this.parentElement.classList.add('active');
            }
        }

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", sideMenuExpand);
        }
    }


    render(){
        return(
            <div>
                {/*=======  offcanvas mobile menu  =======*/}
                <div className= {`offcanvas-mobile-menu ${this.state.active ? 'active': ''} `} id="mobile-menu-overlay">
                    <a href="#/" className="offcanvas-menu-close" id="mobile-menu-close-trigger" onClick={this.toggleMobileMenu}>
                        <i className="ion-android-close" />
                    </a>
                    <div className="offcanvas-wrapper">
                        <div className="offcanvas-inner-content">
                            <div className="offcanvas-mobile-search-area">
                                <form action="#">
                                <input type="search" placeholder="Search ..." />
                                <button type="submit"><i className="fa fa-search" /></button>
                                </form>
                            </div>
                            <nav className="offcanvas-navigation" id="offcanvas-navigation">
                                <ul>
                                <li><Link to={`${process.env.PUBLIC_URL}/home-one`}>HOME</Link></li>

<li className="has-children has-children--multilevel-submenu">
    <Link to={`${process.env.PUBLIC_URL}/services`}>COLLECTION</Link>
    <ul className="submenu">
    <li><Link to={`${process.env.PUBLIC_URL}/services`}>Cosmetic Box</Link></li>
    </ul>
</li>
<li><Link to={`${process.env.PUBLIC_URL}/`}>CUSTOM BOX</Link></li>
<li><Link to={`${process.env.PUBLIC_URL}/`}>BOXES BY STYLE</Link></li>

<li><Link to={`${process.env.PUBLIC_URL}/`}>OUR REVIEW</Link></li>

<li className="has-children has-children--multilevel-submenu">
    <Link to={`${process.env.PUBLIC_URL}/`}>BLOG</Link>
    <ul className="submenu">
    <li><Link to={`${process.env.PUBLIC_URL}/`}>Blog</Link></li>
    </ul>
</li>
<li><Link to={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</Link> </li>
                                </ul>
                            </nav>
                            <div className="offcanvas-widget-area">
                                <div className="off-canvas-contact-widget">
                                <div className="header-contact-info">
                                    <ul className="header-contact-info__list">
                                    <li><i className="ion-android-phone-portrait" /> <a href="tel://12452456012">(703) 566 9901 </a></li>
                                    <li><i className="ion-android-mail" /> <a href="mailto:info@yourdomain.com">info@printmyboxes.com</a></li>
                                    </ul>
                                </div>
                                </div>
                                {/*Off Canvas Widget Social Start*/}
                                <div className="off-canvas-widget-social">
                                <a href="#/" title="Facebook"><i className="fa fa-facebook" /></a>
                                <a href="#/" title="Twitter"><i className="fa fa-twitter" /></a>
                                <a href="#/" title="LinkedIn"><i className="fa fa-linkedin" /></a>
                                <a href="#/" title="Youtube"><i className="fa fa-youtube-play" /></a>
                                <a href="#/" title="Vimeo"><i className="fa fa-vimeo-square" /></a>
                                </div>
                                {/*Off Canvas Widget Social End*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of offcanvas mobile menu  =======*/}

            </div>
        )
    }
}

export default MobileMenu;