import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Catalog from "./components/Catalog.jsx";

import { useState } from "react";

function App() {
    const [hrefs] = useState([
        'catalog',
        'newItems',
        'aboutUs'
    ]);
    const [sections] = useState([
        {
            id: 1,
            name: 'Hero Section',
            content: Hero,
        },
        {
            id: 2,
            name: 'Catalog Section',
            content: Catalog,
            href: hrefs[0],
        },
    ]);

    function renderSections() {
        return sections.map(({ id, content: Content, href }) => (
            <Content key={id} id={ href ? href : id }/>
        ));
    }

    return (
        <>
            <Header hrefs={hrefs} />
            <main className="py-15 flex flex-col gap-15">
                {renderSections()}
            </main>
        </>
    );
}

export default App;
