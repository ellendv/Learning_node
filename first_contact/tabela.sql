/*=======criando uma tabela =========*/

CREATE TABLE usuarios(
/*adicione seus parametros*/
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/*==========colocar itens na tebela tabela =========*/

INSERT INTO usuarios(idade, email,nome) VALUES(
                                    
/*adicione seus valores mas nessa ^^^^ ordem*/
    19,
    "pessoa3@dominio.com",
    "ellen"
);

/*======como ver na tabela um parametro especificos=====*/

SELECT * FROM usuarios WHERE idade >= 18;

/*======deletar registros de dentro da tabela=======*/

DELETE FROM usuarios WHERE nome = "fernanda";

/*======atualizar registros de dentro da tabela=======*/

UPDATE usuarios SET nome = "flávio" WHERE nome = "mariana";