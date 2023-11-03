import styles from '@/../style/sign-in.module.css'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faBars, faBug, faBugs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default async function SignIn() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div>
                    <div className={styles['col-form']}>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input id="email" type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className={styles['col-form']}>
                        <label htmlFor="email">
                            Password
                        </label>
                        <input id="password" type="password" placeholder="Enter Your Password" />
                    </div>
                </div>
                <div>
                    <button
                        className={styles['login']}
                    >Login
                    </button>
                   

                    <div className='col-login-external'>
                        <button className={styles['login-external']}>
                        
                            <span>Github</span>
                        </button>
                        <button className={styles['login-external']}>
                                
                          

                            <div>Google</div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}