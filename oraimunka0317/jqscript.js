let lista = [{nev:"marci",tul1:"szeret edzeni",tul2:"szeret sütni"},{nev:"cartmen",tul1:"kövér",tul2:"ideges"}];

$(function() {
    const ARTICLEELEM = $("article table");
    ARTICLEELEM[0] + "<tbody></tbody>";
    for (let index = 0; index < lista.length; index++) {
        ARTICLEELEM[0].innerHTML +=
          "<tr>" + lista[index].nev + "</tr>";
    }
    for (let index = 0; index < lista.length; index++) {
        ARTICLEELEM[0].innerHTML +=
          "<td>" + lista[index].tul1 + "</td>";
    }
    for (let index = 0; index < lista.length; index++) {
        ARTICLEELEM[0].innerHTML +=
          "<td>" + lista[index].tul2 + "</td>";
    }
});