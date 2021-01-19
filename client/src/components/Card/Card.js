

const Card = ({cardData}) => {
    return (
        <div className="col-3 CardBody">
            <div className="row">
                <div className="col-12">
                    <img className="img-fluid" src={cardData.url} alt="Card image cap" />
                    <p className="">{cardData.title}</p>
                    <p className=""></p>
                    <a className="btn btn-primary" href={'https://reddit.com' + cardData.permalink} target="_blank">See Post</a>
                </div>
            </div>
        </div>
    );
}

export default Card;