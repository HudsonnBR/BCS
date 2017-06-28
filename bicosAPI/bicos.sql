create database bicos;
use bicos;

create table user(
	id int auto_increment primary key,
    nome varchar(32) not null,
    usuario varchar(16) not null,
    email varchar(32) not null,
    senha varchar(32) not null
)engine = InnoDB default charset = latin1;

create table servico(
	id int auto_increment primary key,
    titulo varchar(64) not null,
    valor float(10) not null,
    descricao varchar(255) not null
)engine = InnoDB default charset = latin1;
