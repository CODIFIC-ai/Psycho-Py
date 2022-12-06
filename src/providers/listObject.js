import Trash from "../assets/object/object-01.png";
import Tent from "../assets/object/object-02.png";
import Guitar from "../assets/object/object-03.png";
import Mailbox from "../assets/object/object-04.png";
import Balloons from "../assets/object/object-05.png";
import LightPole from "../assets/object/object-06.png";
import Plane from "../assets/object/object-07.png";
import Hydrant from "../assets/object/object-08.png";
import LawnMower from "../assets/object/object-09.png";
import object010 from "../assets/object/object-010.png";
import HotAirBalloon from "../assets/object/object-011.png";
import Bicycle from "../assets/object/object-012.png";

const listObject = [
    { img: Trash, name: "Lixo", x: "", y: "" , display: ''},
    { img: Tent, name: "Barraca", x: "", y: "" , display: ''},
    { img: Guitar, name: "Violão", x: "", y: "" , display: ''},
    { img: Mailbox, name: "Correio", x: "", y: "" , display: ''},
    { img: Balloons, name: "Balões", x: "", y: "" , display: ''},
    { img: LightPole, name: "Poste de luz", x: "", y: "" , display: ''},
    { img: Plane, name: "Avião", x: "", y: "" , display: ''},
    { img: Hydrant, name: "Hidrante", x: "", y: "" , display: ''},
    { img: LawnMower, name: "Cortado de grama", x: "", y: "" , display: ''},
    { img: object010, name: "Scooter", x: "", y: "" , display: ''},
    { img: HotAirBalloon, name: "Balão de ar quente", x: "", y: "" , display: ''},
    { img: Bicycle, name: "Bicicleta", x: "", y: "" , display: ''},
];


const phase = [
    { type: 'FASE A', arrObj: ['Lixo', 'Barraca'] },
    { type: 'FASE B', arrObj: ['Bicicleta', 'Balão de ar quente'] },
    { type: 'FASE C', arrObj: ['Lixo', 'Barraca', 'Violão', 'Correio'] },
    { type: 'FASE D', arrObj: ['Bicicleta', 'Balão de ar quente', 'Scooter', 'Cortado de grama'] },
    { type: 'FASE E', arrObj: ['Lixo', 'Barraca', 'Violão', 'Correio', 'Balões', 'Poste de luz',] },
    { type: 'FASE F', arrObj: ['Bicicleta', 'Balão de ar quente', 'Scooter', 'Cortado de grama', 'Hidrante', 'Avião'] },
]


export { listObject, phase }