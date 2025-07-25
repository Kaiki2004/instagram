export default function Post() {
    const posts = [
        { imagem: "assets/img/gato-telefone.svg", imgUsuario: "assets/img/meowed.svg", usuario: "meowed" },
        { imagem: "assets/img/dog.svg", imgUsuario: "assets/img/catanacomics.svg", usuario: "respondeai" },
        { imagem: "assets/img/chibirdart.svg", imgUsuario: "assets/img/chibirdart.svg", usuario: "barked" },
    ];

    function PostItem({ imagem, imgUsuario, usuario }) {
        return (
            <>
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
                    <img src={imagem} alt={usuario} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai" />
                        <div className="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </>
        )
    }



    return (
        <div className="post">
            {posts.map((item) => (
                <PostItem
                    key={item.usuario}
                    imagem={item.imagem}
                    imgUsuario={item.imgUsuario}
                    usuario={item.usuario}
                />
            ))}
        </div>
    )
}