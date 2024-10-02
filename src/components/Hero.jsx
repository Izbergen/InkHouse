import LayerImage from "../assets/layer.png";
import Button from "./Button.jsx";

const Hero = () => (
    <section className={'container flex justify-between gap-[30px] items-center'}>
        <div className={'hidden sm:block basis-[195px] 2xl:basis-1/2 shrink-0 grow '}>
            <img src={LayerImage ? LayerImage : null} alt={'bird image'}/>
        </div>
        <div className={'font-raleway font-medium basis-[285px] 2xl:basis-1/2 grow'}>
            <h1 className={'text-3xl text-primary-black mb-5 sm:mb-[10px] md:mb-5 leading-[30px] sm:text-4xl sm:leading-9 md:text-[40px] md:leading-10 xl:text-5xl xl:leading-[48px] 2xl:text-6xl 2xl:leading-[60px]'}>Реплики
                картин <br/> от <span className={'text-forest-green'}>Ink. House</span></h1>
            <div className={'text-sm text-stone-grey mb-10 sm:mb-3 sm:text-base md:text-lg md:mb-10 2xl:mb-15'}>Высокое
                качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
            </div>
            <Button onClick={() => console.log('here')}>Продукция</Button>
        </div>
    </section>
)

export default Hero;