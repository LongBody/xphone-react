

export default function showRating(rating) {
    let result = [];
    for (let index = 0; index < rating; index++) {
        result.push(<i className="fas fa-star styleStar " key={index}></i>)
    }
    for (let index2 = 0; index2 < (5 - rating); index2++) {
        result.push(<i className="far fa-star styleStarNone" key={index2 + 100} ></i>)
    }

    return result
}


