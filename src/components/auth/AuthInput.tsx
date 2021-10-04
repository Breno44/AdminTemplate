interface AuthInputProps {
    label: string;
    valor: any;
    tipo: 'text' | 'email' | 'password';
    obrigatorio?: boolean;
    valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.tipo} value={props.valor} onChange={e => props.valorMudou?.(e.target.value)} required={props.obrigatorio}/>
        </div>
    )
}