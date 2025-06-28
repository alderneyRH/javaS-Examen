let sintomas;
let edad;
let antecedentes;
let nivel = null;
let prioridad;

console.log("***** BIENVENIDO A URGENCIAS******");
sintomas = prompt("INGRESE SÍNTOMA PRINCIPAL (fiebre, respiración, dolor, vomito, malestar general):").toLowerCase();


if (sintomas === "fiebre" || sintomas === "respiración") {
    nivel = 3; // ALTA
} else {
    if (sintomas === "dolor" || sintomas === "vomito") {
        nivel = 2; // MEDIA
    } else {
        if (sintomas === "malestar general") {
            nivel = 1; // BAJA
        }
    }
}
edad = parseInt(prompt("Ingrese la edad del paciente:"));
if (edad < 12 || edad > 60) {
    nivel = nivel + 1;
}

antecedentes = prompt("¿Tiene enfermedades crónicas? (si/no)").toLowerCase();
if (antecedentes === "si") {
    nivel = nivel + 1;
}

if (nivel > 4) {
    nivel = 4;
}

if (nivel === 1) {
    prioridad = "BAJA";
} else {
    if (nivel === 2) {
        prioridad = "MEDIA";
    } else {
        if (nivel === 3) {
            prioridad = "ALTA";
        } else {
            if (nivel === 4) {
                prioridad = "CRICTICA";
            }
        }
    }
}
console.log(prioridad)