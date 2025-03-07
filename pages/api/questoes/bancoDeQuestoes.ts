import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/respostas";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho trasmite a Doenca de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto e conhecido no Norte e Nordeste vomo "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Coco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abobora'),
    ]),
    new QuestaoModel(203, 'Qual o coletivo de cae?', [
        RespostaModel.errada('Manda'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual e o triangulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilatero'),
        RespostaModel.errada('Isoceles'),
        RespostaModel.errada('Trapezio'),
        RespostaModel.certa('Escaleno'),
    ]),
]

export default questoes