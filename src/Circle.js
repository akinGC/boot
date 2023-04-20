import './Carousal.scss'
const Circle=()=>{

    let arr=[
        {
            url:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237',
            txt:'Bestsellers'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237',
            txt:'Easy to Care'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237',
            txt:'XL Plants'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237',
            txt:'Ceramic Pots'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237',
            txt:'Vegetable Seeds'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237',
            txt:'Fertilisers'
        },
    ]

    return(
        <div className='container-fluid py-5 d-inline-flex justify-content-evenly'>
            

            {
                arr.map((item)=>(
                    <div className='ug-crc d-inline-flex flex-column align-items-center justify-content-center'>
                    <img className='ug-img' src={item.url}/>
<div className='mt-3 lead'>{item.txt}</div>
</div>
                ))
            }


        </div>
    )
}
export default Circle;