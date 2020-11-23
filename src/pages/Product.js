import React, { useEffect,useState } from 'react'
import CategoryTop from '../components/CategoryTop'
import moment from 'moment';
import 'moment/locale/tr';

const Product = () => {
    // const [time, setTime] = useState("");
  
    // const handleChange = (e) => {
    //     e.target.value
    //     alert(e.target.value)
    // }
    // useEffect(() => {
        
    //     console.log(document.querySelector('[name="time"]:checked').value)
    //     const sendTimeSelect = document.getElementById("sendTime");
    //     for (let i = 0; i < sendTimeSelect.options.length; i++) {
           
    //         if (moment(sendTimeSelect.options[i].value,"DD.MM.YYYY HH:mm").diff(moment())) {
    //             sendTimeSelect.options[i].remove();
    //             console.log(moment(sendTimeSelect.options[i].value,"DD.MM.YYYY HH:mm"));
    //         }
    //     }
    // });
    return (
        <React.Fragment>
            <CategoryTop />
            <div className="container">
                <div className="row no-gutters">
                    <aside className="col-md-6">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <div> <a href="#"><img src="images/products/buket1.jpg" /></a></div>
                            </div>
                            <div className="thumbs-wrap">
                                <a href="#" className="item-thumb"> <img src="images/products/buket1.jpg" /></a>
                                <a href="#" className="item-thumb"> <img src="images/products/buket2.jpg" /></a>
                            </div>
                        </article>
                    </aside>
                    <main className="col-md-6 border-left">
                        <article className="content-body">

                            <h2 className="title">Sonsuz Sevgi 19 Beyaz Gül</h2>

                            <div className="mb-3">
                                <var className="price h4">119.00₺</var>
                            </div>

                            <p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>


                            <dl className="row">
                                <dt className="col-sm-3">Ürün Kodu#</dt>
                                <dd className="col-sm-9">BKT-1000</dd>

                                <dt className="col-sm-3">Renk</dt>
                                <dd className="col-sm-9">Beyaz</dd>

                                <dt className="col-sm-3">Etiketler</dt>
                                <dd className="col-sm-9">
                                    <span className="badge badge-primary d-inline-block mr-1">Buket</span>
                                    <span className="badge badge-primary d-inline-block mr-1">Anneler Günü</span>
                                </dd>
                            </dl>

                            <hr />
                            <p>Gönderim Tarihi:</p>
                            <div className="d-flex form-group btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-primary active">
                                    <input type="radio" name="time" id="option1" value={moment().format("DD.MM.YYYY HH:mm")} checked={true} />
                                    Bugün
                                        <p>{moment().format("DD.MM.YYYY")}</p>
                                </label>
                                <label className="btn btn-outline-primary">
                                    <input type="radio" name="time" id="option2" value={moment().add('1', 'days').format('DD.MM.YYYY 00:00')} />
                                    Yarın
                                    <p>{moment().add("1", "days").format("DD.MM.YYYY")}</p>
                                </label>
                                <label className="btn btn-outline-primary">
                                    <input type="radio" name="time" id="option2" value={moment().add("2", "days").format("DD.MM.YYYY 00:00")} />
                                    {moment().add("2", "days").format('dddd')}
                                    <p>{moment().add("2", "days").format("DD.MM.YYYY")}</p>
                                </label>
                                <label className="btn btn-outline-primary">
                                    <input type="radio" name="time" id="option3" value={moment().add("3", "days").format("DD.MM.YYYY 00:00")} />
                                    {moment().add("3", "days").format('dddd')}
                                    <p>{moment().add("3", "days").format("DD.MM.YYYY")}</p>
                                </label>
                            </div>
                            <div className="form-group">
                                <label>Gönderim Zamanı:</label>
                                <select className="form-control mt-2" id="sendTime">
                                    <option value="09:00">09:00-10:00</option>
                                    <option value="10:00">10:00-11:00</option>
                                    <option value="11:00">11:00-12:00</option>
                                    <option value="12:00">12:00-13:00</option>
                                    <option value="13:00">13:00-14:00</option>
                                    <option value="14:00">14:00-15:00</option>
                                    <option value="15:00">15:00-16:00</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="f1">Gönderim Adresi:</label>
                                <textarea className="form-control" placeholder="İlçe, Mahalle, Cadde, Sokak, Kapı No.." id="f1"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="f1">Alıcı Adı Soyadı</label>
                                <input type="text" className="form-control" id="f1" />
                            </div>

                            <a href="#" className="btn btn-lg btn-success float-right"> <span className="text">Sipariş Ver</span> <i className="fas  fa-shipping-fast"></i>  </a>
                        </article>
                    </main>
                </div>
            </div>
        </React.Fragment >
    )
}
export default Product