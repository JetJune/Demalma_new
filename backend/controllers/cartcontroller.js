import userModel from "../models/userModel.js"

// Adding to the user cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Ajouté(s) au Panier"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Erreur"})
    }
}

// Remove from the user's cart
const removeFromCart = async(req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;

        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"L'element a ete supprimer du panier"});

    } catch (error) {

        console.log(error);
        res.json({success:false, message:"Erreur"});
        
    }
}

// Fetch User's cart Data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData});
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Erreur"})     
    }
}

export {addToCart, removeFromCart, getCart}