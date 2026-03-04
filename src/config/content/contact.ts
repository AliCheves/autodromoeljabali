export interface ContactInfo {
    institution: string;
    phone: string;
    phoneFormatted: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        country: string;
    };
    mapsUrl: string;
}

export const OFFICIAL_CONTACT_INFO: ContactInfo = {
    institution: "Autódromo Internacional El Jabalí",
    phone: "22315555",
    phoneFormatted: "2231-5555",
    email: "comisiondeportiva@aces.com.sv",
    address: {
        line1: "Kilómetro 34 ½ de la Carretera Panamericana Oeste",
        line2: "entre el desvío a Quezaltepeque y Ciudad Versalles, Departamento de La Libertad",
        country: "El Salvador",
    },
    mapsUrl:
        "https://maps.app.goo.gl/nvPzK5TSrq27DDs59",
};
