import Conteudo from '../componentes/Conteudo.jsx';
import Rodape from '../componentes/Rodape.jsx';
import Icone from '../componentes/Icone.jsx';
import Titulo from '../componentes/Titulo.jsx';
import InputEmail from '../componentes/InputEmail.jsx';
import InputSenha from '../componentes/InputSenha.jsx';
import Botao from '../componentes/Botao.jsx';
import Link from '../componentes/Link.jsx';
import './Login.css';
function Login() {
    return (
        <>
            <Conteudo estilo="login-container">
                <Icone imagem="https://www.svgrepo.com/show/411955/learn.svg" texto="Logo da
                Aplicação"/>
                <Titulo texto="Aluno Online" />
                <form action="#" method="post">
                    <InputEmail />
                    <InputSenha />
                    <Botao texto="Entrar"/>
                    <Link texto="Esqueceu a Senha?" />
                </form>
            </Conteudo>
            <Rodape texto="Copyright (C) 2024" />
        </>
    );
}

export default Login;
