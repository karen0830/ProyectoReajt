import { Header } from "../../Header/Header"
import { Footer } from "../../footer/Footer"
export const Experience = () => {
    return (
        <>
            <Header></Header>
            <main>
                <section id="section3">
                    <h4><b>Mi experiencia</b></h4>
                    <div id="experiences">
                        <div id="experience">
                            <h4><b>Opptastico:</b></h4>
                            <div>
                                <p className="text-gray-950">esta experiencia de maquetación utilizando Flexbox me permitió convertir un diseño estático en una maqueta interactiva y adaptable. Aprendí que Flexbox es una herramienta poderosa para lograr una disposición de elementos eficiente y que se adapta fácilmente a diferentes contextos de pantalla. Además, reforzó mi comprensión de la importancia de elegir las tecnologías de maquetación adecuadas para lograr los objetivos de diseño y experiencia del usuario de manera efectiva.</p>
                            </div>
                        </div>
                        <div id="experience">
                            <h4><b>Float</b></h4>
                            <div>
                                <p className="text-gray-950">Una de las experiencias más desafiantes en mi viaje de maquetación fue cuando tuve que trabajar con la propiedad float para crear un diseño complejo. En ese momento, estaba en las primeras etapas de aprender sobre el diseño web y no estaba familiarizado con herramientas más modernas como Flexbox o CSS Grid.</p>

                                <p className="text-gray-950">El proyecto requería que creara un diseño de varias columnas en una página web. Siguiendo los recursos que tenía en ese momento, decidí utilizar la propiedad float para lograr la disposición en columnas. Sin embargo, pronto me di cuenta de las dificultades asociadas con esta técnica.</p>

                                <p className="text-gray-950">A medida que agregaba elementos flotados para crear las columnas, me encontré con problemas de desbordamiento, donde los elementos no se comportaban como se esperaba y se superponían entre sí. También descubrí que los márgenes y el espaciado entre las columnas no se manejaban de manera eficiente, lo que resultaba en un diseño desalineado.</p>

                                <p className="text-gray-950">Además, me enfrenté a problemas de limpieza de flotación, ya que los elementos que seguían a las columnas flotadas a menudo no se comportaban como se esperaba debido a la propiedad float. Tuve que investigar y aprender sobre técnicas de limpieza de flotación, como utilizar elementos clearfix o pseudo-elementos ::after para restablecer el flujo normal del diseño.</p>
                            </div>
                        </div>
                        <div id="experience">
                            <h4><b>Blueasy</b></h4>
                            <div>
                                <p className="text-gray-950">Una experiencia muy enriquecedora en mi camino de maquetación involucró la combinación de Flexbox y CSS Grid para crear un diseño altamente adaptable y visualmente atractivo. En este proyecto, tenía la tarea de diseñar una página web con una estructura de contenido compleja y variada.</p>
                                <p className="text-gray-950">Comencé por analizar el diseño y dividirlo en secciones lógicas. Identifiqué áreas donde Flexbox y CSS Grid podrían ser más efectivos según las necesidades de diseño. Para las secciones que requerían alineación y distribución de elementos en un solo eje, opté por utilizar Flexbox. Esto me permitió lograr alineaciones precisas y un flujo natural de contenido.</p>
                                <p className="text-gray-950">Por otro lado, para las secciones que necesitaban una disposición en cuadrícula más elaborada, decidí emplear CSS Grid. Utilicé la propiedad display: grid para crear rejillas flexibles que albergaran diferentes tipos de contenido, como imágenes y bloques de texto. Utilizar grid-template-areas y grid-template-columns me permitió estructurar las secciones de manera clara y mantener un diseño coherente en todas las pantallas.</p>
                            </div>
                        </div>
                        <div id="experience">
                            <h4><b>CineFlix</b></h4>
                            <div>
                                <p className="text-gray-950">Una experiencia emocionante en mi trayectoria de diseño web involucró la maquetación de un mockup para una página de películas y series, utilizando las tecnologías Flexbox y CSS Grid en combinación con la manipulación dinámica del Document Object Model (DOM). En este proyecto, se me presentó el desafío de transformar un diseño visualmente atractivo en una página funcional y adaptable que permitiera a los usuarios explorar y descubrir contenido audiovisual de manera interactiva.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

