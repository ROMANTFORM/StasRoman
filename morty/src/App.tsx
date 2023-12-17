import React from 'react';
import styles from './App.module.scss';
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import PageRoutes from "components/pages/PageRoutes";

function App() {
    return (
        <div className={styles.app_wrap}>
            <Header/>
            <main className={styles.site_wrap}>
                <div className={styles.main_wrap}>
                    <PageRoutes/>
                </div>
            </main>
            <Footer/>

        </div>
    );
}

export default App;
