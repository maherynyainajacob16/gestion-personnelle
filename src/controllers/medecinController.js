const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err , conn)=>{
        conn.query('SELECT * FROM medecin',(err,medecin)=>{
            if(err){
                res.json(err);

            }
           // console.log(medecins);
            res.render('medecin',{
                data: medecin
            });
        });
    });
};
controller.save = (req, res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO medecin set ?', [data] , (err, medecin) =>{ 
           // console.log(medecin); 
            res.redirect('/');
        });
    })
}

controller.delete = (req, res) => {
    const {id} = req.params;
    
    req.getConnection((err,conn) =>{
        conn.query('DELETE FROM medecin WHERE idMed = ?', [id] , (err, rows) => {
            res.redirect('/');
        });
    })

};
controller.edit = (req, res) => {
    const {id} = req.params;
    
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM medecin WHERE idMed = ?', [id] , (err, medecin) => {
            console.log(medecin);
            res.render('medecinModif', {
                data: medecin[0]
            });
        });
    });

};

controller.update = (req, res) => {
    const {id} = req.params;
    const newMedecin = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE medecin set ? WHERE idMed = ?', [newMedecin, id], (err,rows) =>{
            res.redirect('/');
        });
    });
};


module.exports = controller;