create database projetoDW;
use projetoDW;

create table figure (

idFigure int auto_increment primary key,
nome varchar(50) not null,
preco decimal(15,2),
altura decimal(15,2),
largura decimal(15,2),
categoria varchar(50),
imagem varchar(255)

);
