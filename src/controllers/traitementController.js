const controller = {};

controller.listT = (req, res) =>{
    req.getConnection((err , conn)=>{
        conn.query('SELECT * FROM traitement',(err,traitement)=>{
            if(err){
                res.json(err);

            }
           // console.log(medecins);
            res.render('traitement',{
                data: traitement
            });
        });
    });
};

controller.saveT = (req, res)=>{
    const data = req.body;
    console.log("etoizao");
    req.getConnection((err,conn)=>{
        if(conn.query('SELECT * FROM medecin WHERE numMed = ?',[req.body.numMed]) && conn.query('SELECT *FROM patient WHERE numPatient = ?',[req.body.numPatient])){
                console.log(req.body.numMed);
                conn.query('INSERT INTO traitement set ?', [data] , (err, traitement) =>{ 
                console.log(traitement); 
                
                 console.log("etoi    zao");
                 res.redirect('/traitement');
             });
        }
       
        
    })
}

controller.deleteT = (req, res) => {
    const {idT} = req.params;
    
    req.getConnection((err,conn) =>{
        conn.query('DELETE FROM traitement WHERE idTraitement = ?', [idT] , (err, rows) => {
            res.redirect('/traitement');
        });
    })

};
controller.editT = (req, res) => {
    const {idT} = req.params;
    
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM traitement WHERE idTraitement = ?', [idT] , (err, traitement) => {
            console.log(traitement);
            res.render('traitementModif', {
                data: traitement[0]
            });
        });
    });

};

controller.updateT = (req, res) => {
    const {idT} = req.params;
    const newtraitement = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE traitement set ? WHERE idTraitement = ?', [newtraitement, idT], (err,rows) =>{
            res.redirect('/traitement');
        });
    });
};


module.exports = controller;