import Header from "./Components/Header/Header";
import Cards from "./Components/ContentMainPage/Cards/Cards";

const arr = [
    {name: "Крем для кожи вокруг глаз против АКНЭ (30 г.), Bio", price: 199, img: "/img/1.png"},
    {name: "Senana Увлажняющая тканевая маска с Aloe Vera", price: 38, img: "/img/2.png"},
    {name: "Омолаживающая лифтинг-эссенция с муцином улитки Images Snail, 15 мл", price: 219, img: "/img/3.png"},
    {name: "Эластин для укладки волос с оливками BioAqua Olive Elastin, 400 гр", price: 449, img: "/img/4.png"}
]

function App() {
    return (
        <div className="wrapper clear">
            <Header/>

            <div className="content">
                <h1 className="mb-30">Каталог</h1>

                <Cards Products={arr}/>
            </div>
        </div>
    );
}

export default App;
