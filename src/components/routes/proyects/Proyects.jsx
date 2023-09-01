import { Header } from "../../Header/Header"
import { Footer } from "../../footer/Footer"
export const Proyects = () => {
    return (
        <>
            <Header></Header>
            <main>
                <section id="section2" className="w-full h-full">
                    <h4 className="text-2xl"><b>Mis proyectos</b></h4>
                    <div id="proyects">
                        <div id="proyect">
                            <img className="" src="images/Opptastico.png" alt="" />
                            <div>
                                <h1>Opptastico</h1>
                                <a className="text-gray-950 rounded-none" target="_blank" href="https://funny-paprenjak-b00455.netlify.app/">Ver aquí</a>
                                <a className="text-gray-950 rounded-none" href="https://github.com/karen0830/responsive.git">Enlace de gitHub</a>
                            </div>
                        </div>

                        <div id="proyect">
                            <img src="images/Captura de pantalla 2023-08-13 081409.png" alt="" />
                            <div>
                                <h1>CineFlix</h1>
                                <a className="text-gray-950 rounded-none" target="_blank" href="https://tranquil-dasik-243277.netlify.app/">Ver aquí</a>
                                <a className="text-gray-950 rounded-none" href="https://github.com/karen0830/blueasy.git">Enlace de github</a>
                            </div>
                        </div>

                        <div id="proyect">
                            <img src="images/Captura de pantalla 2023-08-13 082208.png" alt="" />
                            <div>
                                <h1>Blueasy</h1>
                                <a className="text-gray-950 rounded-none" target="_blank" href="https://inquisitive-flan-44265f.netlify.app/">Ver aquí</a>
                                <a className="text-gray-950 rounded-none" target="_blank" href="https://github.com/karen0830/CineFlix.git">Enlace de github</a>
                            </div>
                        </div>

                        <div id="proyect">
                            <img src="images/Captura de pantalla 2023-08-13 082845.png" alt="" />
                            <div>
                                <h1>Float</h1>
                                <a className="text-gray-950 rounded-none" target="_blank" href="https://inquisitive-flan-44265f.netlify.app/">Ver aquí</a>
                                <a className="text-gray-950 rounded-none" target="_blank" href="https://github.com/karen0830/CineFlix.git">Enlace de github</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}