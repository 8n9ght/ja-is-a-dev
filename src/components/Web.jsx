import { Canvas } from "@react-three/fiber";

const Web = () => {
    return (
        <div className="web">
            <section className="web__content">
                <article className="web__content__canvas">
                    <Canvas></Canvas>
                </article>
                <article className="web__content__text">
                    <p className="web__content__text--item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Eaque ullam eveniet possimus eum nisi optio, libero non provident voluptatibus quos quidem!
                        Minima et atque laboriosam velit.
                        Nulla modi quibusdam porro?
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Web;