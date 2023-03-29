import React from "react";

const PortfolioItem = () => {
    return <div class="card">
        <figure class="card__thumb">
            <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" className="card__image" />
            <figcaption class="card__caption">
                <h2 class="card__title">Why You Should Bring Your Dog To Work</h2>
                <p class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
                <a href="" class="card__button">Read more</a>
            </figcaption>
        </figure>
    </div>
}

export default PortfolioItem;