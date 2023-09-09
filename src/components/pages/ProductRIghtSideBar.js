import { useSelector, useDispatch } from 'react-redux'
import { setColorType, addToCart } from '../../redux/action';
const ProductRIghtSideBar = () => {
    const givenSize = useSelector((colors)=> colors.StepsReducer.allColor);
    const defaultCheck = useSelector((colorIndex)=> colorIndex.StepsReducer.colorIndex)
    const dispatch = useDispatch();
    const handleSelectedSize = (e, index) => {
        dispatch(setColorType(e.target.value, index))
    
    }
    const isActive = useSelector((sel)=> sel.StepsReducer.setColor )

    return (
        <aside className="w-full lg:w-1/4 xl:w-1/4 xs:w-full pt-20 relative">

            <div className="bg-white itemPriceBox sticky top-0">
                <h2 className=' xs:text-[32px] sm:text-[32px]'>JONATHAN SIMKHAI</h2>
                <p className="pt-2 pb-3">Lurex Linen Viscose Jacket in Conchiglia</p>
                <p className="price pb-6 font-bold">$225</p>
                <p className="color pb-2">Color Conchiglia</p>
                <div className="variants flex justify-items-start mb-6">
                    <img src={`${process.env.PUBLIC_URL}/images/firstPImage.jpg`} className="object-none h-16 w-16" alt="first 1" />
                    <img src={`${process.env.PUBLIC_URL}/images/secondPImage.jpg`} className="object-none h-16 w-16" alt="scrollable 2" loading="lazy" />
                </div>
                <div className="flex size justify-between items-center mt-3 mb-2">
                    <span className="selectedSize">Size <cite>{isActive}</cite></span>
                    <a href="/sizeGuide" className="underline uppercase">Size-guide</a>
                </div>
                <div className="sizeBox size">
                    {/* Size Selection */}
                    <div className="flex justify-between items-center w-[324px] flex-wrap">
                        {
                            givenSize.map((btn, index) => {
                                return (
                                    <button key={index} type="button" onClick={btnData => handleSelectedSize(btnData, index)} value={btn} name={btn} className={`${defaultCheck === index ? 'bg-black text-white' : 'bg-white text-gray-800'} font-semibold py-1 mt-2 px-8 border border-gray-400 rounded-full`}>
                                        {btn}
                                    </button>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="addToBag w-full hidden">Add to Bag</button>
                    <ProductList />
                </div>
                <p className="pb-4">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
                <p>Speak to a Personal Stylist CHAT NOW</p>
            </div>
        </aside>
    )
}
const ProductList = () => {
    const dispatch = useDispatch();
  
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 15 },
      // Add more products here
    ];
  
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };
  
    return (
        <button className='addToBag w-full' onClick={() => handleAddToCart(products[0])}>Add to Cart</button>
    );
  };
export default ProductRIghtSideBar