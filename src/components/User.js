import { useState } from "react";

export default function User() {
    const [user, setUser] = useState("catanacomics");
    const [imagem, setImagem] = useState("assets/img/catanacomics.svg");

    function mudarUser() {
        const nome = prompt("Qual o seu usuário?");
        if (!nome) {
            setUser("catanacomics");
        } else {
            setUser(nome);
        }
    }

    function mudarImagem() {
        const imagemUser = prompt("Qual o link da nova imagem?");
        if (!imagemUser) {
            setImagem("assets/img/catanacomics.svg");
        } else {
            setImagem(imagemUser);
        }
    }

    return (
        <div className="usuario">
            <img src={imagem} alt="imagem de perfil" onClick={mudarImagem} />
            <div className="texto">
                <span>
                    <strong>{user}</strong>
                    <ion-icon onClick={mudarUser} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}
