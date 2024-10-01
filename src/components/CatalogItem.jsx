import Button from "./Button.jsx";
import PropTypes from "prop-types";

const CatalogItem = function ({ item ,handleClick ,isClicked}) {

    return (
        <div
            className={'p-5 bg-pale-grey flex flex-col smart-cell'}
        >
            <div className={'mb-[15px] bg-pale-grey'}>
                <img src={`http://localhost:3000${item.image}`} alt={item.name}/>
            </div>
            <div className={'basic-text text-stone-grey mb-2.5'}>{item.author}</div>
            <h3 className={'text-primary-black mb-2.5 text-2xl'}>{item.name}</h3>
            <div className={'pb-[30px] text-primary-black basic-text mb-auto'}>{item.description}</div>
            <div className={'text-forest-green text-xl basic-text mb-5'}>{item.price}</div>
            <Button
                onClick={() => handleClick()}
                isActive={isClicked}
            >{
                !isClicked ? 'В корзину' : 'Удалить из корзины'
            }</Button>
        </div>
    )
}
CatalogItem.propTypes = {
    handleClick: PropTypes.func.isRequired,
    item: PropTypes.object,
    isClicked: PropTypes.bool.isRequired,
}

export default CatalogItem;