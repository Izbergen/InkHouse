import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Catalog from "./components/Catalog.jsx";


function App() {
    const hrefs = [
        'catalog',
        'newItems',
        'aboutUs'
    ];

    return (
        <>
            <Header hrefs={hrefs} />
            <main className="py-15 flex flex-col gap-15">
                <Hero/>
                <section id={hrefs[0]}>
                    <Catalog/>
                </section>
                <section id={hrefs[1]}>

                </section>
                <section id={hrefs[2]}>

                </section>
            </main>
        </>
);
}

export default App;
