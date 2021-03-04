const controller = {};

controller.listP = (req, res) =>{
    req.getConnection((err , conn)=>{
        conn.query('SELECT * FROM patient',(err,patient)=>{
            if(err){
                res.json(err);

            }
           // console.log(medecins);
            res.render('patient',{
                data: patient
            });
        });
    });
};
controller.saveP = (req, res)=>{
    const data = req.body;
    console.log("etoizao");
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO patient set ?', [data] , (err, patients) =>{ 
           console.log(patients); 
           
    console.log("etoizao");
            res.redirect('/patient');
        });
    })
}

controller.deleteP = (req, res) => {
    const {idP} = req.params;
    
    req.getConnection((err,conn) =>{
        conn.query('DELETE FROM patient WHERE idPatient = ?', [idP] , (err, rows) => {
            res.redirect('/patient');
        });
    })

};
controller.editP = (req, res) => {
    const {idP} = req.params;
    
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM patient WHERE idPatient = ?', [idP] , (err, patient) => {
            console.log(patient);
            res.render('patientModif', {
                data: patient[0]
            });
        });
    });

};

controller.updateP = (req, res) => {
    const {idP} = req.params;
    const newPatient = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE patient set ? WHERE idPatient = ?', [newPatient, idP], (err,rows) =>{
            res.redirect('/patient');
        });
    });
};


module.exports = controller;