import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className="flex flex-col">
            <h1>Autenticacao</h1>
            <AuthInput tipo="email" label="E-mail" valor={email} valorMudou={setEmail} obrigatorio />
            <AuthInput tipo="password" label="Senha" valor={senha} valorMudou={setSenha} obrigatorio />
        </div>
    )
}