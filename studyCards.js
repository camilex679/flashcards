const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let flashcards = [];
let proximoIdFlashCard = 1;

function cadastrarFlashCard() {

    rl.question("Digite a pergunta: ", (pergunta) => {
        rl.question("Digite a resposta: ", (resposta) => {
            rl.question("Digite a matéria: ", (materia) => {
                rl.question("Digite a dificuldade: ", (dificuldade) => {


                    let flashcard = {
                        id: proximoIdFlashCard,
                        pergunta: pergunta,
                        resposta: resposta,
                        materia: materia,
                        dificuldade: dificuldade,
                        acertos: 0,
                        erros: 0
                    };

                    flashcards.push(flashcard);

                    proximoIdFlashCard++;

                    console.log("\nFlashcard cadastrado com sucesso!");

                    mostrarMenu();

                })
            })
        })
    })

}



function listarFlashCard() {

    console.log("\n------ LISTA DE FLASHCARDS------");

    if (flashcards.length === 0) {

        console.log("Nenhum flashcard cadastrado.");

        mostrarMenu();

        return;
    }

    for (let i = 0; i < flashcards.length; i++) {

        console.log("-------------------------");

        console.log("ID: ", flashcards[i].id);
        console.log("Matéria: ", flashcards[i].materia);
        console.log("Pergunta: ", flashcards[i].pergunta);
        console.log("Resposta: ", flashcards[i].resposta);
        console.log("Dificuldade: ", flashcards[i].dificuldade);
        console.log("Acertos: ", flashcards[i].acertos);
        console.log("Erros: ", flashcards[i].erros);

    }

    mostrarMenu();
}

function buscarFlashCardPorId() {

    rl.question("Digite o ID do flashCard: ", (id) => {

        id = Number(id);

        let flashCardEncontrado = null;

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].id === id) {

                flashCardEncontrado = flashcards[i];

            }

        }

        if (flashCardEncontrado === null) {

            console.log("Flashcard não encontrado.");

        } else {

            console.log("\nFlashcard encontrado:");

            console.log("ID: ", flashCardEncontrado.id);
            console.log("Matéria: ", flashCardEncontrado.materia);
            console.log("Pergunta: ", flashCardEncontrado.pergunta);
            console.log("Resposta: ", flashCardEncontrado.resposta);
            console.log("Dificuldade: ", flashCardEncontrado.dificuldade);
            console.log("Acertos: ", flashCardEncontrado.acertos);
            console.log("Erros: ", flashCardEncontrado.erros);

        }

        mostrarMenu();

        return;

    });

}

function atualizarFlashCard() {

    rl.question("Digite o id do flashCard que deseja atualizar: ", (id) => {
        id = Number(id);


        let flashCardEncontrado = null


        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].id === id) {

                flashCardEncontrado = flashcards[i];

            }

        }

        if (flashCardEncontrado === null) {

            console.log("Flashcard não encontrado.");

            mostrarMenu();

            return;
        }
        console.log("Flashcard encontrado: ", flashCardEncontrado.pergunta);

        rl.question("Digite a nova pergunta: ", (pergunta) => {
            rl.question("Digite a nova resposta: ", (resposta) => {
                rl.question("Digite a nova matéria: ", (materia) => {
                    rl.question("Digite a dificuldade: ", (dificuldade) => {

                        if (pergunta !== "") {
                            flashCardEncontrado.pergunta;
                        }
                        if (resposta !== "") {
                            flashCardEncontrado.resposta;
                        }
                        if (materia !== "") {
                            flashCardEncontrado.materia;
                        }
                        if (dificuldade !== "") {
                            flashCardEncontrado.dificuldade;
                        }

                        console.log("Flashcard atualizado com sucesso!");

                        mostrarMenu();



                    })
                })
            })
        })

    })
}



function removerFlashCard() {

    rl.question("Digite o ID do flashcard que deseja remover: ", (id) => {

        id = Number(id);


        let indice = -1;

        for (let i = 0; i < flashcards.length; i++) {
            if (flashcards[i].id === id) {
                indice = i;
                break;
            }
        }
        if (indice === -1) {

            console.log("Flashcard não encontrado.");

        } else {

            flashcards.splice(indice, 1);

            console.log("Flashcard removido com sucesso!");

        }

        mostrarMenu();

    });

}

function listarFlashCardsPorMateria() {

    rl.question("Digite a matéria: ", (materia) => {
        let cont = 0

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].materia === materia) {
                cont++
            }
        }

        console.log("Total encontrado: ", cont)

        mostrarMenu();

    })
}

function listarFlashCardsPorDificuldade() {
    rl.question("Digite a dificuldade: ", (dificuldade) => {
        let cont = 0

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].dificuldade === dificuldade) {

                console.log("ID: ", flashcards[i].id)
                console.log("Pergunta: ", flashcards[i].pergunta)
                cont++
            }
        }

        mostrarMenu();

    })

}

