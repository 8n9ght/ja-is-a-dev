import { useEffect } from "react";

const Beginning = ({setCinematicOver, delay}) => {

    
    const handleCinematicOver = async () => {
        const beginningWrapper = document.querySelector('.beginning');

        await delay(5000);
        beginningWrapper.classList.add('fadeOut1');

        await delay(5000);
        setCinematicOver(true);
    }

    useEffect(() => {
        handleCinematicOver();   

    }, [])

return (
        <div className="beginning" >
            <article className="beginning__content">
                <p className="beginning__content__text first fadeIn1">
                    But first,
                </p>
                <p className="beginning__content__text second fadeIn2">
                    Let me tell you,
                </p>
                <p className="beginning__content__text third fadeIn3">
                    How we'll successfully do so
                </p>
            </article>
        </div>
    )
};

export default Beginning;