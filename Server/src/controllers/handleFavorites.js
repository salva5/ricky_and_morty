let myFavorite = [];

const postFav = (req, res) => {
    const newFav = req.body
    myFavorite.push(newFav);
    return res.json(myFavorite);
}

const deleteFav = (req, res) => {
    const {id} = req.params
    
    myFavorite = myFavorite.filter(Fav => Fav.id !== id)
    return res.status(200).json(myFavorite);
}

module.exports = {
    postFav,
    deleteFav
};
