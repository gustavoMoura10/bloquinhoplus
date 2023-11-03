"use client";
import styles from '@/../style/components/header.module.css'
import { signIn, useSession, signOut } from 'next-auth/react'
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
                    {
                        session?.user && (
                            <Link href="/dashboard" className={styles.link}>
                                Meu Painel
                            </Link>
                        )
                    }
                </nav>

                {session ?
                    <button
                        className={styles['login-button']}
                        onClick={() => signOut()}
                    >Olá {session?.user?.name}
                    </button>

                    :
                    <div className={styles['header-buttons']}>
                        <Link href="/sign-up">
                            <button
                                className={styles['auth-button']}
                            >Registar
                            </button>
                        </Link>
                        <Link href="/sign-in">
                            <button
                                className={styles['auth-button']}
                            >Login
                            </button>
                        </Link>
                    </div>
                }
            </section>
        </header>
    )
}