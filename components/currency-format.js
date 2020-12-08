export default function currencyFormat( x ) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " kr.";
}

