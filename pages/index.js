import Layout from "../components/Layout";
import { skills, experiences, projects } from '/profile.js';
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Index = () => (
    <Layout>
        {/** Header card */}
        <div className="container py-4">
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/PROFILEWEB.jpg " style={{ width: `${70}%` }} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h1>Giuliano Caruso</h1>
                                <h3>Full Stack Developer</h3>
                                <h5>Analista de Sistemas, con conocimiento avanzado de ingles, Responsable y Activo, desarrollo todo tipo
                                    de Aplicaciones(Desktop,Mobile y Web)
                                </h5>
                               <h4>Contratarme:</h4>
                               <FontAwesomeIcon icon={faDiscord}alt="Discord Logo" width={50} height={50} />giulichajari
                               <a href="https://wa.me/543456472650"><FontAwesomeIcon icon={faWhatsapp} alt="WhatsApp Logo" width={50} height={50} />+543456472650</a>
                               <a ><FontAwesomeIcon icon={faGoogle} alt="Gmail Logo" width={50} height={50} />caruso.giuliano3@gmail.com</a>
           
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-ligth">
                        <div className="card-body">
                            <h1>Skills</h1>
                            {
                                skills.map(({ skill, porc }, i) => (
                                    <div className="py-3" key={i}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar"
                                                style={{ width: `${porc}%` }}  >
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-ligth">
                        <div className="card-body">
                            <h1>Experiencia</h1>
                            <ul>
                                {
                                    experiences.map(({ title, description, from, to }, i) => (
                                        <li key={i}>
                                            <h5>{title}</h5>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>
                                        </li>

                                    ))
                                }
                            </ul>
                            <ul>
                            <li>He desarrollado API's con PHP y bases de Datos MySQL.</li>
                            <li>Tambien trabaje con FireBase para notificaciones PUSH.</li>
                            <li>FrontEnd en React.</li>
</ul>
                        </div>
                    </div>
                </div>
            </div>

            {/**portfolio */}
            <div className="row py-4">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                        <img src={`/${image}`} alt="" className="card-img-top" />      
                                        </div>
                                
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#!">Know More</a>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
      

    </Layout>
)

export default Index;