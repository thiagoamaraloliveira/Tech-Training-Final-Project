const sqlite = require("sqlite3")

let bancoDeDados = new sqlite.Database('src/database/database.db', function (err){
    if(err !== null){
        console.error( err.message)
    }
})

//bancoDeDados.run(`DROP TABLE carros`)

//criar tabelas
bancoDeDados.run(` CREATE TABLE IF NOT EXISTS carros (
        carro_id INTEGER PRIMARY KEY AUTOINCREMENT,
        carro_modelo TEXT NOT NULL,
        carro_marca TEXT NOT NULL,
        carro_ano INTEGER NOT NULL,
        carro_cor TEXT NOT NULL )`,function(err){
            if(err !== null){ 
                console.log(err.message)
            }
    })

    bancoDeDados.run(`INSERT INTO carros 
        (carro_modelo,carro_marca,carro_ano,carro_cor)
         VALUES ('Cruze','Chevrolet',2020,'preto')
        `,function(err){
            if(err !== null){ 
                console.log(err.message)
            }
    })

    bancoDeDados.all(`SELECT * FROM carros`,function(err,row){
       
        console.log(row)
})