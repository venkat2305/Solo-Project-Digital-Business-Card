import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"

function Page() {
    return (
        <div>
            <App />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<Page />)