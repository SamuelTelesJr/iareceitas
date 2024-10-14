interface RefeicoesProps {
    horario: string
    nome: string
    alimentos: string[]
}
export interface Data {
    nome: string
    peso: number
    idade: number
    altura: number
    objetivo: string
    sexo: string
    refeicoes: RefeicoesProps[]
    suplementos: string[]
}