import styles from '@/../style/home.module.css'

import Image from 'next/image'
import heroImg from '@/../public/assets/hero.png'
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session?.user)
    redirect('/dashboard');
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles['logo-content']}>
          <Image
            className={styles.hero}
            alt="Logo Bloquinho+"
            src={heroImg}
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br /> seus estudos e tarefas
        </h1>
        <div className={styles['info-content']}>
          <section className={styles['box']}>
            <span>+12 posts</span>
          </section>
          <section className={styles['box']}>
            <span>+12 posts</span>
          </section>
        </div>
      </main>
    </div>
  )
}
