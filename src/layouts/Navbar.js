import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-main navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"
                        aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link pl-0" data-toggle="dropdown" href="#">
                                    <strong><i className="fa fa-bars"></i> Gönderim Amacına Göre</strong>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Anneye Çiçek</a>
                                    <a className="dropdown-item" href="#">Sevgiliye Çiçek</a>
                                    <a className="dropdown-item" href="#">Öğretmene Çiçek</a>
                                    <a className="dropdown-item" href="#">Doğum Günü</a>
                                    <a className="dropdown-item" href="#">Özür Dilerim</a>
                                    <a className="dropdown-item" href="#">Babaya Çiçek</a>
                                    <a className="dropdown-item" href="#">Hoşgeldin Bebek</a>
                                    <a className="dropdown-item" href="#">Yeni İş & Terfi</a>
                                    <a className="dropdown-item" href="#">Düğün & Açılış & Tören</a>
                                    <a className="dropdown-item" href="#">Geçmiş Olsun</a>
                                    <a className="dropdown-item" href="#">Cenaze & Merasim</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/urunler">Kişiye Özel Ürünler</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/urun">Buketler</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Aranjmanlar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Saksı Çiçekleri</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Çelenkler</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ferforjeler</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar