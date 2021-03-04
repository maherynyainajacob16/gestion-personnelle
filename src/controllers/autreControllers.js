const controller = {};


controller.etatdesPrest = (req, rea) => {
    const anne= req.body.date;
    
console.log(anne);
if(anne)
{
    req.getConnection((err , conn)=>{
       conn.query('SELECT   (tauxJour*nbJour) AS prestation, medecin.nomMed, medecin.numMed FROM medecin,traitement  WHERE traitement.dateConsultation = ? AND medecin.numMed = traitement.numMed ', [anne], (err,etatprestation) => {
            // console.log(etatprestation);
            
            if(!err){
                console.log(etatprestation);
                rea.render('autreA',{draaa:etatprestation});

            }
           
        });
    }); 
}     
            
};


module.exports = controller;