function modoDeEstudo() {

    if (flashcards.length === 0) {
        console.log("Nenhum flashcard encontrado.")
        mostrarMenu();
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * flashcards.length);

    let flashcard = flashcards[indiceAleatorio];

    console.log("Pergunta: " + flashcard.pergunta);

    rl.question("Pressione ENTER para mostrar a resposta. ", () => {
        console.log("Resposta: ", flashcard.resposta)

        console.log(" ========================\nFLASHCARD")


        rl.question(" Você acertou? 1- sim, 2- não:  ", (resposta) => {
            let Resposta = +resposta

            if (Resposta === 1) {

                flashcard.acertos++;
            }
            if (Resposta === 2) {

                flashcard.erros++;
            }

            console.log("Acertos: ", (flashcard.acertos), "Erros: ", (flashcard.erros))

            mostrarMenu();
        })
    })
}



function mostrarDesempenho() {

    rl.question("Digite o ID do flashcard: ", (ID) => {

        let id = +ID
        let flashCardEncontrado = null;

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].id === id) {
                flashCardEncontrado = flashcards[i];
                break;
            }
        }

        if (flashCardEncontrado === null) {
            console.log("Flashcard não encontrado.")

        } else {

            let tentativas = flashCardEncontrado.acertos + flashCardEncontrado.erros;

            console.log("Pergunta: ", flashCardEncontrado.pergunta);
            console.log("Acertos: ", flashCardEncontrado.acertos);
            console.log("Erros: ", flashCardEncontrado.erros);
            console.log("Tentativas: ", tentativas);

            if (flashCardEncontrado.acertos > flashCardEncontrado.erros) {
                console.log("Bom desempenho :)")

            } else if (flashCardEncontrado.acertos === flashCardEncontrado.erros) {

                console.log("Precisa praticar mais...")

            } else {

                console.log("Revisar este conteúdo!!!")

            }

        }

        mostrarMenu();
    })

}

function flashCardComMaisErros() {

    let maior = flashcards[0].erros
    let flashCard = flashcards[0]

    for (let i = 1; i < flashcards.length; i++) {
        if (flashcards[i].erros > maior) {
            maior = flashcards[i].erros
            flashCard = flashcards[i]
        }
    }
    
    console.log("========================\nFLASHCARD COM MAIS ERROS")
    console.log("ID: ", flashCard.id);
    console.log("Pergunta: ", flashCard.pergunta);
    console.log( "Matéria: ", flashCard.materia);
    console.log("Erros: ", flashCard.erros )


    mostrarMenu();
}

function estatisticasGerais() {
    let totalAcertos = 0;
    let totalErros = 0;
    
    for (let i = 1; i < flashcards.length; i++) {
        totalAcertos = totalAcertos + flashcards[i].acertos;
        totalErros = totalErros + flashcards[i].erros;
    }
    
   
    console.log("========= ESTATÍSTICAS ========")
    console.log("Flashcards cadastrados: ", flashcards.length )
    console.log("Total de acertos: ", totalAcertos)
    console.log("Total de erros: ", totalAcertos)
    console.log("Total de respostas: ", (totalAcertos + totalErros));

    mostrarMenu();


} 

function matériasCadastradas() {

  for (let i = 0; i < flashcards.length; i++) {
    
  }
} 






// =====================================
// MENU
// =====================================

function mostrarMenu() {

    console.log("\n===============================");
    console.log("       STUDYCARDS");
    console.log("===============================");

    console.log("\nFLASHCARDS");
    console.log("1- Cadastrar flashcards");
    console.log("2- Listar Flashcards");
    console.log("3- Buscar Flashcard por ID");
    console.log("4- Atualizar Flashcard");
    console.log("5- Remover Flashcard");
    console.log("6- Listar Flashcard por matéria");
    console.log("7- Listar Flashcard por dificuldade");
    console.log("8- Modo de Estudo");
    console.log("9- Mostrar Desempenho de um flashcard");
    console.log("10- Flashcard com mais erros");
    console.log("11- Estatisticas gerais");
    console.log("12- Matérias Cadastradas");





    rl.question("\nEscolha uma opção: ", (opcao) => {

        if (opcao === "1") {

            cadastrarFlashCard();

        } else if (opcao === "2") {

            listarFlashCard();

        } else if (opcao === "3") {

            buscarFlashCardPorId();

        } else if (opcao === "4") {

            atualizarFlashCard();

        } else if (opcao === "5") {

            removerFlashCard();

        } else if (opcao === "6") {

            listarFlashCardsPorMateria();

        } else if (opcao === "7") {

            listarFlashCardsPorDificuldade();

        } else if (opcao === "8") {

            modoDeEstudo();

        } else if (opcao === "9") {

            mostrarDesempenho();

        } else if (opcao === "10") {

            flashCardComMaisErros();

        } else if (opcao === "11") {

            estatisticasGerais();

        } else if (opcao === "12") {

            matériasCadastradas();

        }




    })
}

mostrarMenu()