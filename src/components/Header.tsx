"use client";
import styles from '@/../style/components/header.module.css'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
export default function Header() {
    const { data: session, status } = useSession();
    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>Bloquinho<span>+</span></h1>
                    </Link>
                </nav>

                {session ? <>
                    <button className={styles['login-button']} aria-expanded="true" aria-haspopup="true">Teste</button>

                </> : <button className={styles['login-button']}>Acessar</button>}
            </section>
        </header>
    )
}