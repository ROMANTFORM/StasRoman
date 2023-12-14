import React from 'react';
import './App.scss';
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import PageRoutes from "components/pages/PageRoutes/PageRoutes";

function App() {
    return (
        <div className="App">
            <Header/>

            <main>
                <PageRoutes/>
            </main>

            <Footer/>

        </div>
    );
}

export default App;
