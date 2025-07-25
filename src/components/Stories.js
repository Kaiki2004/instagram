export default function Stories() {
    const stories = [
        { imagem: "assets/img/9gag.svg", usuario: "9gag" },
        { imagem: "assets/img/meowed.svg", usuario: "meowed" },
        { imagem: "assets/img/barked.svg", usuario: "barked" },
        { imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
        { imagem: "assets/img/respondeai.svg", usuario: "respondeai" },
        { imagem: "assets/img/filomoderna.svg", usuario: "filomoderna" },
        { imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" },
    ];

    function Story({imagem, usuario }) {
        return (
            <div className="story">
                <div className="imagem">
                    <img src={imagem} alt={usuario} />
                </div>
                <div className="usuario">{usuario}</div>
            </div>
        );
    }

    return (
        <div className="stories">
            {stories.map((item) => (
                <Story key={item.usuario} imagem={item.imagem} usuario={item.usuario} />
            ))}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
