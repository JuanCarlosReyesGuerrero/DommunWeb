export interface Agente {
    Id: number,
    Slug: string,
    nombres: string,
    apellidos: string,
    email: string,
    fotoPerfil: string,
    descripcionPerfil: string,
    celular: string,
    facebook: string,
    twitter: string,
    linkedin: string,
    instagram: string,
    website: string,
    inmobiliariaId: string,
    isActive: boolean,
    fullName: string

    //public InmobiliariaDto? Inmobiliaria { get; set; } 
}
