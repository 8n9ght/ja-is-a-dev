const About = ({setMenuActive}) => {
    return (
            <div className="about">
                <canvas className="about__3d"></canvas>
                <section className="about__content">
                    <h2 className="about__content__title">Welcome into the J-Averse</h2>
                    <article className="about__content__text">
                        <p className="about__content__text--item">
                            Hey there ! It’s me Jean-Arthur from Earth 1 !
                            A lot would say that Im a developer, but I define myself as an experience builder.
                            You can think of me as a guide that helps people like you build their ownn immersive web experience.
                        </p>
                    </article>
                    <article className="about__content__floating floating--1">
                        <p>Wow !</p>
                    </article>
                    <article className="about__content__floating floating--2">
                        <p>Nice isn't it ?</p>
                    </article>
                    <article className="about__content__floating floating--3">
                        <p>Is this the multiverse ?</p>
                    </article>
                    <article className="about__content__floating floating--4">
                        <p>🍹</p>
                    </article>
                    <article className="about__content__floating floating--5">
                        <p>🎮</p>
                    </article>
                    <article className="about__content__floating floating--6">
                        <p>🏍️</p>
                    </article>
                </section>
            </div>
    )
}

export default About;