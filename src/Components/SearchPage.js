import React from "react";
import SearchBar from "./Searchbar";
import "./SearchPage.css";

function SearchPage() {
    return (
        <div>
            <div className="search-page">
                
                <SearchBar />
            </div>
            <header className="header">
                
            </header>
            <main className="main">
                <article className="entry entry-lede">
                    <img className="entry-img" src="https://assets.codepen.io/467/horse02.jpg" alt="A handsome young horse in front of an expansive sky" />
                    <div className="entry-content">
                        <h1 className="entry-headline primary-headline">This horse sure knows how to code</h1>
                        <time className="entry-date meta">January 24, 2021</time>
                        <span className="entry-byline meta">by Alex Trost</span>
                        <p className="entry-summary">Aliquam justo enim, mollis a justo et, sagittis vulputate turpis. Nulla facilisi. Proin quis mattis ipsum, eu eleifend dolor. Nulla auctor ex vel ipsum varius viverra. Vestibulum convallis elit nec quam bibendum varius. Morbi ut mattis dui. Aenean a massa vitae magna commodo consequat. Duis ac lacus.</p>
                    </div>
                </article>
                <article className="entry">
                    <img className="entry-img" src="https://assets.codepen.io/467/horse03.jpg" alt="The profile view of three majestic brown horses" />
                    <h1 className="entry-headline primary-headline">Trost’s tolt trots to TypeScript</h1>
                    <time className="entry-date meta">January 24, 2021</time>
                    <span className="entry-byline meta">by Alex Trost</span>
                    <p className="entry-summary">Cras mollis dolor vitae tellus sollicitudin, quis sagittis mauris dictum. Donec aliquet ipsum et ex pulvinar, id vestibulum lectus egestas. Vestibulum non ultrices mauris, nec elementum mauris. Donec aliquet ipsum at risus vulputate viverra.</p>
                </article>
                <article className="entry">
                    <img className="entry-img" src="https://assets.codepen.io/467/horse01.jpg" alt="The profile view of three majestic brown horses" />
                    <h1 className="entry-headline primary-headline">This team of three does front end magic</h1>
                    <time className="entry-date meta">January 24, 2021</time>
                    <span className="entry-byline meta">by Alex Trost</span>
                    <p className="entry-summary">Mauris ut volutpat quam. Duis vitae turpis volutpat dolor efficitur rhoncus. Aenean lacinia est non porta dictum. Curabitur cursus mauris est, nec pharetra nisi imperdiet eget. Suspendisse non ultricies ligula.</p>
                </article>
                <section className="trending">
                    <article className="trending-entry">
                        <time className="trending-entry-date meta">January 24, 2021</time>
                        <h1 className="trending-entry-headline primary-headline">Gallop into the amazing new world of CSS</h1>
                    </article>
                    <article className="trending-entry">
                        <time className="trending-entry-date meta">January 24, 2021</time>
                        <h1 className="trending-entry-headline primary-headline">Horse around with new HTML5 tags</h1>
                    </article>
                    <article className="trending-entry">
                        <time className="trending-entry-date meta">January 24, 2021</time>
                        <h1 className="trending-entry-headline primary-headline">Five featured fonts of front end horse</h1>
                    </article>
                    <article className="trending-entry">
                        <time className="trending-entry-date meta">January 24, 2021</time>
                        <h1 className="trending-entry-headline primary-headline">Saddle up with Rust</h1>
                    </article>
                </section>
            </main>
            <button>
                <div class="text">
                    <span>Guardar</span>
                   
                    
                </div>
                <div class="clone">
                    <span>Guardar</span>
                   
                    
                </div>
                <svg
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                >
                    <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                    ></path>
                </svg>
            </button>

        </div>
    );
}

export default SearchPage;

