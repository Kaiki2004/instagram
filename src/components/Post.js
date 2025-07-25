import { useState } from "react";

export default function Post() {
    const posts = [
        { imagem: "assets/img/gato-telefone.svg", imgUsuario: "assets/img/meowed.svg", usuario: "meowed", curtidas: 101523 },
        { imagem: "assets/img/dog.svg", imgUsuario: "assets/img/catanacomics.svg", usuario: "respondeai", curtidas: 101500 },
        { imagem: "assets/img/chibirdart.svg", imgUsuario: "assets/img/chibirdart.svg", usuario: "barked", curtidas: 101400 },
    ];

    function PostItem({ imagem, imgUsuario, usuario, curtidasIniciais }) {
        const [savePost, setSavePost] = useState('bookmark-outline');
        const [like, setLike] = useState('heart-outline');
        const [curtidas, setCurtidas] = useState(curtidasIniciais);

        function salvarPost() {
            setSavePost(prev => prev === 'bookmark-outline' ? 'bookmark' : 'bookmark-outline');
        }

        function curtir() {
            if (like === 'heart-outline') {
                setLike('heart');
                setCurtidas(prev => prev + 1);
            } else {
                setLike('heart-outline');
                setCurtidas(prev => prev - 1);
            }
        }

        function curtirPost() {
            if (like === 'heart-outline') {
                setLike('heart');
                setCurtidas(prev => prev + 1);
            }
        }

        return (
            <div className="post-item">
                <div className="topo">
                    <div className="usuario">
                        <img src={imgUsuario} alt={usuario} />
                        {usuario}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img onClick={curtirPost} src={imagem} alt={usuario} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon onClick={curtir} name={like}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={salvarPost} name={savePost}></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai" />
                        <div className="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras {curtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="post">
            {posts.map((item, index) => (
                <PostItem
                    key={index}
                    imagem={item.imagem}
                    imgUsuario={item.imgUsuario}
                    usuario={item.usuario}
                    curtidasIniciais={item.curtidas}
                />
            ))}
        </div>
    );
}
