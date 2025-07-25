export default function Suggestions() {
    const sugestoes = [
        { imagem: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes" },
        { imagem: "assets/img/chibirdart.svg", usuario: "chibirdart" },
        { imagem: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar" },
        { imagem: "assets/img/adorable_animals.svg", usuario: "adorable_animals" },
        { imagem: "assets/img/smallcutecats.svg", usuario: "smallcutecats" },
    ];

    function Sug({ imagem, usuario }) {
        return (
            <div className="sugestao">
                <div className="usuario">
                    <img src={imagem} alt={usuario} />
                    <div className="texto">
                        <div className="nome">{usuario}</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
        );
    }

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((item) => (
                <Sug key={item.usuario} imagem={item.imagem} usuario={item.usuario} />
            ))}
        </div>
    );
}
