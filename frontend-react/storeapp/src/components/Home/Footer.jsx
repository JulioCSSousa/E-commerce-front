
import './Footer.css'

export default function Footer() {

    return (
        <>
            <div >
                <div className="footer-container">
                    <div className="container mt-4" >
                        <div className="about-us-container d-none d-md-block" >
                            <div className="about-us">
                                <h2>Sobre nós</h2>
                                Somos um casal com uma ideia de negócio próprio e sonhos a realizar. Estamos
                                iniciando uma
                                lojinha para podermos
                                realizar nossos sonhos e espero que gostem dos nossos produtos feitos com muito
                                carinho a
                                todos.
                                Temos parceiros que que disponibiizam os melhores produtos e contamos com a
                                qualidade
                            </div>
                        </div>
                        <div className="contacts-container d-none d-md-block">
                            <div className="contacts">
                                <h2>Contacts</h2>
                                <i className="fas fa-facebook-messenger"></i>:(19)98710-2078
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>:facebook/ArDoceLar
                                <i className="fa fa-instagram" aria-hidden="true"></i>:LarDoceAr
                            </div>
                        </div>

                        <div className="accordion d-md-none" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Sobre Nós
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="about-us">
                                        <p>
                                            Somos um casal com uma ideia de negócio próprio e sonhos a realizar. Estamos
                                            iniciando uma
                                            lojinha para podermos
                                            realizar nossos sonhos e espero que gostem dos nossos produtos feitos com muito
                                            carinho a
                                            todos.
                                        </p>
                                        <p>
                                            Temos parceiros que que disponibiizam os melhores produtos e contamos com a
                                            qualidade
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}