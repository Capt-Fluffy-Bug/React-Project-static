import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


export default function App () {
    return (
        // <h1>test</h1>
        <main>
                {/* <h1>Test 2</h1> */}
                <Info />
                <About />
                <Interests />
                <Footer />
        </main>
    )
}