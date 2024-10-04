import {useContext, useEffect, useState} from "react";

import Tabs from "./Tabs.jsx";
import CatalogItem from "./CatalogItem.jsx";

import {ApiContext} from "../context/ApiContext.js";


const Catalog = function (id) {
    const [tabs, setTabs] = useState([
        { id: 1 , name: 'france' , content: 'Франция', active: true },
        { id: 2 , name: 'german' , content: 'Германия', active: false },
        { id: 3 , name: 'england' , content: 'Англия', active: false }
    ]);

    const [currentCatalog, setCurrentCatalog] = useState('france');
    const [catalog, setCatalog] = useState([]);
    const api = useContext(ApiContext);

    useEffect( () => {
        api.getCatalog(currentCatalog).then(catalogData => setCatalog(catalogData));

        },[api ,currentCatalog]
    )
    function handleTabClick(currentTab){
        setTabs(prevTabs =>
            prevTabs.map((tab) =>
                ({  ...tab , active: currentTab.id === tab.id }))
        );

        setCurrentCatalog(currentTab.name);
    }

    function renderCatalogItems() {

        return Array.isArray(catalog) && catalog.length > 0
            ? catalog.map((item) => (
                <CatalogItem
                    key={item.id}
                    item={item}
                />
            ))
            : 'No items found';
    }



    return (
        <>
            <div className={'container'}>
                <header className={'flex-col flex gap-5 mb-5 md:flex-row justify-between'}>
                    <h2 className={'text-2xl basic-text text-primary-black md:text-3xl lg:text-[40px]'}>Репродукции</h2>
                    <Tabs tabs={tabs} handleTabClick={handleTabClick}/>
                </header>
                <div className={'smart-grid'}>
                    {renderCatalogItems()}
                </div>
            </div>
        </>
)
}
export default Catalog;