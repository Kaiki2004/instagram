import { useState } from "react";

export default function Post() {
    const posts = [
        { imagem: "assets/img/gato-telefone.svg", imgUsuario: "assets/img/meowed.svg", usuario: "meowed", curtidas: 101523, curtidoPor:'respondeai',imgCurtidoPor: "assets/img/respondeai.svg" },
        { imagem: "assets/img/dog.svg", imgUsuario: "assets/img/adorable_animals.svg", usuario: "respondeai", curtidas: 101500, curtidoPor:'meowed',imgCurtidoPor: "assets/img/meowed.svg" },
        { imagem: "assets/img/chibirdart.svg", imgUsuario: "assets/img/barked.svg", usuario: "barked", curtidas: 101400, curtidoPor:'meowed',imgCurtidoPor: "assets/img/meowed.svg" },
    ];

    function PostItem({ imagem, imgUsuario, usuario, curtidasIniciais,curtidoPor,imgCurtidoPor }) {
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
            <div className="post">
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
                            <ion-icon className={like === 'heart' ? 'coracao' : ''} onClick={curtir} name={like}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={salvarPost} name={savePost}></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={imgCurtidoPor} alt="respondeai" />
                        <div className="texto">
                            Curtido por <strong>{curtidoPor}</strong> e <strong>outras {curtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="posts">
            {posts.map((item, index) => (
                <PostItem
                    key={index}
                    imagem={item.imagem}
                    imgUsuario={item.imgUsuario}
                    usuario={item.usuario}
                    curtidasIniciais={item.curtidas}
                    curtidoPor={item.curtidoPor}
                    imgCurtidoPor={item.imgCurtidoPor}
                />
            ))}
        </div>
    );
}
