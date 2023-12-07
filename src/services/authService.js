import jwt from 'jsonwebtoken';

export const isUserAuth = () => {
    return (req, res, next) =>{
        // Vérifie d'abord si nous avons un token et s'il est valide
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({ message: 'Token manquant' });
        }
      
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
          if(err){
            return res.status(498).json({ message: 'Token invalide' });
          } else {
            req.decoded = decodedToken;
            // vérifie si le token correspond à celui de l'utilisateur
            // TODO implémenter la vérification du token stocké en bdd
            return next();
          }
        });
    }
}

export const authUser = () => {
    //TODO implémenter l'authentification avec la création du token et stockage en bdd user
}


export default { authUser, isUserAuth }