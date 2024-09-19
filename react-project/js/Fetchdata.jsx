/* eslint-disable react/jsx-key */
function Fetchdata(params) {
    const {data} = params;
    return(
        <>
        {data.cards.map((d) =>  {
            return(
                <p>{d.text}</p>
            )
        })}
        </>
    )
}
export default Fetchdata